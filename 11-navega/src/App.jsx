import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Ofertas from './components/Ofertas'
import Compras from './components/Compras'

function App() {
  const [pagina, setPagina] = useState(0)

  return (
    <div className='app'>
      <nav>
        <button onClick={() => setPagina(0)}>Home</button>
        <button onClick={() => setPagina(1)}>Ofertas</button>
        <button onClick={() => setPagina(2)}>Compras</button>
        
      </nav>
    <h1>Navegação</h1>

    {pagina==0 && <Home />}
    {pagina==1 && <Ofertas />}
    {pagina==2 && <Compras />}

    </div>
  )

}

export default App
