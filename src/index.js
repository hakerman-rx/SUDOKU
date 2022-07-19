import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
const render = (state) => {
  root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App start={state.matrix.start} dataValues={state.dataValues} errors={state.errors} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>
  );
}
store.subscriber(render)
render(store.getState())
reportWebVitals();
//Создать React app
//Node command prompt => открыть
//npx create-react-app название приложения
//cd название приложения 
//запускаем приложение
//npm start

//Установим пакетный менеджер yarn
//npm i --global yarn
//yarn add gh-pages

//установить пакет Sass 
//yarn add node-sass@6.0 react-router-dom

