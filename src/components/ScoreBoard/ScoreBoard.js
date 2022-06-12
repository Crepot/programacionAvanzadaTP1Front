import '../../css/ScoreBoard.css'

const ScoreBoard = ({scoreO,scoreX}) =>{
    return (
    <div className="score-board">
        <div >{scoreX}</div>
        <div >{scoreO}</div>
    </div>
    );
}

export default ScoreBoard;
