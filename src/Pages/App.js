import '../css/App.css';
import Board from '../components/Board/Board';
import NavBar from '../components/NavBar/NavBar';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import { useState } from 'react';
import { useParams } from 'react-router';
import Cookies from 'universal-cookie';
import useTable from '../hooks/useTable'

import Spinner from 'react-bootstrap/Spinner'
import setSquareValue from '../api/table/setSquarevalue'


const cookie = new Cookies();
const token = cookie.get('authToken');
const playerId = cookie.get('playerId');

function refreshTable(positions,playerId,players=[],renderFlag){
  const auxArr = Array(9).fill(0);
  if(players.length > 0){
    positions.forEach((p) =>
    auxArr[p.box] = p.player_id === parseInt(playerId) ? 
                      players.find((p) => p.id === parseInt(playerId)).symbol : 
                      players.find((p) => p.id !== parseInt(playerId)).symbol
  )

  }

  if(renderFlag){
    return auxArr
  }
  return false;
}


const App = () => {
  const tablaId = useParams()
  // console.log('tablaId => ',tablaId.id)
  
  const {table} = useTable(token,tablaId.id);
  const [turn,setTurn] = useState('X');
  const [moveNumber,setMoveNumber] = useState(0);
  const [squares,setSquares] = useState(Array(9).fill(0));
  const [winningSquares,setwinningSquares] = useState([]);
  const [score,setScore] = useState({
    X: 0,
    O: 0,
  });

  const playerSymbol = table ? table.players.filter((p) => p.id === parseInt(playerId))[0].symbol : '';
  const positionsToRender = table ? table.positions : Array(9).fill(0);
  const renderFlag = table ? table.table.move_number ===  moveNumber : false
  const players = table ? table.players : [];
  const refreshStatus = refreshTable(positionsToRender,playerId,players,renderFlag);

  if(refreshStatus){
    setSquares(refreshStatus)
    setMoveNumber(moveNumber+1)
    setTurn(playerSymbol)

  }

  
  const actualPlayer = table && table.players ? table.players.filter((p) => p.id === table.table.curret_player)[0].symbol :'X';

  const winner =  table &&  table.players.filter((p) => p.id === table.table.winner)[0];
  const gameReady = table ? true : false

  const reset = () =>{
    setTurn('');
    setSquares(Array(9).fill(0));
    setwinningSquares([])
  }
  const checkWinner = newSquares =>{
    // TODO: No implementado
  }
  
  const endGame = (result,winnerPositions) => {
    // TODO: No implementado
  }
  //console.log('squares ===> ',squares)

  const handleCklick  = square=> {
      setTurn(playerSymbol)
      let newSquares = [...squares];
      newSquares.splice(square,1,turn);
      setSquareValue(token,tablaId.id,square).then(() => {
        setSquares(newSquares);
      });
    


  }


  return gameReady ? (
    <div>
    <div className='navbar'>
    <NavBar></NavBar>
    </div>
    <div className='container'>
    <Board turn={turn} squares={squares} onClick={handleCklick} winningSquares={winningSquares}/>
    <ScoreBoard scoreO={score.O} scoreX={score.X} />
    <br></br>
    {winner ? <h1>El ganador es: {winner.symbol}</h1> :<h1>Juega: {actualPlayer}</h1>}
    </div>
    </div>
  ) :
  (
    <div>
    <div className='navbar'>
    <NavBar></NavBar>
    </div>
    <div className='container'>
    <h1>Waiting for a player</h1>
    <Spinner animation="border" role="status" variant="light">
      {/* <span className="visually-hidden">Loading...</span> */}
    </Spinner>
    </div>
    </div>
  )
  ;
}



export default App; 
