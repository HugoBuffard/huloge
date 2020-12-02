var showMechantList = function(){
    //définition de la div
    var div = document.getElementById('mechant-list')

    var ul = document.createElement("ul")

    for(let j = 0; j < Object.keys(TYPES_MECHANTS).length; j++){

        var b = TYPES_MECHANTS[Object.keys(TYPES_MECHANTS)[j]]

        var li = document.createElement("li")
        li.innerHTML = b.face + " " + b.nom + " : " + b.description

        ul.appendChild(li)

    }

    //ajout du ul dans la div

    div.appendChild(ul)

}