import { NavLink } from 'react-router-dom';

const GameOver = () => {
    return (
        <div className="container">
            <h1>Game Over</h1>
            <NavLink to='/menu' className='lets_play'>Go to Menu</NavLink>
            {/* сверху изменено */}
        </div>
    )
}
    
export default GameOver