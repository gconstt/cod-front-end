import { useState } from "react"

function JuninJaulas() {
  const [resultado, setResultado] = useState("");

  function condicoes() {
    let visitantesNaArea = Number(prompt("Quantidade de visitantes na área:"));
    let horaAtual = Number(prompt("Hora atual (0 a 23):"));

    if (visitantesNaArea === 0 && (horaAtual < 8 || horaAtual > 18)) {
      setResultado("Liberação autorizada. Abrindo jaula.");
    } else {
      setResultado("Liberação negada. Área em uso ou fora do horário permitido.");
    }
  }

  return (
    <div className="liberacao-jaulas">
      <h4>Sistema de Liberação de Jaulas</h4>
      <button onClick={condicoes}>Condições</button>
      <p>{resultado}</p>
    </div>
  )
}

export default JuninJaulas