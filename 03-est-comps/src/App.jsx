import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Voto from "./components/Voto";
import Hypergamia from "./components/Hypergamia";
import Feira from "./components/Feira";
import Ganso from "./components/Ganso";
import Recutramento from "./components/Recutramento";
import Sarumano from "./components/Sarumano";
import Sarumano2 from "./components/Sarumano2";
import Sarumano3 from "./components/Sarumano3";
import DenysIA from "./components/DenysIA";
import DenysNery from "./components/DenysNery";
import JuninJaulas from "./components/JuninJaulas";

function App() {
  return (
    <div className="app">
      <h1>03 estados e componentes</h1>

      <h2>#0030</h2>
      <Ganso />
      <Recutramento />
      <Sarumano />
      <Sarumano2 />
      <Sarumano3 />
      <DenysIA />
      <DenysNery />
      <JuninJaulas />
      <hr />

      <h2>#0027.sq05</h2>

      <Pousada />
      <Jogo />
      <Voto />
      <Hypergamia />
      <Feira />
    </div>
  );
}

export default App;
  