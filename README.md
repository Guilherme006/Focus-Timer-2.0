## Sobre o Projeto

O **Focus Timer** é uma aplicação simples que permite ao usuário gerenciar sessões de foco com contagem regressiva e sons de fundo para melhorar a concentração. Ele oferece funcionalidades como ajuste de tempo, controle de som e alternância entre modos claro e escuro.

### Funcionalidades

- **Iniciar/Pausar/Resetar o Timer:** O usuário pode iniciar, pausar e resetar a contagem do temporizador.
- **Ajuste de Minutos:** O usuário pode ajustar o tempo do timer manualmente, adicionando ou removendo 5 minutos.
- **Modo Claro/Escuro:** O design da interface pode ser alternado entre os modos claro e escuro.
- **Sons Ambientais:** Inclui sons de floresta, chuva, cafeteria e lareira, que podem ser ativados individualmente e ajustados em volume.

### Constrído com

![visual-studio-code]
![HTML5 Badge]
![CSS3 Badge]
![JavaScript Badge]

### Estrutura do Projeto

**1. index.html**
O arquivo HTML contém a estrutura principal da interface, incluindo o temporizador, os controles de som e o botão de alternância de tema (claro/escuro).

**2. style.css**
O CSS define o design da interface, com suporte a temas claro e escuro. Ele também controla o layout dos controles e sliders de volume.

**3. main.js**
Arquivo principal que inicializa o temporizador, registrando eventos e atualizando a interface. Ele conecta todos os módulos necessários para o funcionamento da aplicação.

**4. toggle-mode.js**
Controla a alternância entre os modos claro e escuro. Ao clicar no botão de modo, o estado visual da aplicação é trocado, ajustando as cores de fundo e texto.

**5. actions.js**
Define as ações principais que podem ser executadas no temporizador, como iniciar/pausar, adicionar/remover tempo e controlar os sons.

**6. elements.js**
Exporta referências para elementos HTML, como o display de minutos e segundos, e os controles do temporizador.

**7. events.js**
Gerencia os eventos de clique nos controles do temporizador e a inserção manual de minutos. Cada controle aciona a função correspondente para iniciar, pausar, ajustar ou resetar o temporizador.

**8. sounds.js**
Controla os sons de fundo da aplicação, como floresta, chuva, cafeteria e lareira. Os volumes desses sons podem ser ajustados via sliders.

**9. state.js**
Gerencia o estado global da aplicação, como o tempo atual (minutos e segundos), se o temporizador está em execução e o ID do timeout para a contagem regressiva.

**10. timer.js**
Define a lógica de contagem regressiva do temporizador, atualizando o display a cada segundo e tocando um alarme ao final.

### Como Executar o Projeto

1. Clone o repositório:

   ```sh
   git clone https://github.com/Guilherme006/Focus-Timer-2.0.git
   ```

2. Abra o arquivo **index.html** em qualquer navegador moderno.


<!-- Badges -->
[visual-studio-code]: https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=for-the-badge
[HTML5 Badge]: https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge
[CSS3 Badge]: https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge
[JavaScript Badge]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=fff&style=for-the-badge

<!-- Images -->
[hero-image]: /asserts/hero.jpeg
[tela-jogo-image]: /asserts/tela-jogo.jpeg
[tela-fim-jogo-imagem]: /asserts/tela-fim-jogo.jpeg
