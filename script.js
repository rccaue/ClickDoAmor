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
    "Você tem absoluta certeza?",
    "Vai se arrepender disso...",
    "Não desista tão fácil!",
    "Eu sei que você ama 😏"
];

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
    }, 1000);
});

naoBtn.addEventListener("mouseover", () => {
    naoClickCount++;

    // Diminui tamanho a cada fuga (mínimo 50px)
    const newWidth = Math.max(50, naoBtn.offsetWidth - 15);
    const newHeight = Math.max(30, naoBtn.offsetHeight - 10);
    naoBtn.style.width = newWidth + "px";
    naoBtn.style.height = newHeight + "px";

    // Muda frase a cada fuga
    if (naoClickCount - 1 < naoFrases.length) {
        naoBtn.textContent = naoFrases[naoClickCount - 1];
    }

    // Limita posição dentro da wrapper
    const wrapperRect = wrapper.getBoundingClientRect();
    const naoBtnRect = naoBtn.getBoundingClientRect();
    const maxX = wrapperRect.width - naoBtnRect.width - 5;
    const maxY = wrapperRect.height - naoBtnRect.height - 5;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    naoBtn.style.position = "absolute";
    naoBtn.style.left = randomX + "px";
    naoBtn.style.top = randomY + "px";
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
