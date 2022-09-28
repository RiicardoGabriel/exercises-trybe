import './App.css';
import React from 'react';
import Name from './NameMap';

const Task = () => {
  return (
    <div>
      <li>Acordar</li>
      <li>Levantar</li>
      <li>Ir ao banheiro</li>
      <li>Se arrumar</li>
      <li>Sair de casa</li>
    </div>
  );
}

function App() {
  return (
    <div>
      <Task />
      <Name />
    </div>
  );
}

export default App;
