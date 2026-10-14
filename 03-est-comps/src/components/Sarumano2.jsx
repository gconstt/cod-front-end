import { useState } from "react"

function Sarumano2() {
    const [resultado, setResultado] = useState("");

    function condicoes() {
        let gripe = prompt("Sarumano está gripado? (Sim/Não)")
        let tempoViagem = Number(prompt("Qual tempo de viagem de sarumano em minutos? (ex: 15)"))
    
        if (gripe == "Não" && tempoViagem <= 45) {
        setResultado("Viagem autorizada. Rumo ao show!")
    }
        else {
        setResultado("Deslocamento inviável. Melhor recusar este evento.")
    }
    }

  return (
    <div className="sarumano-show">
    <h4>Sarumano deslocamento</h4>
    <button onClick={condicoes}>Condiçoes</button>
    <p>{resultado}</p>
    </div>
  )
}

export default Sarumano2