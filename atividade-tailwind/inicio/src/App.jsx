import Header from './components/Header';
import Hero from './components/Hero';
import Cardapio from './components/Cardapio';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Footer from './components/Footer';
import CardProduto from './components/CardProduto';
CardProduto

export default function App() {
  return (
    // Exercício 1: Altura mínima, cores de fundo/texto, fonte sans e antialiased
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Cardapio />
        <Sobre />
        <Contato />
        <CardProduto />
      </main>
      <Footer />
    </div>
  );
}

