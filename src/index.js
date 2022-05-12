import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
//Создать React app
//Node command prompt =>
//npx create-react-app название приложения
//cd название приложения 
//запускаем приложение
//npm start

//Установим пакетный менеджер yarn
//npm i --global yarn
//yarn add gh-pages