console.log("Jay shree Ram");

let data;

let fetchData = document.getElementById("fetchData");
let popData = document.getElementById("popData");

fetchData.addEventListener("click",fetchDataHandler);

function fetchDataHandler()
{
    console.log("we are fetching data");

    let xhr = new XMLHttpRequest();

    // On Open XHR GET request 
    xhr.open("GET","jimish.txt",true);
    // for POST request
    // xhr.getResponseHeader('Content-type','application/json');

    xhr.onprogress = () =>
    {
        console.log("we are processing the data");
    }

    xhr.onload = function()
    {
        data = this.responseText;
        console.log(data);
    }

    console.log(data);

    // let para = `I like singing , and travelling. `

    xhr.send();

    console.log("we are done now...!");
}

// popData.addEventListener

console.log(data);