import { cardapio } from '../data/cardapio.js'
import CardProduto from './CardProduto.jsx'

// EXERCÍCIO 4 (parte 1): seção do cardápio em grid
export default function Cardapio() {
  return (
    <section id="cardapio" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Nosso cardápio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardapio.map((produto) => (
          <CardProduto key={produto.id} {...produto} />
        ))}
      </div>
    </section>
  )
}