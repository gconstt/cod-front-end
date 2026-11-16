# Atividade: Landing page da "Cafeteria Grão Dourado" com React + Tailwind CSS

---
## Preparação

O projeto já vem configurado com **Vite + React + Tailwind CSS v4**. Você precisa ter o **Node.js** (versão 20 ou mais nova) instalado.

1. Abra a pasta `inicio/` no VS Code.
2. No terminal, instale as dependências e inicie o servidor:
   ```bash
   npm install
   npm run dev
   ```
3. Abra o endereço que aparecer no terminal (normalmente <http://localhost:5173>). A página atualiza sozinha a cada vez que você salva.
4. Instale a extensão **Tailwind CSS IntelliSense** no VS Code (autocompleta as classes).
5. Deixe a documentação aberta numa aba: <https://tailwindcss.com/docs>

### Estrutura do projeto

```
src/
├── main.jsx              → ponto de entrada (não precisa mexer)
├── index.css             → só importa o Tailwind (não precisa mexer)
├── App.jsx               → Exercício 1
├── data/cardapio.js      → dados dos produtos
└── components/
    ├── Header.jsx        → Exercício 2
    ├── Hero.jsx          → Exercício 3
    ├── Cardapio.jsx      → Exercício 4 (parte 1)
    ├── CardProduto.jsx   → Exercício 4 (parte 2)
    ├── Sobre.jsx         → Exercício 5
    ├── Contato.jsx       → Exercício 6
    └── Footer.jsx        → Exercício 7
```

> ⚠️ **Regras da atividade:**
> - É proibido escrever CSS próprio (arquivos `.css` novos ou `style={{...}}`). Tudo deve ser feito **somente com classes do Tailwind**.
> - Em React, o atributo é **`className`**, e não `class`. Ex.: `<div className="p-4 bg-white">`.

---

## Revisão rápida (leia antes de começar)

| Conceito | Exemplo | O que faz |
|---|---|---|
| Espaçamento | `p-4`, `px-6`, `mt-2`, `gap-4` | 1 unidade = `0.25rem` (4px). `p-4` = 16px de padding |
| Tamanho | `w-full`, `h-48`, `max-w-6xl` | Largura, altura e largura máxima |
| Cor | `bg-amber-600`, `text-stone-800` | Paleta + tom (50 a 950) |
| Texto | `text-xl`, `font-bold`, `text-center` | Tamanho, peso e alinhamento |
| Borda | `border`, `border-2`, `rounded-lg` | Espessura e arredondamento |
| Sombra | `shadow-md`, `shadow-xl` | Sombra da caixa |
| Flex | `flex items-center justify-between` | Alinha no eixo cruzado / principal |
| Grid | `grid grid-cols-3 gap-6` | Grade com 3 colunas |
| Responsivo | `md:grid-cols-3` | Aplica **a partir de** 768px |
| Estado | `hover:bg-amber-700` | Aplica quando o mouse está em cima |

**Breakpoints:** `sm` ≥ 640px · `md` ≥ 768px · `lg` ≥ 1024px · `xl` ≥ 1280px

> 💡 *Mobile-first*: classes **sem prefixo** valem para todas as telas. Prefixos adicionam regras para telas **maiores**. Ex.: `grid-cols-1 md:grid-cols-3` → 1 coluna no celular, 3 no desktop.

---

## Exercícios

Os componentes já estão prontos, mas **sem nenhuma classe**. Cada um tem um comentário `// EXERCÍCIO X` indicando onde trabalhar. Faça na ordem e confira o resultado no navegador a cada passo.

### Exercício 1 — Base da página (tipografia e cores) · `App.jsx`
Na `<div>` principal (ela faz o papel do `<body>`):
- Altura mínima da tela inteira (`min-h-screen`).
- Fundo `stone-50` e texto `stone-800`.
- Fonte sem serifa (`font-sans`) e `antialiased`.

Teste: a página deve ficar levemente bege, com texto cinza-escuro.

### Exercício 2 — Barra de navegação (Flexbox) · `Header.jsx`
No `<header>`:
- Fundo branco, sombra pequena e posição fixa no topo ao rolar (`sticky top-0`). Use `z-10`.

Na `<nav>` interna:
- Largura máxima `max-w-6xl`, centralizada (`mx-auto`), padding horizontal `px-4` e vertical `py-4`.
- Use **flex** para deixar o logo à esquerda e os links à direita, alinhados verticalmente ao centro.

No logo: `text-2xl`, `font-bold`, cor `amber-700`.

Na lista de links (`<ul>`):
- `flex` com espaço de `gap-6` entre os itens.
- **Escondida no celular** e visível a partir de `md` (dica: `hidden md:flex`).
- Cada link: `font-medium` e, no `hover`, cor `amber-700`. Adicione `transition-colors`.

> 💡 Os links são gerados com `links.map(...)`. Repare que você escreve o `className` **uma única vez** e ele vale para todos os quatro links!

### Exercício 3 — Seção Hero (espaçamento, alinhamento e botões) · `Hero.jsx`
Na `<section id="inicio">`:
- Fundo em gradiente: `bg-linear-to-br from-amber-100 to-orange-200`.
- Padding vertical `py-20` (no `md:`, `py-32`), padding horizontal `px-4` e texto centralizado.

No `<h1>`:
- `text-4xl` no celular, `md:text-6xl` no desktop, `font-extrabold`, `text-stone-900`.

No parágrafo: `mt-4`, `text-lg`, `max-w-2xl mx-auto` e cor `stone-700`.

Na `<div>` dos botões: `mt-8`, `flex`, `flex-col` no celular e `sm:flex-row` em telas maiores, `justify-center` e `gap-4`.

**Botão primário** ("Ver cardápio"):
- `bg-amber-600`, texto branco, `px-6 py-3`, `rounded-full`, `font-semibold`, `shadow-lg`.
- `hover:bg-amber-700`, `active:scale-95` e `transition`.

**Botão secundário** ("Nossa história"):
- Borda de 2px `amber-600`, texto `amber-700`, mesmo padding e arredondamento.
- `hover:bg-amber-600 hover:text-white`.

### Exercício 4 — Cardápio (Grid + cards)

**Parte 1 · `Cardapio.jsx`**

Na `<section>`: `max-w-6xl mx-auto px-4 py-16`.

No título `<h2>`: `text-3xl font-bold text-center mb-10`.

Na `<div>` que envolve os cards:
- `grid` com **1 coluna** no celular, **2** a partir de `sm` e **3** a partir de `lg`. `gap-6`.

**Parte 2 · `CardProduto.jsx`**

No `<article>`:
- Fundo branco, `rounded-2xl`, `shadow-md`, `overflow-hidden`.
- No hover: `hover:shadow-xl` e `hover:-translate-y-1`, com `transition duration-300`.

Na `<img>`: `w-full h-48 object-cover`.

Na `<div>` de conteúdo: `p-5`.

Na linha com nome e preço: `flex justify-between items-center`.
- Nome: `text-xl font-semibold`.
- Preço: `bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1 rounded-full`.

Na descrição: `mt-2 text-stone-600 text-sm`.

> 💡 Você estilizou **um** componente e os **seis** cards ficaram prontos. Guarde essa observação para a pergunta 4.

### Exercício 5 — Sobre nós (layout em duas colunas) · `Sobre.jsx`
Na `<section id="sobre">`: fundo `stone-900`, texto `stone-100`.

Na `<div>` interna: `max-w-6xl mx-auto px-4 py-16`, `flex flex-col md:flex-row items-center gap-10`.

- Imagem: `w-full md:w-1/2 rounded-2xl shadow-2xl`.
- Bloco de texto: `md:w-1/2`.
- `<h2>`: `text-3xl font-bold text-amber-400`.
- Parágrafos: `mt-4 leading-relaxed text-stone-300`.

Na lista de números (`<ul>`): `mt-8 grid grid-cols-3 gap-4 text-center`.
- Cada número (`<strong>`): `block text-3xl font-extrabold text-amber-400`.
- Cada legenda (`<span>`): `text-sm text-stone-400`.

### Exercício 6 — Formulário de contato (estados de foco) · `Contato.jsx`
Na `<section id="contato">`: `max-w-xl mx-auto px-4 py-16`.

No `<form>`: fundo branco, `p-8`, `rounded-2xl`, `shadow-lg`, `space-y-5`.

No `<h2>` do formulário: `text-2xl font-bold text-center`.

Em cada `<label>`: `block text-sm font-medium mb-1`.

Em cada `<input>` e no `<textarea>`:
- `w-full`, `border border-stone-300`, `rounded-lg`, `px-4 py-2`.
- No foco: `focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500`.

No `<textarea>`: adicione `h-32`.

> 💡 Os três campos usam exatamente as mesmas classes. Que tal guardá-las numa constante (`const estiloCampo = '...'`) e usar `className={estiloCampo}`? Para o textarea: ``className={`${estiloCampo} h-32`}``.

No botão "Enviar": `w-full`, mesmo estilo do botão primário do Hero.

### Exercício 7 — Rodapé · `Footer.jsx`
No `<footer>`: `bg-stone-100 border-t border-stone-200 py-6 text-center text-sm text-stone-500`.

---

## 🏆 Desafios bônus (escolha pelo menos 1)

1. **Modo escuro:** adicione variantes `dark:` (ex.: `dark:bg-stone-950 dark:text-stone-100`) no `App`, no header, nos cards e no formulário. Teste mudando o tema do seu sistema operacional (o Tailwind segue `prefers-color-scheme` por padrão).
2. **Selo "Novo":** em `data/cardapio.js`, o Espresso tem `novo: true`. Receba a prop `novo` no `CardProduto` e, **só quando ela for verdadeira**, mostre um `<span>` "Novo" no canto superior da imagem. Dicas: renderização condicional (`{novo && <span>...</span>}`), card com `relative` e selo com `absolute top-3 left-3`.
3. **Menu mobile funcional:** no `Header`, crie um botão ☰ visível só no celular (`md:hidden`). Use `useState` para abrir e fechar uma lista de links abaixo da barra quando o botão for clicado.
4. **Cores personalizadas:** no `src/index.css`, abaixo do `@import`, adicione:
   ```css
   @theme {
     --color-cafe-500: #8b5a2b;
   }
   ```
   e use `bg-cafe-500` em algum lugar. (Esta é a **única** exceção à regra de "não escrever CSS".)

---

## Perguntas para responder (entregar em um arquivo `respostas.md`)

1. O que significa "utility-first"? Cite **uma vantagem** e **uma desvantagem** em relação ao CSS tradicional.
2. Qual a diferença entre `md:text-6xl` e `text-6xl`? Por que dizemos que o Tailwind é *mobile-first*?
3. Explique o que cada classe faz: `flex items-center justify-between`.
4. No exercício 4 você escreveu as classes do card uma única vez e elas valeram para os seis produtos. Explique **por que** isso aconteceu. Como você faria isso se a página fosse só HTML puro, sem React?
5. Qual a diferença entre `p-4` e `m-4`? E entre `gap-4` e `space-y-4`?

---

## RESPOSTAS - BOTEI AQ PQ N DAVA PRA BOTAR O ARQUIVO NO GIT

1 - É quando a gente estiliza os elementos colocando pequenas classes direto no HTML, onde cada classe faz uma coisa só (tipo pt-4, text-center ou bg-blue-500), em vez de ficar criando classes com nomes próprios no arquivo CSS (tipo .card-produto) com um monte de regras dentro.

Vantagem: A gente desenvolve muito mais rápido porque não precisa ficar pensando em nomes para as classes e não corre o risco de mexer no CSS de uma tela e quebrar outra sem querer.

Desvantagem: O código HTML acaba ficando meio poluído e difícil de ler quando um elemento precisa de muitos estilos ou estados diferentes.

2 - A diferença é que o text-6xl aplica esse tamanho de fonte em qualquer tamanho de tela, do celular até o monitor. Já o md:text-6xl só aplica o tamanho 6xl em telas médias para cima (a partir de 768px). A gente diz que o Tailwind é mobile-first porque qualquer classe sem prefixo já vale por padrão para o celular, e os prefixos (sm:, md:, lg:) vão sendo usados só para adaptar e sobrescrever o visual conforme a tela vai aumentando.

3 -

flex: Transforma o elemento em um container Flexbox (display: flex), deixando os itens filhos um do lado do outro por padrão.

items-center: Alinha os itens no centro do eixo vertical (quando estão em linha).

justify-between: Espalha os itens no eixo horizontal, jogando o primeiro bem para a esquerda, o último bem para a direita e dividindo o espaço que sobra no meio deles.

4 - Isso aconteceu porque no React a gente não escreve os seis cards na mão; a gente cria um molde só e usa um loop (como o .map()) para percorrer a lista de produtos e gerar todos dinamicamente com as mesmas classes. Se fosse só em HTML puro, eu teria que copiar e colar o código inteiro do card seis vezes repetindo todas as classes em cada um, ou então criar uma classe única no CSS usando o @apply do Tailwind para juntar todos esses estilos e aplicar só ela nos seis cards.

5 - O p-4 é o padding, então ele dá um espaçamento interno de 16px (1rem), afastando o conteúdo das bordas do próprio elemento. Já o m-4 é a margin, que dá esse mesmo espaçamento só que do lado de fora, empurrando os outros elementos que estão em volta.

Sobre o gap-4 e o space-y-4, os dois servem para dar espaço de 16px entre os elementos filhos, mas o gap-4 funciona direto no container quando a gente usa Flexbox ou Grid, enquanto o space-y-4 funciona em blocos normais e vai adicionando uma margem em cima (margin-top) de todos os itens, menos no primeiro.

## Entrega

Compacte a pasta do projeto **sem a pasta `node_modules`** (ela é enorme e é recriada com `npm install`), incluindo:
- a pasta `src/` finalizada
- `respostas.md`
- Um **print** da página no celular (use o DevTools: `F12` → ícone de celular) e outro no desktop.

---

## Critérios de avaliação (10 pontos)

| Critério | Pontos |
|---|---|
| Ex. 1–2: base e navegação (flex, links escondidos no mobile, hover) | 1,5 |
| Ex. 3: hero com gradiente, tipografia responsiva e botões com estados | 1,5 |
| Ex. 4: grid responsivo 1 → 2 → 3 colunas e cards com hover | 2,0 |
| Ex. 5: layout em coluna no mobile e lado a lado no desktop | 1,5 |
| Ex. 6–7: formulário com estados de foco e rodapé | 1,0 |
| Nenhum CSS próprio (só classes do Tailwind) e uso correto de `className` | 0,5 |
| Perguntas respondidas corretamente | 1,5 |
| Desafio bônus | 0,5 |
| **Total** | **10,0** |
