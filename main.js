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
        case 3:
            char.style.visibility = "visible";
            
            nameT = them;
            say = "Who dares disturb me at this hour!?";
            break;
    }
    name_text.textContent = nameT;
    say_text.textContent = say;
}

draw();