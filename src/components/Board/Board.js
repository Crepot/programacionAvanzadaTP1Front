import Square from "../Squares/Squares";
import '../../css/Board.css'

const Board = ({squares,onClick,turn,winningSquares}) => {
    const createSquares  = values => (
        // console.log('valuesvaluesvaluesvaluesvalues => ',values),

        values.map(v => (
            <Square 
            winner = {winningSquares.includes(v)}
            turn={turn}
            onClick={() => onClick(v)}
            value = {squares[v]}
            key = {`square_${v}`}
            />
        ))
    );

    return (
        <div className="board">
            <div className="row">{createSquares([0,1,2])}</div>
            <div className="row">{createSquares([3,4,5])}</div>
            <div className="row">{createSquares([6,7,8])}</div>
        </div>
    );
}


export default Board;