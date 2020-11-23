
var distance = function(A,B)
{
    return Math.hypot(A.x-B.x, A.y-B.y);
}

function r2d(radians)
{
    return radians * 180 / Math.PI;
}

var randomBonux = function(){
    var rand = Math.floor(Math.random() * Object.keys(BONUS).length)

    return BONUS[Object.keys(BONUS)[rand]]
}

var calculFinalScore = function(){
    return (perso.score + perso.life) * perso.level
}