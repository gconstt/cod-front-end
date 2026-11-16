export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-linear-to-br from-amber-100 to-orange-200 py-20 md:py-32 px-4 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">
        O café perfeito para codar melhor
      </h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-stone-700">
        Grãos selecionados, torra artesanal e a energia necessária para o seu próximo commit.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        {/* Botão primário */}
        <a
          href="#cardapio"
          className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-700 active:scale-95 transition"
        >
          Ver cardápio
        </a>
        {/* Botão secundário */}
        <a
          href="#sobre"
          className="border-2 border-amber-600 text-amber-700 px-6 py-3 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition"
        >
          Nossa história
        </a>
      </div>
    </section>
  );
}