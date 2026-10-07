import { useState } from "react"

function Pousada() {
  const [resultado, setResultado] = useState("")

  function diariaPousada() {
    let dias = Number(prompt("Quantos dias o Juca passou na pousada?"))
    let valorDiaria = 0

    if (dias <= 5) {
      valorDiaria = 100
    } else if (dias >= 6 && dias <= 10) { 
      valorDiaria = 90
    } else if (dias > 10) {
      valorDiaria = 80
    }

    const multa = 150
    const desconto = 0.25 // 25% de desconto

    const valorSemDesconto = (dias * valorDiaria) + multa
    const valorFinal = valorSemDesconto - (valorSemDesconto * desconto)

    setResultado(`Valor Final com 25% de desconto: R$ ${valorFinal.toFixed(2)}`)
  }

  return (
    <div>
      <h2>Pousada</h2>
      <button onClick={diariaPousada}>Pagamento Final</button>
      <p>{resultado}</p>
    </div>
  )
}

export default Pousada