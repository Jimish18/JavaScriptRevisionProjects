console.log("Jay Shree Ram");

let toggleBtn = document.getElementById("toggle-btn");
let links = document.getElementById("links");
// let show_links = document.querySelector(".show-links");

toggleBtn.addEventListener("click",function()
{
    if(!links.classList.contains("hide-links"))
    {
        links.classList.add("hide-links");
    }
    else
    {
        links.classList.remove("hide-links");
    }
})