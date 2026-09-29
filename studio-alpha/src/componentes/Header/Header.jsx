import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img className='logo-icon' src="\src\assets\imgs\studio-alpha.jpg" alt="" />
          <span className="logo-text">Studio Alfa</span>
        </div>

        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#servicos">Servicos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato" className="btn-contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header