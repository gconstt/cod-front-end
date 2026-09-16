import './App.css'

function App() { 
  
  function testar() {
    let nome = prompt('Qual é o seu nome?')
    let bocaDoSapo = nome
    
    alert(nome+ ', seu nome tá na boca do sapo!!!😂😭👽🐤')
  }

  function calcularMedia() {
    let nota1 = Number(prompt('Qual tua primeira nota? '))
    let nota2 = Number(prompt('Qual tua segunda nota? '))
    
    let media = (nota1 + nota2) / 2
    alert('Sua média é: ' + media)
  }

  function calcularPontos() {
    let vitoria = Number(prompt('Quantas vitórias? '))
    let empate = Number(prompt('Quantos empates? '))
    let derrota = Number(prompt('Quantas derrotas? '))

    let pontos = (vitoria * 3) + (empate * 1) + (derrota * 0)
    alert('O total de pontos é: ' + pontos)
  }

  function trocarSapatos() { 
    let sapatos = Number(prompt('Qual tamanho do seu calçado? '))
    let PeTamanho = Number(prompt('Qual tamanho do seu pé? '))
    let diferenca = sapatos - PeTamanho

    if (diferenca > 0) {
      alert('Você tem pé pequeno, Pegue um menor!!')
    } else if (diferenca < 0) {
      alert('Você tem pé grande, Pegue um maior!!')
    } else {
      alert('Seu pé é do tamanho do sapato, tá tudo certo!')
    }    
  }

  function trabalhadores() {
    let clt = Number(prompt('Quantos trabalhadores CLT? '))
    let pj = Number(prompt('Quantos trabalhadores PJ? '))
    let estagiario = Number(prompt('Quantos estagiários? '))
    
    let total = clt + pj + estagiario
    alert('O total de trabalhadores é: ' + total)
  }
    
  return (
    <div className="cont-app">
        <h1>Javascripto no React</h1>

        <p>😭😭😭😭😭😭</p> 

        <h2>Exercicios</h2>

        <button onClick={calcularPontos} >Campeonato</button>
        <button onClick={trocarSapatos} >Trocas pé pequeno</button>
        
        <hr /> 

        <button onClick={testar} >Testar</button>
        <button onClick={calcularMedia} >Média</button>

        <hr />

        <button onClick={trabalhadores}>Guilherme Portoes</button>
    </div>
  )
}

export default App
