let speed = 5;

function getMousePosition(canvas, e){
    let rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }
}

let KEYS={
    UP:false,
    DOWN:false,
    LEFT:false,
    RIGHT:false,
    FIRE: false,

  }
  function controle() {
    if(KEYS.UP===true){
      perso.vitesse(speed);
    }
    else if(KEYS.DOWN===true){
      perso.vitesse(-speed);
    }
    else
    {
      perso.vitesse(0);
    }

    if(KEYS.LEFT===true){
      perso.tourner(-speed);
    }
    if(KEYS.RIGHT===true){
      perso.tourner(speed);
    }
    if(KEYS.FIRE===true){
      perso.tirer();
      KEYS.FIRE=false;
    }
  }
  window.addEventListener('keydown', function(event) {
    //console.log(event.keyCode);
    switch (event.keyCode) {
      case 81: // Left
      KEYS.LEFT=true ;
      break;
      case 90: // Up
      KEYS.UP=true ;
      break;
      case 68: // Right
      KEYS.RIGHT=true ;
      break;
      case 83: // Down
      KEYS.DOWN=true ;
      break;
      case 32: // shoot
      KEYS.FIRE=true ;
      break;
    }
    event.preventDefault();
  }, false);
  window.addEventListener('keyup', function(event) {
    //console.log(event.keyCode);
    switch (event.keyCode) {
      case 81: // Left
      KEYS.LEFT=false ;
      break;
      case 90: // Up
      KEYS.UP=false ;
      break;
      case 68: // Right
      KEYS.RIGHT=false ;
      break;
      case 83: // Down
      KEYS.DOWN=false ;
      break;
      case 32: // shoot
      KEYS.FIRE=false ;
      break;
    }
    event.preventDefault();

      canvas.addEventListener('mousemove', function (e) {
          let mousePosition = getMousePosition(canvas, e)
          let mouseXFromCenter = mousePosition.x - perso.x
          let mouseYFromCenter = mousePosition.y - perso.y

          let mouseAngle = Math.atan2(mouseYFromCenter,mouseXFromCenter)
          perso.follow(mouseAngle)
      }, false)
      canvas.addEventListener('click', function (e){
          perso.tirer()
      }, false)

  }, false);