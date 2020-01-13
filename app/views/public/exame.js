(function(){
  let titulo_artigo = document.querySelector(".article-title").textContent;
  let resumo_artigo = document.querySelector(".article-subtitle").textContent;
  let conteudo_artigo = document.querySelectorAll(".article-content > p");

  let conteudo_completo = '';

  for (var i = 0; i < conteudo_artigo.length; i++) {
    let conteudo_recebido = conteudo_artigo[i].textContent;
    let texto_identado =
    conteudo_completo += `<p style="text-indent:1.5em">${conteudo_recebido}</p>`;

  }

  document.querySelectorAll("div").forEach((item) => {
    item.remove();
  });
  let footer = document.querySelector("#footer").remove();

  let paragrafo = document.createElement("div");

  let texto = conteudo_completo
    .replace(/"/g,"")
    .replace(/,/g,"")
    .replace("[","")
    .replace("]","");

  paragrafo.innerHTML = texto;

  let titulo = document.createElement("h1");

  titulo.innerHTML = titulo_artigo;

  document.body.append(titulo)

  document.body.append(paragrafo);

  window.print();

})();
