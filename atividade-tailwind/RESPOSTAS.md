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