var showReplayButton = function(){
    // instance du canvas = canvas
    var replayButtonDiv = document.getElementById("replayButton");
    var replayButton = document.createElement("button");
    replayButton.innerHTML="Rejouer";
    replayButton.setAttribute("class", "btn btn-primary");
    replayButton.addEventListener("click", function(e){
      document.location.reload(true);
    });
    replayButtonDiv.appendChild(replayButton);
  }