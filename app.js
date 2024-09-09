function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se o campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "Nada foi encontrado"
        return
    }

    campoPesquisa = campoPesquisa .toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags ="";

    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se nome includes campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href=${dado.redes} target="_blank">${dado.nome}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao} </p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;  
        }
      
      
    }

    if (!resultados) {
        resultados = "nada foi encontrado. Você precisa digitar o nome de um atleta."

    } 
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }

