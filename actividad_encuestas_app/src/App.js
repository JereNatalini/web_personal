import './App.css';
import React from 'react';
import Encuestas from './componentes/Encuestas';

function App() {
  //Array de encuestas
  const encuestas = [
    { id: 1, pregunta: '¿Cuál es tu color favorito?', opciones:
    ['Rojo', 'Azul', 'Verde'] },
    { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
    ['Pizza', 'Hamburguesa', 'Sushi'] },
    ];
    
    return(
      <div className='App'>
        <h1>Aplicacion de Encuestas</h1>
        {/*Contenido de la página
        Se inicializa componente Encuestas, y se le pasa por parametro el array de encuestas*/}
        <Encuestas encuestas={encuestas}/>
      </div>
    )
}

export default App;
