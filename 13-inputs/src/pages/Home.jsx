import { useState } from "react";

function Home() {
const [inputlogin, setInputlogin] = useState("...")
    
    function efetuarLogin() {
        if (inputlogin == 'admin') {
            alert('Você recebeu acesso de ademim no sistema.')
        }

        else{
            alert('ta errado.')
        }
    }

  return (
    <div className="home">
      <h1>Inputs Controlados</h1>
      <label htmlFor="">Login</label>

      <input type="text" 
        value={inputlogin}
        onChange={(e) => setInputlogin(e.target.value)}
      />

    <p>{inputlogin}</p>
      <button onClick={efetuarLogin}>Entrar</button>
    </div>
  );
}
''
export default Home;
