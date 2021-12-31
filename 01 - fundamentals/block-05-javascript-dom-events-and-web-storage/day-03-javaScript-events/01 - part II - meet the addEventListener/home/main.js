const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// event - é um obejo q lista todos os eventos.
// target - o alvo onde vai fazer a ação.
function addClass(event) {
  let changeClass = document.querySelector(".tech");
  // classList te retorna uma array de classes para manipulação.
  changeClass.classList.remove("tech");
  event.target.classList.add("tech");
  // limpa o campo do input
  input.value = "";
}

firstLi.addEventListener("click", addClass);
secondLi.addEventListener("click", addClass);
thirdLi.addEventListener("click", addClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeText() {
  input.addEventListener("input", function (event) {
    let selectorTech = document.querySelector(".tech");
    // pegando o valor(value) e atribui a caixa de texto(target-alvo)
    selectorTech.innerText = event.target.value;
  });
}
changeText();

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function changePage() {
  myWebpage.addEventListener("dblclick", function () {
    window.open("https://www.globo.com/", "_blank");
  });
}
changePage();

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColor() {
  myWebpage.addEventListener("mouseover", function (event) {
    event.target.style.color = "red";
  });
  myWebpage.addEventListener("mouseleave", function (event) {
    event.target.style.color = "unset";
  });
}
changeColor();
