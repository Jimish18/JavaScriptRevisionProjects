console.log("Jay shree ram");

let fetchData = document.getElementById("fetchData");
let list = document.getElementById("list");

let url = `https://randomuser.me/api/?results=50`;

function getData()
{
    fetch(url).then((Response)=>
    {
        return Response.json();
    }).then((data) => 
    {
        let str = ``;
        data.results.forEach(function(element)
        {
            str += `<li>${element.email}</li>`;
        });

        list.innerHTML = str;
    })
}

fetchData.addEventListener("click",getData);