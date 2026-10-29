import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Demostracao from "./pages/Demostracao";
import Ex0081 from "./pages/Ex0081";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Ex0081 />
      <Demostracao />
      <Home />
    </div>
  );
}

export default App;
