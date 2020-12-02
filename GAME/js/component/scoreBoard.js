var drawScoreBoard = function (score, level, ctx, canvas) {

    ctx.fillText("Score: "+score + " | Level: " + level + " | Ennemie restant: " + remainingMechant(), canvas.width/1.3, canvas.height>>6);

  }

  var appendScoreBoardOnPage = function () {

    let h1 = document.getElementById("score");

      h1.innerHTML = "Score = " + calculFinalScore();

  }