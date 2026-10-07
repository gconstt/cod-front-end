import { useState } from "react"

// rfce
function Jogo() {
const[resultado, setResultado] = useState()

    function classificar() {
        let pontos = Number(prompt("Quantos pontos?"))
        if(pontos <= 10){
            setResultado("Desista dos seu sonhos e morra")
        }
        else if(pontos >10 && pontos<=100){
            setResultado("Sobrou nada")
            }
        else if (pontos <= 200){
            setResultado("Sobrou algo")
            }
            else{
                setResultado("Ai ce malou ratão")
            }
    }

  return (
    <div className="jogo">
      <h2>Jogo do Mano Juca.</h2>
      <button onClick={classificar}>Classificar</button>
      {resultado}
    </div>
  )
}

export default Jogo