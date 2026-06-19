/* ========================================= */
/* MeMyoE Birthday Project - main.js         */
/* ========================================= */

/* ========================= */
/* BGM */
/* ========================= */

const bgm = document.getElementById("bgm");

if (bgm) {

    bgm.volume = 0.2;

    document.addEventListener("click", () => {

        if (bgm.paused) {

            bgm.play().catch(() => {});

        }

    }, { once: true });

}

/* ========================= */
/* 운세 효과음 */
/* ========================= */

const fortuneSound = new Audio("audio/fortune.mp3");
fortuneSound.volume = 1.0;

/* ========================= */
/* 생일 카운트다운 */
/* ========================= */

// 🎂 목표 날짜 (2026년 7월 7일 00:00)
const birthday = new Date("2026-07-07T00:00:00").getTime();

// 요소 가져오기
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// 숫자를 항상 두 자리로 표시
function pad(num) {

    return String(num).padStart(2, "0");

}

// 카운트다운 갱신
function updateCountdown() {

    const now = new Date().getTime();
    const diff = birthday - now;

    // 생일이 지난 경우
    if (diff <= 0) {

        document.getElementById("countdown").innerHTML = `
            <div class="count-box" style="width:auto;padding:30px 50px;">
                <span>🎉 Happy Birthday! 🎉</span>
                <small>MeMyoE</small>
            </div>
        `;

        return;

    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60)) /
        1000
    );

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);

}

// 최초 실행
updateCountdown();

// 1초마다 갱신
setInterval(updateCountdown, 1000);

/* ========================= */
/* 오늘의 운세 */
/* ========================= */

const fortunes = [

    "🌸 오늘은 작은 미소가 큰 행운을 가져다줄 거예요.",

    "💜 새로운 도전이 좋은 결과로 이어질 가능성이 높습니다.",

    "⭐ 잠시 쉬어가도 괜찮아요. 휴식이 행운입니다.",

    "🎵 좋아하는 노래를 들으면 기분 좋은 일이 생길지도 몰라요.",

    "🍀 행운의 숫자는 7! 좋은 일이 기다리고 있어요.",

    "🌙 오늘은 평소보다 용기를 내보세요.",

    "✨ 예상치 못한 선물을 받을 수 있는 하루입니다.",

    "☕ 따뜻한 음료 한 잔이 행운을 불러올지도 몰라요.",

    "🦋 주변 사람에게 친절을 베풀면 행복이 돌아옵니다.",

    "🎂 오늘의 주인공처럼 자신을 아껴주는 하루를 보내세요."

];

function showFortune() {

    // 효과음 재생
    fortuneSound.currentTime = 0;
    fortuneSound.play().catch(() => {});

    // 랜덤 운세
    const random =
        fortunes[Math.floor(Math.random() * fortunes.length)];

    document.getElementById("fortuneText").innerText = random;

    document.getElementById("fortuneModal").style.display = "flex";

}

function closeFortune() {

    document.getElementById("fortuneModal").style.display = "none";

}

function openLetters() {

    const transition = document.getElementById("photoTransition");

    // 중복 클릭 방지
    if (transition.classList.contains("active")) return;

    transition.classList.add("active");

    // 영화 같은 연출을 위해 2초 후 이동
    setTimeout(() => {

        window.location.href = "letter.html";

    }, 2000);

}