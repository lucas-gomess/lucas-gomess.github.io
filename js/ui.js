// essa funcao seleciona o row (que esta no index)
// para depois desenhar todos os cards la
const atividades = document.querySelector('.atividades');

document.addEventListener('DOMContentLoaded', function() {
	// menus laterais 
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'left'});

// formulario para adicionar sobremesa
	const forms = document.querySelectorAll('.side-form');
	var instances2 = M.Sidenav.init(forms, {edge:'right'});
});

//funcao para desenhar o card da receita na tela
//id, nome, descricao, link, endereco_imagem
const desenhaCard = (data, id) => {

    const html = `
    <div class="col s12 m7 atividade" data="${id}">
      <div class="card blue darken-4">
        <div class="card-image atividade-imagem">
        <img src="images/${data.endereco_imagem}">
          <span class="card-title atividade-titulo">"${data.disciplina}"</span>
        </div>
        <div class="card-content">
         <font color="white"><p>Calendário</p></font>
        </div>
        <div class="card-action  blue darken-4">
          <a href="https://www.calendarioonline.com.br/calendario-2019/">Ver o Calendário</a>
        </div>
      </div>
    </div>`;
    atividades.innerHTML += html;

};
move recipe
const removeCard = (id) => {
  const ativ = document.querySelector(`.atividade[data-id=${id}]`);
  ativ.remove();
};
