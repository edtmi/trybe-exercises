## Para fixar II - Parte II - Seletores de elementos :heavy_check_mark:

Crie um arquivo HTML e copie o código a seguir.

```
<!DOCTYPE html>
<html>
  <body>
    <header>
      <h2 id="page-title">Título</h2>
      <p id="paragraph">Dê uma cor para este parágrafo!</p>
      <h4 id="subtitle">Subtítulo</h4>
      <p id="second-paragraph">Segundo parágrafo!</p>
    </header>
    <script>
      const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>

```

1. Adicione uma classe igual para os dois parágrafos.
2. Recupere os seus parágrafos via código *JavaScript*, usando a função `getElementsByClassName`;
3. Altere algum estilo do primeiro deles.
4. Recupere o subtítulo e altere a cor dele usando a função `getElementsByTagName`.
