import classNames from 'classnames';
import '../../css/Square.css'

const Square = ({value, onClick,turn,winner}) => {
    const handleCklick = () => {
       (turn !== null && value === null) && onClick();
    }
    
    let squareClass = classNames({
        square:true,
        [`square--${value}`]: value != null,
        winner: winner,
    });
    return (
        <div className={squareClass} onClick={ () => handleCklick()}></div>
    )
}

export default Square;