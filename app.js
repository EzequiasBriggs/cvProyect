// menu lateral
var menu_visble = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visble==false){
        menu.style.display = "block";
        menu_visble = true;
    }
    else{
        menu.style.display ="none";
        menu_visble = false;
    }
}
// ocultar menu una vez selecionado algo
let links = document.querySelectorAll("nav a");
for(var x = 0; x<links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visble = false;
    }
}
// creamos las barritas correspondiente a cada id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div); 
    }
}
//seleccion de barras para luego manipular
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let excel = document.getElementById("excel");
crearBarra(excel);
//pintas las que corresponda
let contadores=[-1,-1,-1,-1,];
//usamos la variable de bandera
let entro = false;
// funcion para la animacion
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro== false){
        entro =true;
        const intervalExcel = setInterval(function(){
            pintarBarra(excel, 14, 0, intervalExcel);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 13, 1, intervalJavascript);
        },100);
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 8.5, 2, intervalHtml);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 13, 3, intervalPhotoshop);
        },100);
        
    }
}
function pintarBarra(id_barra,cantidad,indice,interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#808080";
    } else{
        clearInterval(interval);
    }
}
//detecto el scroll del mouse para hacer animacion
window.onscroll = function(){
    efectoHabilidades();
} 