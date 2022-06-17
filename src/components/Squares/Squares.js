import classNames from 'classnames';
import '../../css/Square.css'

const Square = ({value, onClick,turn,winner}) => {
    const handleCklick = () => {
        console.log('ESTE ES EL VALUE QUE LE LLEGA AL SQUARE ===> ',value);
       (turn !== null && value === 0) && onClick();
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