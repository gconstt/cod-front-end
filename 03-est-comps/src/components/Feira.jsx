import { useState } from "react"

function Feira() {
  const [resultado, setResultado] = useState("");

  function CalcularTotal() {
    let macas = Number(prompt("Digite a quantidade de maçãs a comprar: "));

    if (macas < 12) {
      let total = macas * 0.30;
      setResultado("O valor total da compra é: R$ " + total.toFixed(2));
    } else {
      let total = macas * 0.25;
      setResultado("O valor total da compra é: R$ " + total.toFixed(2));
    }
  }

  return (
    <div>
      <h3>Feira do Mano Juca</h3>
      <button onClick={CalcularTotal}>Calcular compra</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Feira