/* ========================================= */
/* MeMyoE Birthday Project - script.js V2    */
/* ========================================= */

const overlay = document.getElementById("overlay");
const envelope = document.querySelector(".envelope");
const letterContainer = document.getElementById("letter-container");

/* ========================= */
/* 효과음 */
/* ========================= */

const letterSound = new Audio("audio/letter.mp3");
letterSound.volume = 1.0;

/* ========================= */
/* 봉투 클릭 → 편지 열기 */
/* ========================= */

function openLetter() {

    // 편지 효과음 재생
    letterSound.currentTime = 0;
    letterSound.play().catch(() => {});

    // 봉투 클릭 방지
    envelope.style.pointerEvents = "none";

    // 봉투 확대 + 사라짐
    envelope.style.transition = "0.4s";
    envelope.style.transform = "scale(1.15)";
    envelope.style.opacity = "0";

    // 0.3초 후 편지 등장
    setTimeout(() => {

        overlay.style.display = "flex";

    }, 300);

}

/* ========================= */
/* 편지 닫기 */
/* ========================= */

function closeLetter() {

    overlay.style.display = "none";

    // 봉투 다시 보이기
    envelope.style.opacity = "1";
    envelope.style.transform = "scale(1)";
    envelope.style.pointerEvents = "auto";

}

/* ========================= */
/* 메인 페이지 이동 */
/* ========================= */

function enterSite() {

    // 페이드 아웃 효과
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "main.html";

    }, 500);

}

/* ========================= */
/* ESC 키 */
/* ========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeLetter();

    }

});

/* ========================= */
/* 배경 클릭 시 닫기 */
/* ========================= */

overlay.addEventListener("click", function (event) {

    if (event.target === overlay) {

        closeLetter();

    }

});

/* ========================= */
/* 페이지 로드 */
/* ========================= */

window.onload = function () {

    document.body.style.opacity = "1";

};

/* ========================= */
/* 배경음악 자동 재생 보조 */
/* ========================= */

const bgm = document.getElementById("bgm");

document.addEventListener("click", () => {

    if (bgm && bgm.paused) {

        bgm.play().catch(() => {});

    }

}, { once: true });
