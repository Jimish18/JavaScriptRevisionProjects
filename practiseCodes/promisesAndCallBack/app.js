console.log("Jay Shree Ram");

// -------------------> CallBack Function <----------------------- //
const students = 
[
    {
        name: "Jimish",
        subject: "JavaScript",
    },
    {
        name : "Vishva",
        subject :"Android",
    }
]

function enrollStudent(student,callback)
{
    setTimeout(function()
    {
        students.push(student);
        console.log("Student has been enrolled..!");    
        callback();
    }, 5000);
}

function fetchList()
{

    setTimeout(function()
    {
        let list = document.getElementById("list");
        let str =``;
    
        students.forEach(function(element)
        {
            str += `<li>${element.name}</li>`;
        })
    
        list.innerHTML = str;
        console.log("Data has been fetched");
        
    }, 2000);
}

let pupil = {name : "mihir", subject : "phycology"};

// enrollStudent(pupil,fetchList);
// fetchList();


// --------------------------> Promises <---------------------------- //

function tempEnrollment(student)
{
    return new Promise(function (resolve,reject)
    {
        setTimeout(() => {

            // if(c > 10)
            // {
            //     resolve(c);                
            // }
            // else
            // {
            //     reject(c);
            // }

            let error = false;
            if(!error)
            {
                students.push(student);
                console.log("Student has been enrolled..!");
                resolve();
            }
            else
            {
                reject();
            }
        }, 2000);
    })
}

// tempFunction(5,1).then(function(c)
// {
//     consoleFunction.log(`${c} is greater than 10`);
// }).catch(function(c)
// {
//     console.log(`${c} is lesser than 10`);
// })

tempEnrollment(pupil).then(function()
{
    fetchList();
}).catch(function()
{
    console.log(`some error occured!!`);
})

// ------------------------> Fetch API using Promise <------------------- //

function fetchAPI()
{
    return new Promise(function(resolve,reject)
    {
        
        const error = false;

        if(!error)
        {
            let url = fetch(`https://api.github.com/users`);
            url.then((x)=>
            {
                let users = x.json();
                resolve(users);
            }).catch(()=>
            {
                console.log("random input");
            })            
            
        }
        else
        {
            reject();
        }
        
    })    
};

let a = fetchAPI();

a.then((x) => 
{
    let list2 = document.getElementById("list2");

    let str = ``;
    
    x.forEach(element => 
        {
            str += `<li>${element.login + " " + element.id}</li>`
        })

    list2.innerHTML = str;
}).catch(()=>
{
    console.log("some error occured")
})

