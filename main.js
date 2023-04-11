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

let name = "";
let say = "";
function draw() {
    switch(pagenum) {
        case 0:
            char.style.visibility = "hidden";
            document.body.style.backgroundImage = "url('vampireDoor.png')";

            name = you;
            say = "Hm... this address ordered.... A vegetarian pizza! Alright.";
            break;
        case 1:
            say = "(rings the doorbell)";
            break;
        case 2:
            char.style.visibility = "visible";
            
            name = them;
            say = "Who dares disturb me at this hour?!";
            break;
    }
    name_text.textContent = name;
    say_text.textContent = say;
}

draw();