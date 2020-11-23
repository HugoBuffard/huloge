const TYPES_MECHANTS= {
  BOSS : {nom: "BOSS", vie: 150, face: "👹"},
  SIMPLE: {nom: "SIMPLE", vie: 35, face: "🤡"},
  AI: {nom: "AI", vie: 1, face: "😈"}
}

var MECHANTS = [];

var VAGUE = function(nombreMechants, vitesseMechants){
  var nb = nombreMechants;
  var v = vitesseMechants;
  for(i = 0; i< nb; i++){
    var newMechant = new MECHANT(Math.random()*canvas.width,Math.random()*canvas.height, TYPES_MECHANTS.SIMPLE);
    newMechant.v = v;
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

var MECHANT = function(x, y, type){
  this.x = x;
  this.y = y;
  this.a = 0;
  this.v = 1;
  this.vie = 1;
  this.face = "";
  this.alive=true;

  switch(type)
  {

    case TYPES_MECHANTS.SIMPLE:
      this.face = TYPES_MECHANTS.SIMPLE.face
      this.vie = TYPES_MECHANTS.SIMPLE.vie

      var dx = 0
      var dy = 1 * this.v

      this.ia = function(){

         this.x = this.x + dx
         this.y = this.y + dy

         if(this.y + dy > canvas.height || this.y + dy < 0)
         {
            dy = -dy
         }


      }
    break;
    case TYPES_MECHANTS.BOSS:
      this.face = TYPES_MECHANTS.BOSS.face
      this.vie = TYPES_MECHANTS.SIMPLE.vie

      var dx = 1 * this.v
      var dy = 0

      this.ia = function(){
        this.x = this.x + dx
        this.y = this.y + dy

        if(this.x+ dx > canvas.width || this.x + dx < 0)
        {
           dx = -dx
        }


      }
    break;
    case TYPES_MECHANTS.AI:
      this.face = TYPES_MECHANTS.AI.face
      this.vie = TYPES_MECHANTS.SIMPLE.vie

      this.ia = function(){
        this.a = r2d(Math.atan2(  perso.y - this.y ,   perso.x- this.x));
        pi = Math.PI;
        arad = ( this.a / 180 ) * pi;
        var dx = Math.cos( arad ) * this.v;
        var dy = Math.sin( arad ) * this.v;
        this.x = this.x + dx ;
        this.y = this.y + dy ;

      }
    break;

  }

  this.meurt = function(){
    this.alive = false;
    perso.score++;
    this.face="💀";
    //MECHANTS.push(new MECHANT(Math.random()*canvas.width,Math.random()*canvas.height));
  }

  this.draw = function(ctx){
    ctx.fillText(this.face,Math.ceil(this.x),Math.ceil(this.y));
    this.ia();
  }
}
