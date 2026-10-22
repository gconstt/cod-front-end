import { useState } from "react";

// --- Atividade 1: Bomba de Pneu ---
function BombaPneu() {
  const [inputN, setInputN] = useState('');
  const [inputM, setInputM] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    let n = Number(inputN);
    let m = Number(inputM);
    setResultado(n - m);
  }

  return (
    <div>
      <h2>Bomba de Pneu</h2>
      <label>Pressão Desejada (N): </label>
      <input type="text" value={inputN} onChange={(e) => setInputN(e.target.value)} />
      <br />
      <label>Pressão Lida (M): </label>
      <input type="text" value={inputM} onChange={(e) => setInputM(e.target.value)} />
      <br />
      <button onClick={calcular}>Calcular Diferença</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

// --- Atividade 2: Ho Ho Ho ---
function HoHoHo() {
  const [inputN, setInputN] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    let n = Number(inputN);
    let falas = [];
    for (let i = 0; i < n; i++) {
      falas.push("Ho");
    }
    if (falas.length > 0) {
      setResultado(falas.join(" ") + "!");
    } else {
      setResultado("");
    }
  }

  return (
    <div>
      <h2>Ho Ho Ho</h2>
      <label>Quantidade de "Ho" (N): </label>
      <input type="text" value={inputN} onChange={(e) => setInputN(e.target.value)} />
      <br />
      <button onClick={calcular}>Gerar</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

// --- Atividade 3: PUM ---
function Pum() {
  const [inputN, setInputN] = useState('');
  const [resultado, setResultado] = useState([]);

  function calcular() {
    let n = Number(inputN);
    let linhas = [];
    let contador = 1;
    
    for (let i = 0; i < n; i++) {
      linhas.push(`${contador} ${contador + 1} ${contador + 2} PUM`);
      contador += 4;
    }
    setResultado(linhas);
  }

  return (
    <div>
      <h2>PUM</h2>
      <label>Número de linhas (N): </label>
      <input type="text" value={inputN} onChange={(e) => setInputN(e.target.value)} />
      <br />
      <button onClick={calcular}>Gerar PUM</button>
      <div>
        <p>Resultado:</p>
        {resultado.map((linha, index) => (
          <div key={index}>{linha}</div>
        ))}
      </div>
    </div>
  );
}

// --- Atividade 4: Tipo de Combustível ---
function Combustivel() {
  const [inputCodigo, setInputCodigo] = useState('');
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [diesel, setDiesel] = useState(0);
  const [encerrado, setEncerrado] = useState(false);

  function registrar() {
    if (encerrado) return;
    
    let codigo = Number(inputCodigo);
    
    if (codigo === 1) {
      setAlcool(alcool + 1);
    } else if (codigo === 2) {
      setGasolina(gasolina + 1);
    } else if (codigo === 3) {
      setDiesel(diesel + 1);
    } else if (codigo === 4) {
      setEncerrado(true);
    }
    
    setInputCodigo(''); // Limpa o input após cada inserção
  }

  return (
    <div>
      <h2>Tipo de Combustível</h2>
      <label>Código (1-Álcool, 2-Gasolina, 3-Diesel, 4-Fim): </label>
      <input 
        type="text" 
        value={inputCodigo} 
        onChange={(e) => setInputCodigo(e.target.value)} 
        disabled={encerrado}
      />
      <br />
      <button onClick={registrar} disabled={encerrado}>Registrar</button>
      
      {encerrado && (
        <div>
          <p>MUITO OBRIGADO</p>
          <p>Alcool: {alcool}</p>
          <p>Gasolina: {gasolina}</p>
          <p>Diesel: {diesel}</p>
        </div>
      )}
    </div>
  );
}

// --- Componente Principal (Junta todas as atividades) ---
export default function Ex0081() {
  return (
    <div>
      <h1>Ex0081</h1>
      <BombaPneu />
      <HoHoHo />
      <Pum />
      <Combustivel />
    </div>
  );
}