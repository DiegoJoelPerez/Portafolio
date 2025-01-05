<<<<<<< HEAD
//funcion que aplica estilo a l a opcion selecionada en el menu quita previamente seleccionado
function seleccionar(link){
    var opciones =document.querySelectorAll('#links a');
    opciones [0].className = "";
    opciones [1].className = "";
    opciones [2].className = "";
    opciones [3].className = "";
    opciones [4].className = "";
    link.className = "seleccionado";
    //hacer desaparecer el menu una vez se seleciona una opcion en el modo responsive
    var x =document.getElementById("nav");
    x.className = "";
}
//funciona menu responsive
function responsiveMenu(){
    const x = document.getElementById("nav");  // Usamos const, ya que no necesitamos reasignar x
    if(x.className === ""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}
//detectando el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function() {
    efectoHabilidades()
};

//function que aplica animacion a la barra de habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300) {
        document.getElementById ("HTML&CSS").classList.add("barra-progreso1");
        document.getElementById ("GIT").classList.add("barra-progreso2");
        document.getElementById ("JAVA").classList.add("barra-progreso3");
        document.getElementById ("JAVASCRIPT").classList.add("barra-progreso4");

        
    }
=======
//funcion que aplica estilo a l a opcion selecionada en el menu quita previamente seleccionado
function seleccionar(link){
    var opciones =document.querySelectorAll('#links a');
    opciones [0].className = "";
    opciones [1].className = "";
    opciones [2].className = "";
    opciones [3].className = "";
    opciones [4].className = "";
    link.className = "seleccionado";
    //hacer desaparecer el menu una vez se seleciona una opcion en el modo responsive
    var x =document.getElementById("nav");
    x.className = "";
}
//funciona menu responsive
function responsiveMenu(){
    const x = document.getElementById("nav");  // Usamos const, ya que no necesitamos reasignar x
    if(x.className === ""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}
//detectando el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function() {
    efectoHabilidades()
};

//function que aplica animacion a la barra de habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300) {
        document.getElementById ("HTML&CSS").classList.add("barra-progreso1");
        document.getElementById ("GIT").classList.add("barra-progreso2");
        document.getElementById ("JAVA").classList.add("barra-progreso3");
        document.getElementById ("JAVASCRIPT").classList.add("barra-progreso4");

        
    }
>>>>>>> 6188e32 (mejorando proyectos)
}