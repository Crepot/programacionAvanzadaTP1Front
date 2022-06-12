import '../css/App.css';
import Board from '../components/Board/Board';
import NavBar from '../components/NavBar/NavBar';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import { useState } from 'react';
import Cookies from 'universal-cookie'


const cookie = new Cookies();

// TODO: esto es regla de negocio, me tendría que venir en el tablero
const winnerPositions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]


const App = () => {

  const token = cookie.get('authToken')
  // console.log('EL TOKEN DE LA COOKIE ES: ',token)

  // console.log('estas son las tablas => ',tables)

  const [turn,setTurn] = useState('X');
  const [squares,setSquares] = useState(Array(9).fill(null)) //TODO: acá vamos a llenarlo con position0
  const [score,setScore] = useState({
    X: 0,
    O: 0,
  });
  const [winningSquares,setwinningSquares] = useState([]);

  const reset = () =>{
    setTurn('X');
    setSquares(Array(9).fill(null));
    setwinningSquares([])
  }
  const checkWinner = newSquares =>{
    console.log('Se llama a checkWinner')
    for(let i  = 0; i<winnerPositions.length;i++){
      const [a,b,c] = winnerPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
        //Hay un ganador
        console.log('ENTRA AL GANADOR');
        endGame(newSquares[a],winnerPositions[i]);
        return 
      }
    }

    if(!newSquares.includes(null)){
      // Hay empate
      console.log('ENTRA AL EMPATE');
      endGame(null,Array.from(Array(9).keys()));
      return
    }
    console.log("estos son los newSquares",newSquares)
    setTurn(turn === 'X' ? 'O' : 'X')
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

  const handleCklick  = square=> {
    let newSquares = [...squares];
    newSquares.splice(square,1,turn);
    setSquares(newSquares);
    checkWinner(newSquares);
  }


/*----------------------------------------- */
  // Function to add our give data into cache
  // const addDataIntoCache = (cacheName, url, response) => {
  //   // Converting our respons into Actual Response form
  //   const data = new Response(JSON.stringify(response));
  
  //   if (window.caches) {
  //     // Opening given cache and putting our data into it
  //     caches.open(cacheName).then((cache) => {
  //       cache.put(url, data);
  //       alert('Data Added into cache!')
  //     });
  //   }
  // };
/*----------------------------------------- */

  return (
    <div>
    <div className='navbar'>
    <NavBar></NavBar>
    </div>
    <div className="container"> 
    <Board turn={turn} squares={squares} onClick={handleCklick} winningSquares={winningSquares}/>
    <ScoreBoard scoreO={score.O} scoreX={score.X} />
    </div>

    </div>
  );
}

export default App;
