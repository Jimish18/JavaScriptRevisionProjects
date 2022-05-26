console.log("Jay Shree Ram");

// grab element
let list = document.getElementById("list");

async function temp()
{
    console.log("Inside temp function");
    let url = await fetch(`https://api.github.com/users`);
    console.log("before response");
    console.log(url);
    let users = await url.json();
    console.log(users);
    console.log("users resolved");
    return users;
}

console.log("before execution of temp function");
let a = temp();
console.log("after assigning the variable to the function");
console.log(a);
console.log("after returning thr value of function");

a.then((x)=>
{
    let str = ``;
    x.forEach(element => {
        str+= `<li>${element.login + " " + element.id}</li>`
    });

    list.innerHTML = str;
})
.catch(()=>{
    console.log("some error occured");
})