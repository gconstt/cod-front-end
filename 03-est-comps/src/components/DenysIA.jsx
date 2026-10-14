import { useState } from "react"

function DenysIA() {
  const [resultado, setResultado] = useState("");

  function condicoes() {
    let emManutencao = prompt("O transporte está em manutenção? (Sim/Não)").toLowerCase() === "sim";
    let emergenciaAtiva = prompt("A emergência está ativa? (Sim/Não)").toLowerCase() === "sim";

    if (!emManutencao && !emergenciaAtiva) {
      setResultado("Transporte liberado para uso.");
    } else {
      setResultado("Transporte indisponível por motivo de segurança.");
    }
  }

  return (
    <div className="transporte-parque">
      <h4>Controle de Transporte do Parque</h4>
      <button onClick={condicoes}>Condições</button>
      <p>{resultado}</p>
    </div>
  )
}

export default DenysIA