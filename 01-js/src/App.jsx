import { useState } from 'react'
import './App.css'

function App() {

  const[resultado, setResultado] = useState(0)

  function testar() {
    let nome = prompt('Qual é o seu nome?')
    alert(nome + ', seu nome tá na boca do sapo!!!😂😭👽🐤')
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

    let pontos = vitoria * 3 + empate * 1 + derrota * 0
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
    let LaranjasIniciais = Number(
      prompt('Quantas laranjas a loja tem no inicio do periodo? ')
    )
    let LaranjasFinais = Number(
      prompt('Quantas laranjas a loja tem no final do periodo? ')
    )

    let LaranjasVendidas = LaranjasIniciais - LaranjasFinais
    alert('O total de laranjas vendidas é: ' + LaranjasVendidas)
  }

  function finanças() {
    let custosMensais = Number(prompt('Qual o valor dos custos mensais? '))
    let DoaçoesEdizimo = Number(
      prompt('Qual o valor das doações e dízimos? ')
    )

    let saldo = DoaçoesEdizimo - custosMensais
    alert('O saldo é: R$ ' + saldo)

    if (saldo > 0) {
      alert('A igreja está com lucro!!')
    } else if (saldo < 0) {
      alert('A igreja está com prejuízo!!')
    } else {
      alert('A igreja está no zero a zero!!')
    }
  }

  function salario() {
    let salarioMensal = Number(prompt('Qual o valor do salário mensal? '))
    let SalarioDiario = salarioMensal / 30
    alert('O valor do salário diário é: ' + SalarioDiario)
  }

  function Telles() {
    let PesoDoCaminhaoComCarga = Number(prompt('Qual o peso total? '))
    let PesoDoCaminhaoVazio = Number(prompt('Qual o peso do caminhão vazio? '))

    let PesoDaCarga = PesoDoCaminhaoComCarga - PesoDoCaminhaoVazio
    alert('O peso da carga é: ' + PesoDaCarga)
  }

  function MonikaC() {
    let candidato = prompt('Qual o nome do candidato?')
    let numeroDeUsos = Number(
      prompt('Quantas vezes o candidato usou o celular?')
    )

    if (numeroDeUsos === 0) {
      alert(`O ${candidato} tem 10% de chances de sucesso!!`)
    } else {
      alert(`O ${candidato} tem menos de 1% de chances de sucesso!!`)
    }
  }

  function TellesFrete() {
    let pesoCarga = Number(prompt('Qual o peso da carga?'))
    let distancia = Number(prompt('Qual a distância (KM) a ser percorrida?'))
    let volumeCarga = Number(prompt('Qual o volume da carga (m³)?'))

    let custoFrete = pesoCarga * 2 + distancia * 0.05 + volumeCarga * 10
    alert(`O custo do frete é: R$ ${custoFrete.toFixed(2)}`)
  }

  function DonaBete() {
    let ganhodiario = Number(
      prompt('Qual o ganho diario da casa de apostas? ')
    )
    let premiaçao = Number(prompt('Pagamento das premiaçoes dos vencedores? '))
    let presentes = Number(prompt('Quants reais Gastou em presentes? '))
    let comissoes = Number(
      prompt('Valor das comissoes dos operadores de jogos? ')
    )

    let lucro = ganhodiario - (premiaçao + presentes + comissoes)
    alert('O lucro da casa de apostas é: ' + lucro)
  }

  function CapitaoGanso() {
    let valorEmSuprimentosEmercadorias = Number(
      prompt('Qual o valor em suprimentos e mercadorias para operar o navio? ')
    )
    let IngressosVendidos = Number(prompt('Quantos ingressos foram vendidos? '))
    let FraturamentoIngressos = IngressosVendidos * 25 // Cada ingresso custa R$25

    let lucroTotal = FraturamentoIngressos - valorEmSuprimentosEmercadorias
    alert(
      'O lucro total do Capitão Ganso é (cada ingresso é R$25): ' + lucroTotal
    )
  }

  function SuramunoShows() {
    let BombasFumaça = 7
    let QuantidadeDeShowsMarcados = Number(
      prompt('Quantos shows foram marcados? ')
    )

    let QuantiaBombas = BombasFumaça * QuantidadeDeShowsMarcados
    alert('O total de bombas de fumaça necessárias é: ' + QuantiaBombas)

    let PreçoBombas = Number(prompt('Qual o preço de cada bomba de fumaça? '))
    let CustoTotalBombas = PreçoBombas * QuantiaBombas
    alert('O custo total das bombas de fumaça é: ' + CustoTotalBombas)
  }

  function ManoJuca() {
    let SalarioJuca = Number(prompt('Qual o salário do Mano Juca? '))
    let Moradia = Number(prompt('Qual o valor da moradia? '))
    let Agua = Number(prompt('Qual o valor da conta de água? '))
    let luz = Number(prompt('Qual o valor da conta de luz? '))
    let internet = Number(prompt('Qual o valor da conta de internet? '))
    let gasolina = Number(prompt('Qual o valor gasto com gasolina? '))
    let streamings = Number(
      prompt('Qual o valor gasto com serviços de streaming? ')
    )
    let telefone = Number(prompt('Qual o valor gasto com telefone? '))
    let outros = Number(prompt('Qual o valor gasto com outros gastos? '))

    let totalGastos =
      Moradia +
      Agua +
      luz +
      internet +
      gasolina +
      streamings +
      telefone +
      outros
    let saldoFinal = SalarioJuca - totalGastos

    if (saldoFinal < 0) {
      alert('O mano Juca tá devendo: R$ ' + saldoFinal)
    } else {
      alert('Sobrou uns tantin aí pro mano Juca: R$ ' + saldoFinal)
    }
  }

  function RomeroBrique() {
    let PreçoPagoEmUmaObra = Number(
      prompt('Qual o preço pago em uma obra de arte? ')
    )

    let Juros = PreçoPagoEmUmaObra * 2
    let PreçoFinal = PreçoPagoEmUmaObra + Juros
    alert('O preço cobrado com os juros é de : ' + PreçoFinal)

    let GanhoFinal = PreçoFinal - PreçoPagoEmUmaObra
    alert('O Lucro foi de : ' + GanhoFinal)
  }

  function PetShop() {
    alert('Aqui o cliente tem ração!!')

    let RaçaoPreço = 10
    let RaçaoQuantidade = Number(
      prompt('Quantos kg de raçao voce deseja? (10 REAIS O KILO)')
    )

    let RaçaoTotal = RaçaoPreço * RaçaoQuantidade
    alert('O preço total da raçao é de: ' + RaçaoTotal)
  }

  function calcularChurrasco() {
    let pessoas = Number(prompt('qual a quantidade de pessoas?'))

    let carne = (pessoas * 0.5).toFixed(1)
    let cerveja = (pessoas * 1).toFixed(1)
    let agua = (pessoas * 0.5).toFixed(1)
    let refri = (pessoas * 0.2).toFixed(1)

    alert(
      'Carne: ' +
        carne +
        'kg\nCerveja: ' +
        cerveja +
        'l\nÁgua: ' +
        agua +
        'l\nRefri: ' +
        refri +
        'l'
    )
  }

  function gerarRelatorioKowalski() {
    let relatoriosPF = 40
    let relatoriosPJ = 33
    let tempoPF = 12
    let tempoPJ = 42
    let valorPF = 2350
    let valorPJ = 8900

    let relatoriosTotais = relatoriosPF + relatoriosPJ
    let tempoTotal = tempoPF + tempoPJ
    let valorTotal = valorPF + valorPJ

    let mediaValorPF = valorPF / relatoriosPF
    let mediaValorPJ = valorPJ / relatoriosPJ

    let mediaTempoPF = tempoPF / relatoriosPF
    let mediaTempoPJ = tempoPJ / relatoriosPJ

    alert(
      '--- DADOS CRUS ---\n' +
        'Relatórios PF: ' +
        relatoriosPF +
        '\n' +
        'Relatórios PJ: ' +
        relatoriosPJ +
        '\n' +
        'Tempo PF: ' +
        tempoPF +
        'h\n' +
        'Tempo PJ: ' +
        tempoPJ +
        'h\n' +
        'Valor PF: R$ ' +
        valorPF.toFixed(2) +
        '\n' +
        'Valor PJ: R$ ' +
        valorPJ.toFixed(2) +
        '\n\n' +
        '--- TOTAIS ---\n' +
        'Total de relatórios: ' +
        relatoriosTotais +
        '\n' +
        'Tempo total trabalhado: ' +
        tempoTotal +
        'h\n' +
        'Valor total recebido: R$ ' +
        valorTotal.toFixed(2) +
        '\n\n' +
        '--- MÉDIAS ---\n' +
        'Média valor por relatório PF: R$ ' +
        mediaValorPF.toFixed(2) +
        '\n' +
        'Média valor por relatório PJ: R$ ' +
        mediaValorPJ.toFixed(2) +
        '\n' +
        'Média tempo por relatório PF: ' +
        mediaTempoPF.toFixed(2) +
        'h\n' +
        'Média tempo por relatório PJ: ' +
        mediaTempoPJ.toFixed(2) +
        'h'
    )
  }

  function calcularOrcamentoFreela() {
    let horas = Number(prompt('Digite a quantidade de horas estimadas:'))

    let custoConsultor = 500
    let valorHora = 350

    let precoCobrado = custoConsultor + horas * valorHora
    let lucro = horas * valorHora

    alert('Preço cobrado do cliente: R$ ' + precoCobrado)
    alert('Lucro do freela: R$ ' + lucro)
  }

  function calcularCustoPrompt() {
    let numCaracteres = Number(prompt('Qual o número de caracteres do prompt?'))
    let precoPorToken = Number(prompt('Qual o custo de cada token em reais?'))

    let taxaFixaTokens = 5
    let tokensTotais = taxaFixaTokens + numCaracteres

    let custoEmReais = tokensTotais * precoPorToken

    alert('O prompt vai gastar ' + tokensTotais + ' tokens.')
    alert('O custo total do prompt é: R$ ' + custoEmReais.toFixed(2))
  }

  function calcularLucroJares() {
    let caminhoes = Number(prompt('Qual a quantidade de caminhões?'))

    let jaresPorCaminhao = 50
    let precoPorJare = 90
    let custoPorCaminhao = 450

    let receitaTotal = caminhoes * jaresPorCaminhao * precoPorJare
    let custoTotal = caminhoes * custoPorCaminhao
    let lucro = receitaTotal - custoTotal

    alert('O lucro total da temporada é: R$ ' + lucro.toFixed(2))
  }

  function calcularDobro() {
    let numero = Number(prompt("Digite o numero A-GO-RA: "))
    let dobro = numero * 2
    setResultado(dobro)
    
  }

  return (
    <div className="cont-app">
      <h1>Javascripto no React</h1>

      <hr />

      <h2>Usando estados</h2>
      <button onClick={calcularDobro}>Estados - dobro</button>

      <p>
        Resultado da operação: {resultado}
      </p>

      <hr />

      <p>😭😭😭😭😭😭</p>

      <h2>Exercicios Bloco A</h2>

      <button onClick={calcularPontos}>Campeonato</button>
      <button onClick={trocarSapatos}>Trocas pé pequeno</button>
      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
      <button onClick={trabalhadores}>Guilherme Portoes</button>
      <button onClick={laranjas}>Trajeto Pomar</button>
      <button onClick={finanças}>Pe. Ernan Buco</button>
      <button onClick={salario}>Salario Do junin</button>
      <button onClick={Telles}>Telles Transportes</button>
      <button onClick={MonikaC}>Monika C</button>

      <hr />

      <h3>Exercicios Bloco B</h3>
      <p>👽👽👽</p>

      <button onClick={TellesFrete}>Telles Frete</button>
      <button onClick={DonaBete}>Dona Bete</button>
      <button onClick={CapitaoGanso}>Capitao Ganso</button>
      <button onClick={SuramunoShows}>Suramuno Shows</button>
      <button onClick={ManoJuca}>Mano Juca</button>
      <button onClick={RomeroBrique}>Romero Brique</button>
      <button onClick={PetShop}>Pet Shop Ron Bernardo</button>
      <button onClick={calcularChurrasco}>churrascogildao</button>

      <hr />

      <h4>Exercícios Bloco C</h4>
      <p>😢😢😢😢😢😢</p>

      <button onClick={calcularLucroJares}>jares</button>
      <button onClick={calcularCustoPrompt}>calcularCustoPrompt</button>
      <button onClick={calcularOrcamentoFreela}>orçamento freela</button>
      <button onClick={gerarRelatorioKowalski}>relatório</button>
    </div>
  )
}

export default App