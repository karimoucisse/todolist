var form = document.getElementById("form");
var input = document.getElementById("input")
var list = document.getElementById("list")

    // On récupère l'élément sur lequel on veut détecter le clic
 function onTaskSubmit() {          // On écoute l'événement click
    var listElementDiv = document.createElement("div");
    listElementDiv.innerHTML = input.value
    list.innerHTML= listElementDiv
             // On change le contenu de notre élément pour afficher "C'est cliqué !"
}