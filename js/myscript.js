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
removerImg.src = 'img/remove.png';
removerImg.title = "Remover";
removerImg.style.width = "40px";
removerImg.style.height= "40px";


//Criando div do botão
let botaoDiv = document.createElement('div');
botaoDiv.style.display = "block";
botaoDiv.style.justifySelf = "left";
botaoDiv.style.marginLeft = "10px";

//Botão para adicionar círculos
let botaoAdd = document.createElement('button');
botaoAdd.type = 'button';
botaoAdd.appendChild(adicionarImg);
botaoAdd.style.display = 'block';


//Botão para recomeçar
let botaoRestart = document.createElement('button');
botaoRestart.type = 'button';
botaoRestart.appendChild(restartImg);
botaoRestart.style.display = 'block';
// botaoRestart.style.backgroundColor = "#8B4513";
// botaoRestart.style.border = "#8B4513";


//Botão para remover círculos
let botaoRemover = document.createElement('button');
botaoRemover.type = 'button';
botaoRemover.appendChild(removerImg);
botaoRemover.style.display = 'block';
// botaoRemover.style.backgroundColor = "#8B4513";
// botaoRemover.style.border = "#8B4513";


//Adicionando botões na div de botões
botaoDiv.appendChild(botaoAdd);
botaoDiv.appendChild(botaoRemover);
botaoDiv.appendChild(botaoRestart);

//Criando div de círculos
let circulos = document.createElement('div');
circulos.style.float = "left";
circulos.style.padding = "0.2em";
circulos.style.margin = "1.0em auto";
circulos.id = "circulos";


let listaCores = ['#483D8B', '#006400', '#DAA520']

//Adicionar círculos ao clicar no botão Adicionar
botaoAdd.onclick = function(){
    let circulo = document.createElement('div');
    
    //style circulo
    circulo.style.width = '80px';
    circulo.style.height = '80px';
    circulo.style.float = 'left';
    circulo.style.margin = '20px';
    circulo.style.borderRadius = '50%';
    circulo.style.display = "block";

    //Remover círculos ao clicar neles
    circulo.id = "circulo";
    circulo.onclick = function(){
        circulo.style.display = "none";
    }

    let cor = listaCores[Math.floor(Math.random() * listaCores.length)];
    circulo.style.background = cor;
    circulos.appendChild(circulo);
}

//Remover círculos ao clicar no botão Remover
botaoRemover.onclick = function(){
    circulos.removeChild(circulos.lastChild);
}

//Recomeçando ao clicar no botão Restart
botaoRestart.onclick = function(){
    let circulos = document.getElementById('circulos');
    while(circulos.firstChild){
        circulos.removeChild(circulos.lastChild);
    }
}


//Enviando
document.addEventListener('DOMContentLoaded', function(event) {
    document.body.style.display = "grid";
    document.body.appendChild(titulo);
    document.body.appendChild(botaoDiv);
    document.body.appendChild(circulos);
    document.body.style.backgroundColor = '#DAA520';
});
