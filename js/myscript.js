//Titulo da pagina
let titulo = document.createElement('h1');
titulo.style.display = "grid";
titulo.style.justifyContent = "center";
titulo.id = "title";
titulo.innerHTML = "DISAPPERING CIRCLES";

//style titulo
titulo.style.fontSize = '50px';

//Imagens
let restartImg = document.createElement('img');
restartImg.src = 'img/restart.png';
restartImg.title = "Recomeçar";


let adicionarImg = document.createElement('img');
adicionarImg.src = 'img/adicionar.png';
adicionarImg.title = "Adicionar";

let removerImg = document.createElement('img');
removerImg.src = 'img/remover.png';
removerImg.title = "Remover";

//style imagens
restartImg.style.width = "40px";
restartImg.style.height= "40px";
adicionarImg.style.width = "40px";
adicionarImg.style.height= "40px";
removerImg.style.width = "40px";
removerImg.style.height= "40px";



//Criando div do botão
let botaoDiv = document.createElement('div');
botaoDiv.style.display = "block";

//style
botaoDiv.style.justifySelf = "left";
botaoDiv.style.marginLeft = "10px";

//Botão para adicionar círculos
let botaoAdd = document.createElement('button');
botaoAdd.type = 'button';
botaoAdd.appendChild(adicionarImg);
//style Adicionar
botaoAdd.style.display = 'block';
botaoAdd.style.border = "#D3D3D3";
botaoAdd.style.backgroundColor = "#D3D3D3";
botaoAdd.style.margin = '10px'


//Botão para recomeçar
let botaoRestart = document.createElement('button');
botaoRestart.type = 'button';
botaoRestart.appendChild(restartImg);
//style Recomeçar
botaoRestart.style.display = 'block';
botaoRestart.style.backgroundColor = "#D3D3D3";
botaoRestart.style.border = "#D3D3D3";
botaoRestart.style.margin = '10px'


//Botão para remover círculos
let botaoRemover = document.createElement('button');
botaoRemover.type = 'button';
botaoRemover.appendChild(removerImg);
//style remover
botaoRemover.style.display = 'block';
botaoRemover.style.backgroundColor = "#D3D3D3";
botaoRemover.style.border = "#D3D3D3";
botaoRemover.style.margin = '10px'


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


let listaCores = ['#FF0398', '#FF5E5E', '#03B4FF', '#FDA703', '#7C9939']

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

//Recomeçar ao clicar no botão Restart
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
    //style background
    document.body.style.backgroundColor = '#D3D3D3';
});
