let paragraphs = 
[
    "All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty."
    ,
    "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it. Hot stones can be used to toast bread. Coals are hot and can bring things to a boil quickly. If one is very adventurous, one can make a hole in the ground, fill it with coals and place foil-covered meat, veggies, and potatoes into the coals, and cover all of it with dirt. In a short period of time, the food will be baked. Campfire cooking can be done in many ways."
    ,
    "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing."
    ,
    "His parents continued to question him. He didn't know what to say to them since they refused to believe the truth. He explained again and again, and they dismissed his explanation as a figment of his imagination. There was no way that grandpa, who had been dead for five years, could have told him where the treasure had been hidden. Of course, it didn't help that grandpa was roaring with laughter in the chair next to him as he tried to explain once again how he'd found it."
    ,
    "The house was located at the top of the hill at the end of a winding road. It wasn't obvious that the house was there, but everyone in town knew that it existed. They were just all too afraid to ever go and see it in person."
    ,
    "It was easy to spot her. All you needed to do was look at her socks. They were never a matching pair. One would be green while the other would be blue. One would reach her knee while the other barely touched her ankle. Every other part of her was perfect, but never the socks. They were her micro act of rebellion."
    ,
    "Sometimes that's just the way it has to be. Sure, there were probably other options, but he didn't let them enter his mind. It was done and that was that. It was just the way it had to be."
    ,
    "The bowl was filled with fruit. It seemed to be an overabundance of strawberries, but it also included blueberries, raspberries, grapes, and banana slices. This was the meal Sarah had every morning to start her day since she could remember. Why she decided to add chocolate as an option today was still a bit of a surprise, but she had been in the process of deciding she wanted to change her routine. This was a baby step to begin that start."
    ,
    "No matter how hard he tried, he couldn't give her a good explanation about what had happened. It didn't even really make sense to him. All he knew was that he froze at the moment and no matter how hard he tried to react, nothing in his body allowed him to move. It was as if he had instantly become a statue and although he could see what was taking place, he couldn't move to intervene. He knew that wasn't a satisfactory explanation even though it was the truth."
    ,
    "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind."
    ,
    `The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may have called it a "bridge", the reality was it was nothing more than splintered wooden planks held together by rotting ropes. It was questionable whether it would hold the weight of a child, let alone the weight of a grown man. The problem was there was no other way across the gully, and this played into his calculations of whether or not it was worth the risk of trying to cross it.
    `
    ,
    "The answer was within her reach. It was hidden in a box and now that box sat directly in front of her. She'd spent years searching for it and could hardly believe she'd finally managed to find it. She turned the key to unlock the box and then gently lifted the top. She held her breath in anticipation of finally knowing the answer she had spent so much of her time in search of. As the lid came off she could see that the box was empty."
    ,
    "She tried not to judge him. His ratty clothes and unkempt hair made him look homeless. Was he really the next Einstein as she had been told? On the off chance it was true, she continued to try not to judge him."
    ,
    `What have you noticed today? I noticed that if you outline the eyes, nose, and mouth on your face with your finger, you make an "I" which makes perfect sense, but is something I never noticed before. What have you noticed today?`
    ,
    `Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.`
];

let form = document.getElementById("form");
let number = document.getElementById("amount");
let paragraphContainer = document.getElementById("paragraph-container");

form.addEventListener("submit",function(e)
{
    let value = parseInt(number.value);
    let innerArea = ``;

    if(value < 0 || value > 15)
    {
        window.alert("Number b/w 0-15 are only allowed");
    }
    else
    {
        

        let paras = paragraphs.slice(0,value);

        console.log(paras);

        paras.forEach(function(index)
        {
            innerArea += `<p>${index}</p>`;
        });

        paragraphContainer.innerHTML = innerArea;
    }

    
    e.preventDefault();
})
