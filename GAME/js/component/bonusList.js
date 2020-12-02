var showBonusList = function(){
    //définition de la div
    var div = document.getElementById('bonus-list')

    //set du ul
    var ul = document.createElement("ul")
   // ul.setAttribute('class',  "list-group list-group-flush")

    //set des li

    for(let j = 0; j < Object.keys(BONUS).length; j++){

        var b = BONUS[Object.keys(BONUS)[j]]

        var li = document.createElement("li")
       // li.setAttribute('class', "list-group-item")
        li.innerHTML = b.face + " " + b.name + " : " + b.description

        ul.appendChild(li)

    }

    //ajout du ul dans la div

    div.appendChild(ul)

}