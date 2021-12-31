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
