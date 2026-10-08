import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Voto from "./components/Voto";
import Hypergamia from "./components/Hypergamia";
import Feira from "./components/Feira";

function App() {
  return (
    <div className="app">
      <h1>03 estados e componentes</h1>
      <Pousada />
      <Jogo />
      <Voto />
      <Hypergamia />
      <Feira />
    </div>
  );
}

export default App;
