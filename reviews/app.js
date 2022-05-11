console.log("Jay shree ram");

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let randomButton = document.getElementById("random-button");

let personImage = document.getElementById("image");
let personName = document.getElementById("name");
let personDesignation = document.getElementById("designation");
let personReview = document.getElementById("review");

let info = 
[
    {
        image : "images/0.jpg",
        name : "Jimish Prajapati",
        designation : "Frontend Web Developer",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat aut veniam consectetur sequi. Hic quidem nihil, fugit qui cumque non iste facilis culpa incidunt, amet accusantium, temporibus veniam! Illum, quasi omnis reiciendis esse asperiores suscipit aspernatur neque Lorem ipsum dolor sit amet."
    },

    {
        image : "images/40.jpg",
        name : "Ramesh D'souza",
        designation : "UI/UX Designer",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate fugiat architecto debitis excepturi error iure illum beatae? Sint, porro a error placeat, provident ipsum nisi aut dolorum, ipsam recusandae minus eveniet expedita eligendi. Quam?"
    },

    {
        image : "images/43.jpg",
        name : "Leesa sharma",
        designation : "Backend Web Developer",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga excepturi possimus repellendus praesentium necessitatibus quam. Quos, nostrum qui blanditiis temporibus quasi dolorem, obcaecati, fuga alias non est excepturi perferendis iusto! Consequatur maiores cupiditate tenetur! Tempora, necessitatibus enim."
    },

    {
        image : "images/47.jpg",
        name : "johny pingpong",
        designation : "DevOps Engineer",
        review : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nam obcaecati iste, ad pariatur accusantium necessitatibus qui. Voluptates ab repellat neque minima, modi nam asperiores ratione dolores necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, asperiores."
    },

    {
        image : "images/57.jpg",
        name : "Lara DingDong",
        designation : "NodeJS Developer",
        review : "dolores necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui a corrupti totam voluptatum, illo enim ipsam! Harum voluptatem commodi dolores."
        
    },

    {
        image : "images/84.jpg",
        name : "Brian Lara Datta",
        designation : "Game Developer",
        review : "elit Qui a corrupti totam voluptatum, illo enim ipsam! Harum voluptatem commodi dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus, consequatur modi est adipisci autem voluptate quae obcaecati impedit quidem asperiores consectetur placeat, pariatur a!."
        
    },

]

function randomNumberGenerator()
{
    let number = Math.floor(Math.random()*6);
    return number;
}

let count = 0;

next.addEventListener("click", function()
{
    count++;
    if(count == 6)
    {
        count = 0;
    }

    personImage.src = info[count].image;
    personName.innerHTML = info[count].name;
    personDesignation.innerHTML = info[count].designation;
    personReview.innerHTML = info[count].review;
});

prev.addEventListener("click", function()
{
    count--;
    if(count == -1)
    {
        count = 5;
    }

    personImage.src = info[count].image;
    personName.innerHTML = info[count].name;
    personDesignation.innerHTML = info[count].designation;
    personReview.innerHTML = info[count].review;
});

randomButton.addEventListener("click", function()
{
    let randomNumber = randomNumberGenerator();

    personImage.src = info[randomNumber].image;
    personName.innerHTML = info[randomNumber].name;
    personDesignation.innerHTML = info[randomNumber].designation;
    personReview.innerHTML = info[randomNumber].review;
});