import { useState } from 'react'
import './App.css'
import Devweb from './components/Devweb'
import Frontend from './components/Frontend'
import Backend from './components/Backend'
import Fullstack from './components/Fullstack'
import Deploy from './components/Deploy'
import Programador from './components/Programador'
import Estudante from './components/Estudante'
import Resiliente from './components/Resiliente'
import Aprendiz from './components/Aprendiz'
import Devcansado from './components/Devcansado'

function App() {
  const [pagina, setPagina] = useState(0)

  return (
    <div className='app'>
      <h1>Oraçao dos devs</h1>

      <nav>
        <button onClick={() => setPagina(0)}>Deselvolvedor Web</button>       
        <button onClick={() => setPagina(1)}>Oração do Frontend</button>   
        <button onClick={() => setPagina(2)}>Oração do Backend</button>   
        <button onClick={() => setPagina(3)}>Oração do Fullstack</button>   
        <button onClick={() => setPagina(4)}>Oração do Deploy</button>   
        <button onClick={() => setPagina(5)}>Oração do Programador</button>   
        <button onClick={() => setPagina(6)}>Oração do Estudante</button>   
        <button onClick={() => setPagina(7)}>Oração do Resiliente</button>   
        <button onClick={() => setPagina(8)}>Oração do Aprendiz</button>   
        <button onClick={() => setPagina(9)}>Oração do #Devcansado</button>   

      </nav>
      
      <hr />

        {pagina==0 && <Devweb />}
        {pagina==1 && <Frontend />}
        {pagina==2 && <Backend />}
        {pagina==3 && <Fullstack />}
        {pagina==4 && <Deploy />}
        {pagina==5 && <Programador />}
        {pagina==6 && <Estudante />}
        {pagina==7 && <Resiliente />}
        {pagina==8 && <Aprendiz />}
        {pagina==9 && <Devcansado />}

    </div>
  )
}

export default App
