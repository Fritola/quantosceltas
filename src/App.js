import React, {useEffect, useState} from 'react';
import logo from './celta.jpg';
import './App.css';

function App() {
  const[value, setValue] = useState('')
  const[error, setError] = useState(false)
  const[quantity, setQuantity] = useState(0)
  const celtaValue = 27800

  const calc_celta = () => {    
    if(value < celtaValue){
      setError(!error)
    }else{
      const celtas_quantity = (value/celtaValue)
      setQuantity(celtas_quantity)      
    }
  }

  const handleValue = (e) => {
    if(e.target.value == ''){
      setValue('')
    }else{
      setValue(parseInt(e.target.value))
    }    
  }

  const showImages = (quantity) => {            
    for (let i = 0; i < quantity.toFixed(0); i++) {
      return(
        <>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        </>
      )
    }
  }

  useEffect(() => {
    setError(false)    
    setQuantity(0)    
    console.log(value)
    
  },[value])

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
        <div className="form-container">  
        <span className="celta-value">Valor aproximado de um Celta R$ 27.800,00</span>        
          <form>
            <input              
              onChange={(e) => handleValue(e)}
              value={value}
              className="form-input"
              type="text" 
              placeholder="Quantos celtas eu consigo... ?"/>

              <button 
                className="form-button"
                type="button"
                onClick={calc_celta}>
                Calcular
              </button>
          </form>
        </div>

        {error && <span>Não é possível comprar Celta algum :(</span>}          
        {quantity > 0 && <span>Compraremos {quantity.toFixed(0)} Celtas</span>}        
        {showImages(quantity)}
    </div>
  );
}

export default App;
