var MECHANTS = [];

var VAGUE = function(nombreMechants, vitesseMechants){
  var nb = nombreMechants;
  var v = vitesseMechants;
  for(i = 0; i< nb; i++){
    var newMechant = new MECHANT(Math.random()*canvas.width,Math.random()*canvas.height);
    newMechant.v = vitesseMechants;
    MECHANTS.push(newMechant);
  }
}
 // retourne le nombre de méchants en vie dans le jeu
remainingMechant = function(){
  var aliveMechants = MECHANTS.filter(function(mechant){
    return mechant.alive;
  });
  return aliveMechants.length;
};

var MECHANT = function(x, y){
  this.x = x;
  this.y = y;
  this.a = 0;
  this.v = 1;
  this.face="😈"
  this.alive=true;

  this.meurt = function(){
    this.alive = false;
    perso.score++;
    this.face="👿";
    //MECHANTS.push(new MECHANT(Math.random()*canvas.width,Math.random()*canvas.height));
  }

  this.ia = function(){
    this.a = r2d(Math.atan2(  perso.y - this.y ,   perso.x- this.x));
    pi = Math.PI;
    arad = ( this.a / 180 ) * pi;
    var dx = Math.cos( arad ) * this.v;
    var dy = Math.sin( arad ) * this.v;
    this.x = this.x + dx ;
    this.y = this.y + dy ;

  }
  this.draw = function(ctx){
    ctx.fillText(this.face,Math.ceil(this.x),Math.ceil(this.y));
    this.ia();
  }
}
