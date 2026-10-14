import { useState } from "react";

function Ganso() {
  const [resultado, setResultado] = useState("");

  function capganso() {
    let marujos = Number(prompt("Quantos marujos vão embarcar? "))
    let comida = Number(prompt("Quantos KG de comida vai na embarcação? "))
    let comidaPorMarujo = comida / marujos

    if(marujos >= 10 && comidaPorMarujo >= 1.5){
        setResultado("Provisões suficientes. Rumo ao horizonte!")
    }
    else {
        setResultado("Algo está errado. Posseidom não quer ninguém no mar hoje.")
    }

  }

  return (
    <div className="ganso">
      <h3>Ganso</h3>
      <button onClick={capganso}>Ganso - provisões</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Ganso;
