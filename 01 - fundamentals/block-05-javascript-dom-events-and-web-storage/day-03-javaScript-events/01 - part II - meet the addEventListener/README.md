## Para fixar I - Parte II - Conheça o addEventListener :heavy_check_mark:

Para os exercícios, copie os códigos HTML, CSS e JS abaixo e salve-os todos no mesmo diretório, com os nomes `index.html`, `style.css` e `main.js`, respectivamente.
Faça o que se pede no arquivo `main.js`. Você não precisará alterar os arquivos HTML e CSS. Para facilitar, os seletores já foram dados no início do arquivo `main.js`.

```

<!DOCTYPE html>
<html lang="pt-br">
  <head>
  <meta charset="UTF-8">
  <title>addEventListener</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header> 
      <h1>Spotrybefy</h1>
    </header>
    <main>
      <h3 id="my-spotrybefy">Meu top 3 do Spotrybefy</h3>
      <ul class="container">
        <li class="tech" id="first-li">Aqui está a primeira tecnologia que mais gostei.</li>
        <li id="second-li">Aqui está a segunda tecnologia que mais gostei.</li>
        <li id="third-li">Aqui está a terceira tecnologia que mais gostei.</li>
      </ul>
      <input type="text" id="input" placeholder="Alterar a primeira tecnologia">      
    </main>
    <script src="main.js"></script>
  </body>
</html>

```

css:

```

body {
  align-items: center;
  background-color: #333;
  color: white;
  display: flex;
  flex-flow: column wrap;
  font-family: Montserrat, sans-serif;
  height: 100vh;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100vw;
}

.container {
  display: flex;
  flex-flow: row wrap;
}

.container li {
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  height: 200px;
  justify-content: center;
  margin: 2px;
  padding: 15px;
  text-align: center;
  transition: all 0.25s ease;
  width: 200px;
}

h1 {
  font-size: 48px;
  color: #2fc18c;
}

.container li:nth-of-type(1) {
  background-color: #2fc18c;
  color: #333;
}

.container li:nth-of-type(2) {
  background-color: #006dfb;
}

.container li:nth-of-type(3) {
  background-color: #41197f;
}

input {
  border: 1px solid #333;
  margin: 10px 0;
  padding: 5px;
  text-align: center;
  width: 200px;
}

input:hover {
  border: 1px solid #2fc18c;
}

input:focus {
  border: 1px solid #006dfb;
  outline: 2px solid #006dfb;
}

.tech {
  transform: translateY(-20px);
}

```

script:

```

const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

```

