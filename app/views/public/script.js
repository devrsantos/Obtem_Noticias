(function(){
    let noticias_titulos = document.querySelectorAll(".nfo-tit");
    let noticias_resumo = document.querySelectorAll(".nfo-txt");
    let noticias_data = document.querySelectorAll(".nfo-tpo");
    let noticias_categoria = document.querySelectorAll(".nfo-hub");
    let noticias_links = document.querySelectorAll(".blk-item");

    let arr_titulos = [];

    for (let i = 1; i < noticias_titulos.length; i++) {
      let noticias_limpas = `
        <p>Categoria da pulicação: ${noticias_categoria[i].textContent}</p>
        <p>Titulo da pulicação: ${noticias_titulos[i].textContent}</p>
        <p>Resumo da pulicação: ${noticias_resumo[i].textContent}</p>
        <p>Dia da pulicação: ${noticias_data[i].textContent}</p>
        <p>Saiba mais: <a href="${noticias_links[i].href.replace("https://olhardigital.com.br/", "")} target="_blank"">Click Aqui</a></p>
        <hr>
      `

      arr_titulos[i-1] = noticias_limpas.replace(/\n/g,"");
    }

    document.querySelectorAll("div").forEach((item) => {
      item.remove();
    });

    let paragrafo = document.createElement("div");

    let texto = JSON.stringify(arr_titulos)
      .replace(/"/g,"")
      .replace(/,/g,"")
      .replace("[","")
      .replace("]","");

    paragrafo.innerHTML = texto;

    document.body.append(paragrafo);

    // window.print();
})();
