import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import Footer from './components/Footer';

function App() {

  const [cantidad, totalCantidad] = useState(0);
  const [plazo, totalPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;
  if(cargando){
    componente = <Spinner />
  }else if(total === 0){
    componente = <Mensaje />
  }else{
    componente = <Resultado
      total= {total}
      plazo= {plazo}
      cantidad={cantidad}  
    />
  }

  return (
    <div className="App">
      <Header 
        titulo = 'Cotizador de Préstamos'
      />
      <div className="formulario-container">
        <Formulario
          cantidad = {cantidad}
          totalCantidad = {totalCantidad}
          plazo = {plazo}
          totalPlazo = {totalPlazo}
          total = {total}
          guardarTotal = {guardarTotal}
          guardarCargando = {guardarCargando}
        />

        {componente}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
