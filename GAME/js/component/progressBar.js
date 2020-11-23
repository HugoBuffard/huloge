var drawProgressBar = function (val, ctx) {
    var width = 2
    var height = 20

    // Draw the fill
    if(val > 66)
    {
        ctx.fillStyle = 'green';
    }
    else if (val < 66 && val > 33)
    {
        ctx.fillStyle = 'orange'; 
    }
    else if(val < 33)
    {
        ctx.fillStyle = 'red';
    }

    ctx.fillRect(0, 0, val * width, height);

    ctx.fillStyle = 'black';

    if(val <= 0)
    {
        ctx.fillText("Mort 😵", 0+80+(width/2), 0+(height/2));
    }
    else 
    {
        ctx.fillText("Vie: "+perso.life + "%", 0+80+(width/2), 0+(height/2));
    }
  }