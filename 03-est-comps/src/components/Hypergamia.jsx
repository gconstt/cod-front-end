import { useState } from "react";

function Hypergamia() {
  const [resultado, setResultado] = useState("");

  function calcula() {
    let altura = Number(prompt("Digite sua altura em metros (ex: 1.75):"));
    let genero = Number(prompt("Digite 2 para masculino e 1 para feminino:"));

    if (!altura || isNaN(altura)) {
      setResultado("Por favor, insira uma altura válida.");
      return;
    }

    let pesoIdeal = 0;

    if (genero === 1) {
      pesoIdeal = 62.1 * altura - 44.7;
    } else if (genero === 2) {
      pesoIdeal = 72.7 * altura - 58;
    } else {
      setResultado(
        "Gênero inválido! Escolha 1 para feminino ou 2 para masculino.",
      );
      return;
    }

    setResultado(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg`);
  }

  return (
    <div>
      <h4>Hypergamia</h4>
      <button onClick={calcula}>Calcular</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Hypergamia;
