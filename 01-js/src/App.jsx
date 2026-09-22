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

  function MonikaC() {
  let candidato = prompt('Qual o nome do candidato?');
  let numeroDeUsos = Number(prompt('Quantas vezes o candidato usou o celular?'));

  if (numeroDeUsos === 0) {
    console.log(`O ${candidato} tem 10% de chances de sucesso!!`);
  } else if (numeroDeUsos >= 1) {
    console.log(`O ${candidato} tem menos de 1% de chances de sucesso!!`);
  }
}

  function TellesFrete() {
    let pesoCarga = Number(prompt('Qual o peso da carga?'));
    let distancia = Number(prompt('Qual a distância (KM) a ser percorrida?'));
    let volumeCarga = Number(prompt('Qual o volume da carga (m³)?'));

    let custoFrete = (pesoCarga * 2) + (distancia * 0.05) + (volumeCarga * 10);
    alert(`O custo do frete é: R$ ${custoFrete.toFixed(2)}`);
  }

  function DonaBete() {
    let ganhodiario = Number(prompt('Qual o ganho diario da casa de apostas? '));
    let premiaçao = Number(prompt('Pagamento das premiaçoes dos vencedores? '));
    let presentes = Number(prompt('Quants reais Gastou em presentes? '));
    let comissoes = Number(prompt('Valor das comissoes dos operadores de jogos? '));
    
    let lucro = ganhodiario - (premiaçao + presentes + comissoes);
    alert('O lucro da casa de apostas é: ' + lucro);
  }

  function CapitaoGanso() {
    let valorEmSuprimentosEmercadorias = Number(prompt('Qual o valor em suprimentos e mercadorias para operar o navio? '));
    let IngressosVendidos = Number(prompt('Quantos ingressos foram vendidos? '));
    let FraturamentoIngressos = IngressosVendidos * 25; // Supondo que cada ingresso custa R$50
    
    let lucroTotal = FraturamentoIngressos - valorEmSuprimentosEmercadorias;
    alert('O lucro total do Capitão Ganso é (cada ingresso é 25R$): ' + lucroTotal);
  }

  function SuramunoShows() {
    let BombasFumaça = 7
    let QuantidadeDeShowsMarcados = Number(prompt('Quantos shows foram marcados? '))

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
    let streamings = Number(prompt('Qual o valor gasto com serviços de streaming? '))
    let telefone = Number(prompt('Qual o valor gasto com telefone? '))
    let outros = Number(prompt('Qual o valor gasto com outros gastos? '))

    let totalGastos = Moradia + Agua + luz + internet + gasolina + streamings + telefone + outros
    let saldoFinal = SalarioJuca - totalGastos

    if (saldoFinal < 0)
    alert('O mano Juca ta devendo: ' + saldoFinal)
    
    else (saldoFinal => 1)
    alert('Sobro uns tantin ai pro mano juca. R$' + saldoFinal)
  }

  function RomeroBrique() {
    let PreçoPagoEmUmaObra = Number(prompt('Qual o preço pago em uma obra de arte? '))

    let Juros = PreçoPagoEmUmaObra * 2

    let PreçoFinal = PreçoPagoEmUmaObra + Juros
    alert('O preço cobrado com os juros é de : ' + PreçoFinal)
    
    let GanhoFinal = PreçoFinal - PreçoPagoEmUmaObra
    alert ('O Lucro foi de : ' + GanhoFinal)
  }

  function PetShop() {
    alert('Aqui o cliente tem ração!!')
    
    let RaçaoPreço = 10
    let RaçaoQuantidade = Number(prompt('Quantos kg de raçao voce deseja? (10 REAIS O KILO)'))

    let RaçaoTotal = RaçaoPreço * RaçaoQuantidade
    alert('O preço total da raçao é de: ' + RaçaoTotal)
  }

  function SeuGildao() {
    let ClientesNum = Number(prompt('Quantidade de Clientes: '))
    let Carne = 0.5
    let Cerveja = 1
    let Agua = 0.5
    let refri = 0.2

    alert('Voces estao em ' + ClientesNum + ', Entao receberam: ')

    alert(ClientesCarne + 'KG')

    let ClientesCarne = ClientesNum * Carne

    alert(ClientesCerveja + 'L/ML')
    let ClientesCerveja = ClientesNum * Cerveja

    alert(ClientesAgua + 'L/ML')
    let ClientesAgua = ClientesNum * Agua

    alert(Clientesrefri + 'L/ML')
    let Clientesrefri = ClientesNum * refri

  }

  return (
    <div className="cont-app">
        <h1>Javascripto no React</h1>

        <hr />

        <p>😭😭😭😭😭😭</p> 

        <h2>Exercicios Bloco A</h2>

        <button onClick={calcularPontos} >Campeonato</button>

        <button onClick={trocarSapatos} >Trocas pé pequeno</button>    

        <button onClick={testar} >Testar</button>

        <button onClick={calcularMedia} >Média</button>

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

        <button onClick={SeuGildao}>Seu Gildao</button>

        <hr />

        <h4>Exercícios Bloco C</h4>
        <p>😢😢😢😢😢😢</p>

</div>
  )
}

export default App  