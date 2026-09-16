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

  function laranjas() {
    let LaranjasIniciais = Number(prompt('Quantas laranjas a loja tem no inicio do periodo? '))
    let LaranjasFinais = Number(prompt('Quantas laranjas a loja tem no final do periodo? '))

    let LaranjasVendidas = LaranjasIniciais - LaranjasFinais
    alert('O total de laranjas vendidas é: ' + LaranjasVendidas)
  }
   
  function finanças() {
    let custosMensais = Number(prompt('Qual o valor dos custos mensais? '))
    let DoaçoesEdizimo = Number(prompt('Qual o valor das doações e dízimos? '))

    let pagamento = DoaçoesEdizimo - custosMensais
    alert('O valor do pagamento é: ' + pagamento)

    if (pagamento > custosMensais) {
      alert('A igreja está com lucro!!')
    }

    else if (pagamento < custosMensais) {
      alert('A igreja está com prejuízo!!')
    }

    else {
      alert('A igreja está no zero a zero!!')
    }

  }

  function salario() {
   
    let salarioMensal = Number(prompt('Qual o valor do salário mensal? '))
    let diasTrabalhados = Number(prompt('Quantos dias foram trabalhados? '))

    let SalarioDiario = salarioMensal / 30
    alert ('O valor do salário diário é: ' + SalarioDiario)
  }

  function Telles() {
    let PesoDoCaminhaoComCarga = Number(prompt('Qual o peso total? '))
    let PesoDoCaminhaoVazio = Number(prompt('Qual o peso do caminhão vazio? '))
      
    let PesoDaCarga = PesoDoCaminhaoComCarga - PesoDoCaminhaoVazio
    alert('O peso da carga é: ' + PesoDaCarga)
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
        <button onClick={laranjas}>Trajeto Pomar</button>

        <hr />

        <button onClick={finanças}>Pe. Ernan Buco</button>
        <button onClick={salario}>Salario Do junin</button>

        <hr />

        <button onClick={Telles}>Telles Transportes</button>
    </div>
  )
}

export default App
