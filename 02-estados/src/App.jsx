import { useState } from "react";
import "./App.css";

function App() {
  const [saida, setSaida] = useState(0);

  function calcularMedia() {
    let nota1 = Number(prompt("Primeira nota: "));
    let nota2 = Number(prompt("Segunda nota: "));
    let nota3 = Number(prompt("Terceira nota: "));
    let nota4 = Number(prompt("Última nota: "));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    setSaida(media);
  }

  function rolarD6() {
    let n1 = Math.floor(Math.random() * 6) + 1;
    setSaida(n1);
  }

  function rolarD8() {
    let n2 = Math.floor(Math.random() * 8) + 1;
    setSaida(n2);
  }

  function rolarD12() {
    let n3 = Math.floor(Math.random() * 12) + 1;
    setSaida(n3);
  }

  function rolarD20() {
    let n4 = Math.floor(Math.random() * 20) + 1;
    setSaida(n4);
  }

  function rolarD100() {
    let n5 = Math.floor(Math.random() * 100) + 1;
    setSaida(n5);
  }

  function senhaAdv() {
    let senha = Number(prompt('Digite sua senha: '))
    
    if (senha == 1234) {
      setSaida('acesso permitido');
    }

    else {
      setSaida('acesso negado');  
    }
   
  }

  function raciocinio() {
    let A = Number(prompt('Digite o primeiro numero: '))
    let B = Number(prompt('Digite o segundo numero: '))

    if (A > B) {
      setSaida(A)
    }

    else {
      setSaida(B)
    }
  }

  

  return (
    <div className="app">
      <h1>Estados!</h1>
      <button onClick={calcularMedia}>Média</button>
      <button onClick={rolarD6}>D6</button>
      <button onClick={rolarD8}>D8</button>
      <button onClick={rolarD12}>D12</button>
      <button onClick={rolarD20}>D20</button>
      <button onClick={rolarD100}>D100</button>
      <button onClick={senhaAdv}>Senha</button>
      <button onClick={raciocinio}>Mano Juca</button>

      <p>Resultado: {saida}</p>
    </div>
  );
}

export default App;