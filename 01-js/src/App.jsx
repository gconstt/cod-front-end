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

  return (
    <div className="cont-app">
        <h1>Javascripto no React</h1>
        <button onClick={testar}>Testar</button>
        <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

export default App
