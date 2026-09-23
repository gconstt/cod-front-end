import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-conteiner">
        <div className="logo">
          <img
            className="logo-icon"
            src="\src\assets\imgs\studio-alpha.jpg"
            alt="Logo"
          />
          <span className="logo-text">Studio Alpha</span>
        </div>

        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Serviços</a>
          <a href="#">Sobre</a>
          <a href="#" className="btn-contato">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;  
