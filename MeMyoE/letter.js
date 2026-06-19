const bgm = document.getElementById("bgm");

if (bgm) {
    bgm.volume = 0.25;
}

// 편지 목록
const letters = [

    "images/letters/letter1.png",

    "images/letters/letter2.png"

];

let current = 0;

const image = document.getElementById("letterImage");
const page = document.getElementById("pageText");

function updateLetter(){

    image.src = letters[current];

    page.textContent =
        `${current + 1} / ${letters.length}`;

}

function nextLetter(){

    current++;

    if(current >= letters.length){

        current = 0;

    }

    updateLetter();

}

function prevLetter(){

    current--;

    if(current < 0){

        current = letters.length - 1;

    }

    updateLetter();

}

updateLetter();