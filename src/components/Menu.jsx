import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <h1>Sudoku</h1>
            <NavLink to='/main' className='lets_play'>Let's play</NavLink> 
        </div>
    )
}

export default Menu