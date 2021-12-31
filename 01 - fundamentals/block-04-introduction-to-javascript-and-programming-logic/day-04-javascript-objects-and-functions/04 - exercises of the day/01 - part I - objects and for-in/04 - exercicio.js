let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = "sim";

/* 4- Faça um novo for/in, mas agora mostre todos 
os valores das chaves do objeto.*/

for (let key in info) {
  console.log(info[key]);
}
