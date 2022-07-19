import { NavLink } from 'react-router-dom';

const GameWon = () => {
    return (
        <div className="container">
            <h1>Game Won</h1>
            <NavLink to='/menu' className='lets_play'>Go to Menu</NavLink>
            {/* сверху изменено */}
        </div>
    )
}
    
export default GameWon