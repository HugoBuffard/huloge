var interval = 5000

const BONUS = {
    BOMB: {name: "Bombe", value: 1, face: "💣", description: "Permet de tué tous les ennemies de la vague en cours"},
    INVINCIBLE: {name: "Invincible", value: 2, face: "💪", description: "Vous êtes invincible durant " + interval/1000+ " secondes"},
    SPEED: {name: "Vitesse", value: 3, face: "🏎", description: "Votre vitesse est accrue durant " + interval/1000 + " secondes"},
    LIFE: {name: "Vie", value: 4, face: "❤️", description: "Vous récupérez toutes votre santé"},
    TIME: {name: "Horloge", value: 5, face: "⏱", description: "Permet d'augmenter un petit peu le temps des bonus durant toutes la partie"}
}

var BONUX = function(x, y, taken, bonus){
    this.x = x;
    this.y = y;
    this.face=""
    this.taken = taken

    switch(bonus){
        case BONUS.BOMB:
            this.face= BONUS.BOMB.face

            this.startBonus = function(){
                perso.score = perso.score +MECHANTS.length
                MECHANTS=[];
            }
        break
        case BONUS.INVINCIBLE:
            this.face=BONUS.INVINCIBLE.face

            this.startBonus = function(){
                perso.invincible = true

                setInterval(function(){
                    perso.invincible = false
                }, interval)
            }

        break
        case BONUS.SPEED:
            this.face=BONUS.SPEED.face

            this.startBonus = function(){
                speed = 10

                setInterval(function(){
                    speed = 5
                }, interval)
            }
        break
        case BONUS.LIFE:
            this.face= BONUS.LIFE.face

            this.startBonus = function(){
                perso.life = perso.life + (100 - perso.life)
            }
        break
        case BONUS.TIME:
            this.face = BONUS.TIME.face

           this.startBonus = function(){
                interval = interval + 1000
            }
        break
    }

    this.draw = function(ctx){
        ctx.fillText(this.face,Math.ceil(this.x),Math.ceil(this.y));
    }
}