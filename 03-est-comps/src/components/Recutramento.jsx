import { useState } from "react"

function Recutramento() {
    const [resultado, setResultado] = useState("");
    
    function recrutamento() {
        let sabeNadar = prompt("O aspirante a marujo sabe nadar? (Sim/Não)")
        let idade = Number(prompt("Qual idade do aspirante a marujo? "))
        let Recomendaçao = prompt("O aspirante a marujo tem recomendação? (Sim/Não)")

        if(idade > 16 && sabeNadar == "Sim"){
            setResultado("Aprovado para o navio")
            }
        else if (sabeNadar == "Não" && Recomendaçao == "Sim" && idade > 14) {
            setResultado("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
        }  

        else {
            setResultado("Reprovado. Volte quando estiver mais preparado para o mar.")
        }
    }

  return (
    <div className="Recrutamento">
    <h4>Recrutamento</h4>
    <button onClick={recrutamento}>Marujos</button>
    <p>{resultado}</p>
    </div>
  );
}

export default Recutramento