const TYPES_MECHANTS= {
  BOSS : {nom: "BOSS", vie: 150, face: "👹", description: "Ce méchant est de type BOSS, il à 150 de vie et se déplace verticalement il peut jeter des projectiles"},
  SIMPLE: {nom: "SIMPLE", vie: 35, face: "🤡", description: "Ces méchants sont de type SIMPLE, ils ont 35 de vie et se déplacent horizontalement"},
  AI: {nom: "AI", vie: 1, face: "😈", description: "Ce méchant est de type Intelligence Articielle, il à 1 de vie est il suit vos mouvement"}
}

var MECHANTS = [];

var VAGUE = function(nombreMechants, vitesseMechants){

  for(let i = 0; i< nombreMechants; i++){
    let newMechant = new MECHANT(Math.random()*canvas.width,Math.random()*canvas.height, randomEnemy());
    newMechant.v = vitesseMechants;

    MECHANTS.push(newMechant);
  }
}

var BOSS_SPAWN = function(){
  let newBoss = new MECHANT(Math.random()*canvas.width,Math.random()*canvas.height, TYPES_MECHANTS.BOSS);
  MECHANTS.push(newBoss);
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
  this.vieMax = 100;
  this.face = "";
  this.alive=true;

  switch(type)
  {

    case TYPES_MECHANTS.SIMPLE:
      this.face = TYPES_MECHANTS.SIMPLE.face
      this.vie = this.vieMax = TYPES_MECHANTS.SIMPLE.vie

      let dxs = 0
      let dys = this.v

      this.ia = function(){

         this.x = this.x + dxs
         this.y = this.y + dys

         if(this.y + dys > canvas.height || this.y + dys < 0)
         {
            dys = -dys
         }
      }
    break;
    case TYPES_MECHANTS.BOSS:
      this.face = TYPES_MECHANTS.BOSS.face
      this.vie = this.vieMax = TYPES_MECHANTS.BOSS.vie

      let dx = this.v
      let dy = 0

      this.ia = function(){
        this.x = this.x + dx
        this.y = this.y + dy

        if(this.x+ dx > canvas.width || this.x + dx < 0)
        {
           dx = -dx
        }

        if (this.alive == true && this.vie > 0)
        {

          PROJECTILES.push( new PROJECTILE(this.x, this.y, randomNumber(360), 3, 1000, 1))
        }

      }

    break;
    case TYPES_MECHANTS.AI:
      this.face = TYPES_MECHANTS.AI.face
      this.vie = this.vieMax = TYPES_MECHANTS.AI.vie

      this.ia = function(){
        this.a = r2d(Math.atan2(  perso.y - this.y ,   perso.x- this.x));
        let pi = Math.PI;
        let arad = (this.a / 180) * pi;
        let dx = Math.cos( arad ) * this.v;
        let dy = Math.sin( arad ) * this.v;
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
    drawProgressBar(this.vie, ctx, 1, 5, this.x - 15, this.y + 12, this.vieMax)
    this.ia();
  }
}
