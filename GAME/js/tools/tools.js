
var distance = function(A,B)
{
    return Math.hypot(A.x-B.x, A.y-B.y);
}

function r2d(radians)
{
    return radians * 180 / Math.PI;
}

var randomBonux = function(){
    let rand = randomNumber(Object.keys(BONUS).length);

    return BONUS[Object.keys(BONUS)[rand]]
}

var randomEnemy = function () {

    let rand = randomNumber(Object.keys(TYPES_MECHANTS).length)

    let enemy = TYPES_MECHANTS[Object.keys(TYPES_MECHANTS)[rand]]

    if(enemy == TYPES_MECHANTS.BOSS)
    {
        return randomEnemy();
    }
    else
    {
        return enemy;
    }
}

let randomNumber = function(max)
{
    return Math.floor(Math.random() * max);
}

var calculFinalScore = function(){
    return perso.score * perso.level
}