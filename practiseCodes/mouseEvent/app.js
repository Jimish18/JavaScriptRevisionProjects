console.log("Jay Shree Ram");

window.addEventListener("mousemove", mouseMoveEvent);

function mouseMoveEvent(e)
{
    let x = e.clientX;
    let y = e.clientY;

    let xS = window.scrollX;
    let yS = window.scrollY;

    console.log(x,y,xS,yS);
}