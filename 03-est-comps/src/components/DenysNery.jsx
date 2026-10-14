import { useState } from "react"

function DenysNery() {
  const [resultado, setResultado] = useState("");

  function condicoes() {
    let crachaValido = prompt("O crachá está válido? (Sim/Não)").toLowerCase() === "sim";
    let digitalReconhecida = prompt("A digital foi reconhecida? (Sim/Não)").toLowerCase() === "sim";

    if (crachaValido && digitalReconhecida) {
      setResultado("Acesso liberado ao Centro de Comando");
    } else if (!crachaValido && digitalReconhecida) {
      setResultado("Crachá inválido. Dirija-se à recepção");
    } else if (crachaValido && !digitalReconhecida) {
      setResultado("Falha na digital. Tente novamente ou chame o suporte");
    } else {
      setResultado("Acesso negado. Verifique sua identificação.");
    }
  }

  return (
    <div className="centro-comando">
      <h4>Controle de Acesso - Centro de Comando</h4>
      <button onClick={condicoes}>Condições</button>
      <p>{resultado}</p>
    </div>
  )
}

export default DenysNery