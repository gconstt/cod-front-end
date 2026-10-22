import { useState } from "react";

function Demostracao() {
const[inputnota1, setInputnota1]=useState('')
const[inputnota2, setInputnota2]=useState('')
const[resultado, setResultado]=useState('Donde queres?')

    function calcularMedia() {
        let n1 = Number(inputnota1)
        let n2 = Number(inputnota2)
        let media = (n1 + n2) /2
        // alert (media)
        setResultado(media)
    }

  return (
    <div classNaS me='demostracao'>
        <h1>Demostração - Médias</h1>
        <label htmlFor="">Nota 1</label>

        <input type="text" 
        value={inputnota1}
        onChange={(e) => setInputnota1(e.target.value)}
      />
    
        <label htmlFor="">Nota 2</label>

        <input type="text" 
        value={inputnota2}
        onChange={(e) => setInputnota2(e.target.value)}
      />

        <button onClick={calcularMedia}>Calcular</button>
        {resultado}

    </div>
  )
}

export default Demostracao