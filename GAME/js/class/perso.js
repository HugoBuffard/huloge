
var PERSO = function(x,y,a,v){
    this.face="😡";
    this.x=x;
    this.y=y;
    this.a=a;
    this.v=v;
    this.score = 0;
    this.level = 1;
    this.life = 100;
    this.maxLife = 100;
    this.invincible = false;

    this.aller = function(x,y){
      this.x=x;
      this.y=y;
    }

    this.tourner = function(a){
      this.a=this.a+a;
    }

    this.vitesse = function(v){
      this.v = v;
    }

    this.avancer = function(){
      pi = Math.PI;
      arad = ( this.a / 180 ) * pi;
      var dx = Math.cos( arad ) * this.v;
      var dy = Math.sin( arad ) * this.v;
      this.aller(this.x+dx,this.y+dy);
      this.face="😡";

      if(this.x + dx > canvas.width || this.x + dx < 0)
      {
        this.x = this.x - dx
      }

      if(this.y + dy > canvas.height || this.y + dy < 0)
      {
        this.y = this.y + - dy
      }

      for(var i =0; i<MECHANTS.length;i++)
      {
        if( distance(this, MECHANTS[i]) < 20)
        {
          if (this.invincible == false)
          {
            this.face="🥵";
            this.life--;
          }
          else
          {
            this.face=BONUS.INVINCIBLE.face;
          }
        }
      }

      if(distance(this, bonus) < 20 && bonus.taken == false)
      {
        this.face = "😊"
        bonus.startBonus()
        bonus.taken = true
      }

    }

    this.follow = function(angle){
        this.a = angle*(180/Math.PI)
    }

    this.tirer= function(){
      PROJECTILES.push( new PROJECTILE(this.x, this.y, this.a, this.v+10, 1000, 0)); // 3-> la vitesse du projectile
    }

    this.draw = function(ctx){
      pi = Math.PI;
      arad = ( this.a / 180 ) * pi;
      var dx = Math.cos( arad ) * 30;
      var dy = Math.sin( arad ) * 30;
      ctx.beginPath();
      ctx.strokeStyle="#f00";
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x+dx, this.y+dy);
      ctx.stroke();
      ctx.fillText(this.face,Math.ceil(this.x),Math.ceil(this.y));
      drawProgressBar(this.life, ctx, 2, 20, 0, 0, this.maxLife);
    }
  }