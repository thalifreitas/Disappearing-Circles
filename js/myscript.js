//Titulo da pagina
let titulo = document.createElement('h1');
titulo.style.display = "grid";
titulo.style.justifyContent = "center";
titulo.id = "title";
titulo.innerHTML = "DISAPPERING CIRCLES";

//Imagens
let restartImg = document.createElement('img');
restartImg.src = 'img/restart.png';
restartImg.title = "Restart";
restartImg.style.width = "40px";
restartImg.style.height= "40px";

let adicionarImg = document.createElement('img');
adicionarImg.src = 'img/adicionar.png';
adicionarImg.title = "Adicionar";
adicionarImg.style.width = "40px";
adicionarImg.style.height= "40px";

let removerImg = document.createElement('img');
removerImg.src = 'img/remover.png';
removerImg.title = "Remover";
removerImg.style.width = "40px";
removerImg.style.height= "40px";

//Criando botão




//Enviando
document.addEventListener('DOMContentLoaded', function(event) {
    document.body.style.display = "grid";
    document.body.appendChild(titulo);
    document.body.appendChild(restartImg);
    document.body.appendChild(adicionarImg);
    document.body.appendChild(removerImg);
});
