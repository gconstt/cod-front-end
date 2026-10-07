import { useState } from "react"

function Pousada() {
  const [resultado, setResultado] = useState(0)

  function diariaPousada() {
    let dias = Number(prompt("Quantos dias o Juca passou na pousada?"))
    let valorDiaria = 0

    if (dias > 0 && dias <= 5) {
      valorDiaria = 100
    } else if (dias >= 6 && dias <= 10) {
      valorDiaria = 90
    } else if (dias > 10) {
      valorDiaria = 80
    } else {
      alert("Por favor, insira um número válido de dias.")
      return
    }
        
    const multa = 150
        
    let totalDiarias = valorDiaria * dias
    
    let valorFinal = totalDiarias + multa
        
    const promocao = valorFinal * (25 / 100)

    const valorAPagar = valorFinal - promocao
        
    setResultado(valorAPagar)
  }

  return (
    <div className='pousada'>
        <h2>Pousada do Juca</h2>
        <button onClick={diariaPousada}>Calcular Pagamento Final</button>
        
        {resultado > 0 && (
          <p>O valor total a pagar é: <strong>R$ {resultado.toFixed(2)}</strong></p>
        )}
    </div>
  )
}

export default Pousada