console.log("Jay Shree Ram");

let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let counter = document.getElementById("counter");

let count = 0;

function showCounter()
{
    counter.innerHTML = count;
}

function counterColor()
{
    if(count > 0)
    {
        counter.style.color = "#2E0219"
    }
    else if(count < 0 )
    {
        counter.style.color = "#3d0c02"
    }
    else
    {
        counter.style.color = "#002A32"
    }
}

decrease.addEventListener("click",function()
{
    count--;
    counterColor();
    showCounter();
});

reset.addEventListener("click",function()
{
    count = 0;
    counterColor();
    showCounter();
});

increase.addEventListener("click",function()
{
    count++;
    counterColor();
    showCounter();
});

