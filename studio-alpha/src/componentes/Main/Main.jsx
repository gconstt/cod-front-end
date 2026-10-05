import ServicoCard from "../ServicoCard/ServicoCard";
import "./Main.css";

  const servicos = [
    {id: 1, icone: "🪟", titulo:"Design de interface", descricao:"Telas clara, pensadas para o usuário"},
    {id: 2., icone: "📱", titulo: "Responsividade", descricao: "O mesmo site em qualquer tela"},
    {id: 3., icone: "🚀", titulo: "Performance", descricao: "Pagins leves que carregam rápido"}

  ]

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layouts renponsivos, rápidos e acessiveis para o seu negócio crescer
          na web.
        </p>

        <div className="hero-buttons">
          <a href="#orçamento" className="btn-primary">
            Peça um orçamento</a>
          <a href="#portifolio" className="btn-secondary"> Ver portifólio</a>
        </div>
      </section>

      <section className="servicos">
        <h2>Nossos serviços</h2>

        <div className="servicos-grid">
          <ServicoCard 
          titulo="Design de interface" 
          icone="🪟" 
          descricao="Telas clara, pensadas para o usuário" 
          />

          <ServicoCard 
          titulo="Responsividade" 
          icone="📱" 
          descricao="O mesmo site em qualquer tela" 
          />

          <ServicoCard 
          titulo="Performance" 
          icone="🚀
          " 
          descricao="Pagins leves que carregam rápido" 
          />

        </div>
      </section>
    </main>
  );
}

export default Main;