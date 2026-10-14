import { useState } from "react"

function Sarumano3() {
  const [resultado, setResultado] = useState("");

  function condicoes() {
    let somFuncionando = prompt("O som está funcionando? (Sim/Não)").toLowerCase() === "sim";
    let figurinoCompleto = prompt("O figurino está completo? (Sim/Não)").toLowerCase() === "sim";

    if (somFuncionando && figurinoCompleto) {
      setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!");
    } else if (!somFuncionando && figurinoCompleto) {
      setResultado("Sem som. Realizar apresentação alternativa no salão.");
    } else if (somFuncionando && !figurinoCompleto) {
      setResultado("Faltando parte do figurino. Te vira no improviso!");
    } else {
      setResultado("Apresentação cancelada. Hora da mágica de desaparecer…");
    }
  }

  return (
    <div className="sarumano-show">
      <h4>Sarumano Apresentação</h4>
      <button onClick={condicoes}>Condições</button>
      <p>{resultado}</p>
    </div>
  )
}

export default Sarumano3