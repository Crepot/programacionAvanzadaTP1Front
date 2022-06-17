import '../css/App.css';
import Board from '../components/Board/Board';
import NavBar from '../components/NavBar/NavBar';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import Cookies from 'universal-cookie';
import useTable from '../hooks/useTable'
import useSquares from '../hooks/useSquares'
import usePlayer from '../hooks/usePlayer'
import Spinner from 'react-bootstrap/Spinner'
import setSquareValue from '../api/table/setSquarevalue'
import Alert from 'react-bootstrap/Alert'

//TODO: LLevar toda la lógica al back y leerla desde ahí o validar ahí tambien


// TODO: Diferenciar entre la unión a la partida y el nuevo juego

const cookie = new Cookies();
const token = cookie.get('authToken')
const playerId = cookie.get('playerId')

function getBoxValues(positions){
  console.log('estas son las positions que tengo que leer => ',positions)
  const boxValues = []
  boxValues.push(positions.box0)
  boxValues.push(positions.box1)
  boxValues.push(positions.box2)
  boxValues.push(positions.box3)
  boxValues.push(positions.box4)
  boxValues.push(positions.box5)
  boxValues.push(positions.box6)
  boxValues.push(positions.box7)
  boxValues.push(positions.box8)
  return boxValues;
}


const App = () => {
  const tablaId = useParams()
  // console.log('tablaId => ',tablaId.id)
  
  const {table} = useTable(token,tablaId.id);
  // const {positions} = useSquares(token,tablaId.id);
  const {player} = usePlayer(token,playerId)
  const playerSym = player ? player.symbol : null;
  const [turn,setTurn] = useState(1);
  //const [positionId,setPositionId] = useState(table ?table.positions[table.table.moveNumber].id :0);
  const [squares,setSquares] = useState(Array(9).fill(0)) //TODO: acá vamos a llenarlo con position0
  const [score,setScore] = useState({
    X: 0,
    O: 0,
  });
  


  console.log('SYMBOL DEL PLAYER ',playerSym)
  
  
  //console.log('table ===> ',turn)

  const [winningSquares,setwinningSquares] = useState([]);
  const positionId = table ? table.positions[table.table.moveNumber].id : 0;

  //console.log('ESTE ES EL ID DE LA POSICIÓN ACTUAL => ', positionId)

  const gameReady = table ? true : false

  const reset = () =>{
    setTurn(playerSym);
    setSquares(Array(9).fill(null));
    setwinningSquares([])
  }
  const checkWinner = newSquares =>{
    console.log('Se llama a checkWinner')
    // for(let i  = 0; i<winnerPositions.length;i++){
    //   const [a,b,c] = winnerPositions[i];
    //   if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
    //     //Hay un ganador
    //     console.log('ENTRA AL GANADOR');
    //     endGame(newSquares[a],winnerPositions[i]);
    //     return 
    //   }
    // }

    if(!newSquares.includes(0)){
      // Hay empate
      console.log('ENTRA AL EMPATE');
      endGame(null,Array.from(Array(9).keys()));
      return
    }
    console.log('estos son los newSquares',newSquares)
    setTurn(turn === turn ? 'O' : turn)
  }
  
  const endGame = (result,winnerPositions) => {
    setTurn(null);
    if(result !== null){
      setScore({
        ...score,
        [result]: score[result]+1,
      });
      console.log('winnerPositions =>',winnerPositions) 
      setwinningSquares(winnerPositions);
    }
    setTimeout(() => {
      reset();
  }, 2000);

  }
  //console.log('squares ===> ',squares)

  const handleCklick  = square=> {
    if((table.table.moveNumber % 2 === 0 && playerSym === 'X') || (table.table.moveNumber % 2 !== 0 && playerSym === 'O' )){
      setTurn(2)
      
      let newSquares = [...squares];
      newSquares.splice(square,1,turn);
      setSquareValue(token,positionId,tablaId.id,newSquares,table.table.moveNumber).then((res) => {
        setSquares(getBoxValues(res));
      });
    }


  }



  return gameReady ? (
    <div>
    <div className='navbar'>
    <NavBar></NavBar>
    </div>
    <div className='container'>
    <Board turn={playerSym} squares={squares} onClick={handleCklick} winningSquares={winningSquares}/>
    <ScoreBoard scoreO={score.O} scoreX={score.X} />
    <br></br>
    <Alert key='info' variant={(table.table.moveNumber % 2 === 0 && playerSym === 'X') || (table.table.moveNumber % 2 !== 0 && playerSym === 'O' ) ? 'danger':'info'}>
              Turno de {(table.table.moveNumber % 2 === 0 && playerSym === 'X') ? 'X' :'O'}
    </Alert>
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
