
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import GameOver from './components/GameOver';
import GameWon from './components/GameWon';
import Main from './components/Main';
import Menu from './components/Menu';

function App(props) {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Menu />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/main' element={<Main start={props.start} dataValues={props.dataValues} errors={props.errors} dispatch={props.dispatch}/>} />
                <Route path='/won'element={<GameWon />} />
                <Route path='/lose'element={<GameOver />} />
            </Routes>
        </div>
    );
}

export default App;
