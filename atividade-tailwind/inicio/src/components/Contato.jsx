export default function Contato() {
  // Reutilização de classes CSS via constante conforme a dica
  const estiloCampo = "w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500";

  return (
    <section id="contato" className="max-w-xl mx-auto px-4 py-16">
      <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-center">Fale Conosco</h2>

        <div>
          <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
          <input type="text" id="nome" className={estiloCampo} placeholder="Seu nome" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
          <input type="email" id="email" className={estiloCampo} placeholder="seu@email.com" />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea id="mensagem" className={`${estiloCampo} h-32`} placeholder="Sua mensagem..."></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-700 active:scale-95 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}