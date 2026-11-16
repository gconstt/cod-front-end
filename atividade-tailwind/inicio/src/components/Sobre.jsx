export default function Sobre() {
  return (
    <section id="sobre" className="bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800"
          alt="Nossa cafeteria"
          className="w-full md:w-1/2 rounded-2xl shadow-2xl"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-amber-400">Sobre o Café Dev</h2>
          <p className="mt-4 leading-relaxed text-stone-300">
            Nascemos da paixão por código limpo e café forte. Acreditamos que uma boa xícara de café pode transformar um bug misterioso em uma solução elegante.
          </p>
          
          <ul className="mt-8 grid grid-cols-3 gap-4 text-center">
            <li>
              <strong className="block text-3xl font-extrabold text-amber-400">10k+</strong>
              <span className="text-sm text-stone-400">Xícaras servidas</span>
            </li>
            <li>
              <strong className="block text-3xl font-extrabold text-amber-400">100%</strong>
              <span className="text-sm text-stone-400">Grãos arábica</span>
            </li>
            <li>
              <strong className="block text-3xl font-extrabold text-amber-400">4.9 ★</strong>
              <span className="text-sm text-stone-400">Avaliação média</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}