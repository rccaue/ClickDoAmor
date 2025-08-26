const wrapper = document.querySelector(".wrapper");
const questao = document.querySelector(".questao");
const gif = document.querySelector(".gif");
const simBtn = document.querySelector(".sim-btn");
const naoBtn = document.querySelector(".nao-btn");
const musica = document.getElementById("loveSong");
const mensagemFinal = document.querySelector(".mensagem-final");
const toggleThemeBtn = document.querySelector(".toggle-theme");

let naoClickCount = 0;
const naoFrases = [
    "Tem certeza?",
    "Pensa direito",
    "Certeza absoluta?",
    "Vai se arrepender",
    "Eu sei que você ama",
    "Poxa amor",
    "clica em SIM",
    "Não blz então",
    "Vai PORRA",
    "fcho ent"
];

function moverBotaoNao() {
    naoClickCount++;

    const newWidth = Math.max(50, naoBtn.offsetWidth - 15);
    const newHeight = Math.max(30, naoBtn.offsetHeight - 10);
    naoBtn.style.width = newWidth + "px";
    naoBtn.style.height = newHeight + "px";

    naoBtn.style.fontSize = Math.max(10, newWidth / 8) + "px";

    if (naoClickCount - 1 < naoFrases.length) {
        naoBtn.textContent = naoFrases[naoClickCount - 1];
    }

    const maxX = window.innerWidth - newWidth - 5;
    const maxY = window.innerHeight - newHeight - 5;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    naoBtn.style.position = "fixed";
    naoBtn.style.left = randomX + "px";
    naoBtn.style.top = randomY + "px";
}

naoBtn.addEventListener("mouseover", moverBotaoNao);

naoBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverBotaoNao();
});

simBtn.addEventListener("click", () => {
    questao.innerHTML = "AAAAA, Eu tbm te AMO, meu amor da minha vidaaa 💖";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
    musica.play();

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-20px";
        heart.style.animationDuration = (2 + Math.random() * 3) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    setTimeout(() => {
        mensagemFinal.classList.remove("hidden");
        mensagemFinal.classList.add("show");
    }, 1500);
});

toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("night");

    if (document.body.classList.contains("night")) {
        toggleThemeBtn.textContent = "☀️";

        for (let i = 0; i < 30; i++) {
            let star = document.createElement("div");
            star.classList.add("star");
            star.style.width = star.style.height = Math.random() * 3 + "px";
            star.style.left = Math.random() * window.innerWidth + "px";
            star.style.top = Math.random() * window.innerHeight + "px";
            star.style.animationDuration = (1 + Math.random() * 2) + "s";
            document.body.appendChild(star);
        }

    } else {
        toggleThemeBtn.textContent = "🌙";
        document.querySelectorAll(".star").forEach(star => star.remove());
    }
});
