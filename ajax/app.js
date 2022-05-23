console.log("Jay shree Ram");

let fetchData = document.getElementById("fetchData");
// let popData = document.getElementById("popData");
let titleData  = document.getElementById("titleData");
let contentData = document.getElementById("contentData");

// fetchData.addEventListener("click",fetchDataHandler);

// function fetchDataHandler()
// {
//     console.log("we are fetching data");

//     let xhr = new XMLHttpRequest();

//     // On Open XHR GET request 
//     xhr.open("GET","jimish.txt",true);
//     // for POST request
//     // xhr.getResponseHeader('Content-type','application/json');

//     xhr.onprogress = () =>
//     {
//         console.log("we are processing the data");
//     }

//     xhr.onload = function()
//     {
//         console.log(this.responseText);
//     }

//     xhr.send();

//     console.log("we are done now...!");
// }

// popData.addEventListener("click",popDatafunc);

// function popDatafunc()
// {
//     let xhr = new XMLHttpRequest();

//     xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);

//     xhr.onprogress = () =>
//     {
//         console.log("we are fetching data for you...!");
//     }
    
//     xhr.onload = function()
//     {
//         if(this.status === 200)
//         {
//             let obj = JSON.parse(this.responseText);

//             console.log(obj);

//             let dataList = document.getElementById("dataList");

//             str = ``;

//             let size = Object.keys(obj).length;

//             for(let i = 0 ; i < size; i++)
//             {
//                 str += `<li>${obj[i].title}</li>`;
//             }

//             dataList.innerHTML = str;
//         }
//     }

//     xhr.send();

//     console.log("We're done with fetching your data");
// }

// titleData.addEventListener("click",loadData(`https://jsonplaceholder.typicode.com/posts`,fetchTitleFunction));

function loadData(url,cFunction)
{
    const xhr = new XMLHttpRequest();

    xhr.open("GET",url,true);

    xhr.onload = function()
    {
        cFunction(this);
    }

    xhr.send();
}

function fetchTitleFunction(xhttp)
{
    // let obj = JSON.parse(xhttp.responseText);
    // let size = Object.keys()
    console.log("hi");
}

// function fetchContentFunction(xhttp)
// {
    
// }