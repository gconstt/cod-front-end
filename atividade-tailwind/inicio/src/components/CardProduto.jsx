export default function CardProduto({ nome, preco, descricao, imagem, novo }) {
  return (
    <article className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
      {/* Desafio Bônus 2: Selo "Novo" condicional */}
      {novo && (
        <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md z-10">
          Novo
        </span>
      )}

      <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
      
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{nome}</h3>
          <span className="bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1 rounded-full">
            {preco}
          </span>
        </div>
        <p className="mt-2 text-stone-600 text-sm">{descricao}</p>
      </div>
    </article>
  );
}