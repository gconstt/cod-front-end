import { useState } from "react"

function Voto() {
  const [resultado, setResultado] = useState("");

  function Votoidade() {
    let idade = Number(prompt("Digite sua idade aqui: "));

    if (idade < 16) {
      setResultado("Você não pode votar.");
    } else if (idade >= 16 && idade <= 17) {
      setResultado("Você tem o voto facultativo");
    } else if (idade >= 18 && idade <= 65) {
      setResultado("Seu voto é obrigatório");
    } else {
      setResultado("Voce tem o voto facultativo");
    }
  }

  return (
    <div>
      <h3>Eleição</h3>
      <button onClick={Votoidade}>Idades infos</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Voto