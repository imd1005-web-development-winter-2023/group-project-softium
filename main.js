let pagenum = 0;
let you = "Pizza Girl";
let them = "Vampire";

const char = document.querySelector("#character");
const next_button = document.querySelector("#nextButton");
const name_text = document.querySelector("#characterName");
const say_text = document.querySelector("#storyText");

next_button.addEventListener("click", next_page);
function next_page(e) {
    pagenum++;
    console.log(`page ${pagenum}`);
    draw();
}

let nameT = "";
let say = "";
function draw() {
    switch(pagenum) {
        case 0:
            char.style.visibility = "hidden";
            document.body.style.backgroundImage = "url('vampireDoor.png')";

            nameT = you;
            say = "Hm... this address ordered.... A vegetarian pizza for dinner! Alright.";
            break;
        case 1:
            say = "(rings the doorbell)";
            break;
        case 2:
            nameT = "";
            say = "Out of the door steps a tall man, dressed in Victorian-esque attire. He flinches at the light of the streetlights."
            break;
        case 3:
            char.style.visibility = "visible";
            
            nameT = them;
            say = "Who dares disturb me at this hour!?";
            break;
        case 4:
            nameT = you;
            say = "...? Uh... hello, sir, I'm here to deliver your large vegetarian pi-";
            break;
        case 5:
            nameT = them;
            say = "Delightful! That was quick!";
            break;
        case 6:
            nameT = you;
            say = "Uh... really? The drive over actually took quite a while...";
            break;
        case 7:
            nameT = them;
            say = "Ah, of course. Forgive me; time passes quickly when you're immortal.";
            break;
        case 8:
            nameT = you;
            say = "A-Are you a... vampire..??";
            break;
        case 9:
            nameT = them;
            say = "Yes. Why, is that a problem?";
            break;
        case 10:
            nameT = you;
            say = "N-No! No! It's just.. I never would've thought that vampires would eat.. Vegetarian pizzas?";
            break;
        case 11:
            nameT = them;
            say = "Oh goodness no. I always order the meat lovers' flavour. After all, someone with a lifestyle such as mine must carefully watch their physique! I just thought I'd try something different for once. Eternal life becomes kind of... boring after a while, wouldn't you agree?";
            break;
        case 12:
            nameT = you;
            say = "A-Ah... yes. I see...";
            break;
    }
    name_text.textContent = nameT;
    say_text.textContent = say;
}

draw();