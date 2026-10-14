import { useState } from "react"

function Sarumano() {
    const [resultado, setResultado] = useState("");

    function maquina() {
        let criancasPequenas = Number(prompt("Quantas crianças tem perto do palco? "))
        let velocidadeVento = Number(prompt("Qual a velocidade do vento? (em m/s, ex:1.5 m/s)"))

        if (criancasPequenas == 0 && velocidadeVento >= 0.5) {
            setResultado ("Fumaça liberada. Que comecem os mistérios!")
        }

        else {
            setResultado ("Fumaça bloqueada. Aguardar condições ideais.")
        }
    }

  return (
    <div className="maquina-fumaça">
    <h4>Sarumano Show</h4>
    <button onClick={maquina}>Maquina de fumaça mistica</button>
    <p>{resultado}</p>
    </div>
  )
}

export default Sarumano