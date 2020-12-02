var PROJECTILES = [];

var PROJECTILE = function(x,y,a,v, dmax=400, mechantOrPerso){
  this.x=x;
  this.y=y;
  this.a=a;
  this.v=v;
  this.max = dmax;
  this.d=0;
  this.face="◼";
  this.stopped=false;

  this.avancer = function(){
    this.d+=this.v;
    if(this.d < this.max)
    {
      console.log(v);
      pi = Math.PI;
      arad = ( this.a / 180 ) * pi;
      var dx = Math.cos( arad ) * this.v;
      var dy = Math.sin( arad ) * this.v;
      this.x+=dx;
      this.y+=dy;

      if(mechantOrPerso == 0)
      {
        for(let i=0; i< MECHANTS.length; i++) {
          if (MECHANTS[i].alive) {
            if (distance(this, MECHANTS[i]) < 20) {
              MECHANTS[i].vie--;

              if (MECHANTS[i].vie <= 0) {
                MECHANTS[i].meurt()
                MECHANTS.splice(i, 1);
                this.d = this.dmax;
                this.stopped = true;
              }
            }
          }
        }
      }
      else if(mechantOrPerso == 1)
      {
        this.face="⭕"
        if(distance(this, perso < 20))
        {
          if (perso.invincible == false)
          {
            perso.face="🥵";
            perso.life--;
          }
          else
          {
            perso.face=BONUS.INVINCIBLE.face;
          }
        }
      }
    }
  };

  this.draw = function(ctx){
    ctx.fillText(this.face,Math.ceil(this.x),Math.ceil(this.y));
  }
}
