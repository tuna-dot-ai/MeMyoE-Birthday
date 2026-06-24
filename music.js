/* ========================================= */
/* Music Room Ultimate Version               */
/* ========================================= */

const record = document.getElementById("record");
const title = document.getElementById("songTitle");
const songNumber = document.querySelector(".song-number");
const playBtn = document.querySelector(".play-btn");
const equalizer = document.querySelector(".equalizer");
const player = document.getElementById("player");
const noteContainer = document.getElementById("noteContainer");

let current = 0;
let isPlaying = false;
let noteInterval = null;

const songs = [

    {
        image:"images/record1.png",
        title:"나의 우주",
        audio:"audio/song1.mp3"
    },

    {
        image:"images/record2.png",
        title:"항해",
        audio:"audio/song2.mp3"
    },

    {
        image:"images/record3.png",
        title:"소원을 빌어",
        audio:"audio/song3.mp3"
    },

    {
        image:"images/record4.png",
        title:"가짜 아이돌",
        audio:"audio/song4.mp3"
    },

    {
        image:"images/record5.png",
        title:"시작의 아이",
        audio:"audio/song5.mp3"
    },

    {
        image:"images/record6.png",
        title:"최종화",
        audio:"audio/song6.mp3"
    }

];

/* ========================================= */
/* 화면 갱신 */
/* ========================================= */

function updateSong(){

    record.style.opacity = "0";
    record.style.transform = "scale(0.9)";

    setTimeout(() => {

        record.src = songs[current].image;

        title.textContent =
        songs[current].title;

        songNumber.textContent =
        `${String(current + 1).padStart(2,"0")} / ${String(songs.length).padStart(2,"0")}`;

        player.src =
        songs[current].audio;

        record.style.opacity = "1";
        record.style.transform = "scale(1)";

        if(isPlaying){

            player.play();

        }

    },200);

}

/* ========================================= */
/* 다음 곡 */
/* ========================================= */

function nextSong(){

    current++;

    if(current >= songs.length){

        current = 0;

    }

    updateSong();

}

/* ========================================= */
/* 이전 곡 */
/* ========================================= */

function prevSong(){

    current--;

    if(current < 0){

        current = songs.length - 1;

    }

    updateSong();

}

/* ========================================= */
/* 음표 생성 */
/* ========================================= */

function createNote(){

    const notes = ["♪","♫","♬"];

    const note =
    document.createElement("div");

    note.className =
    "music-note";

    note.textContent =
    notes[Math.floor(Math.random()*notes.length)];

    const rect =
    record.getBoundingClientRect();

    note.style.left =
    rect.left + rect.width/2 + "px";

    note.style.top =
    rect.top + rect.height/2 + "px";

    const angle =
    Math.random() * Math.PI * 2;

    const distance =
    180 + Math.random() * 300;

    const x =
    Math.cos(angle) * distance;

    const y =
    Math.sin(angle) * distance;

    note.style.setProperty(
        "--x",
        x + "px"
    );

    note.style.setProperty(
        "--y",
        y + "px"
    );

    note.style.fontSize =
    (24 + Math.random()*18) + "px";

    noteContainer.appendChild(note);

    setTimeout(()=>{

        note.remove();

    },3000);

}

/* ========================================= */
/* 재생 / 정지 */
/* ========================================= */

function toggleSpin(){

    isPlaying = !isPlaying;

    if(isPlaying){

        record.classList.add("spinning");
        record.classList.add("playing");

        if(equalizer){

            equalizer.classList.add("active");

        }

        player.play();

        playBtn.innerHTML =
        "⏸ PAUSE";

        noteInterval =
        setInterval(createNote,350);

    }
    else{

        record.classList.remove("spinning");
        record.classList.remove("playing");

        if(equalizer){

            equalizer.classList.remove("active");

        }

        player.pause();

        playBtn.innerHTML =
        "▶ PLAY";

        clearInterval(noteInterval);

    }

}

/* ========================================= */
/* 자동 다음곡 */
/* ========================================= */

player.addEventListener("ended",()=>{

    nextSong();

});

/* ========================================= */
/* 키보드 */
/* ========================================= */

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextSong();

    }

    if(e.key==="ArrowLeft"){

        prevSong();

    }

    if(e.code==="Space"){

        e.preventDefault();

        toggleSpin();

    }

});

/* ========================================= */
/* 볼륨 */
/* ========================================= */

player.volume = 0.6;

/* ========================================= */
/* 시작 */
/* ========================================= */

updateSong();