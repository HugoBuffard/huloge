var drawProgressBar = function (val, ctx, width, height,x ,y, vieMax) {

    // Draw the fill
    if(val > vieMax/3 + vieMax/3)
    {
        ctx.fillStyle = 'green';
    }
    else if (val < vieMax/3 + vieMax/3 && val > vieMax/3)
    {
        ctx.fillStyle = 'orange';
    }
    else if(val < vieMax/3)
    {
        ctx.fillStyle = 'red';
    }

    ctx.fillRect(x, y, val * width, height);

    ctx.fillStyle = 'black';

    if(val > 0)
    {
        ctx.fillText("Vie: "+val + "%", 80+(width/2), (height / 2));
    }
  }