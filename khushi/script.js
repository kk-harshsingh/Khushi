// Run after page fully loads
window.addEventListener("load", function () {

  /* 💖 Heart cursor trail */
  document.addEventListener("mousemove", function(e){
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.pointerEvents = "none";
    heart.style.fontSize = "16px";
    heart.style.animation = "heartFade 1s forwards";
    document.body.appendChild(heart);
    setTimeout(()=> heart.remove(), 900);
  });

  /* 🌸 Falling petals */
  function createPetal(){
    const petal = document.createElement("div");
    petal.innerHTML = "🌸";
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (6 + Math.random() * 4) + "s";
    petal.style.fontSize = (18 + Math.random() * 10) + "px";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
  }
  setInterval(createPetal, 700);

  /* Animations */
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes heartFade{
    to{ transform: translateY(-25px); opacity:0; }
  }
  .petal{
    position: fixed;
    top: -40px;
    pointer-events: none;
    animation: fallPetal linear forwards, swayPetal 3s ease-in-out infinite;
    z-index: 1;
    opacity: 0.9;
  }
  @keyframes fallPetal{
    to{ transform: translateY(110vh) rotate(360deg); opacity:0; }
  }
  @keyframes swayPetal{
    0%{ margin-left:0; }
    50%{ margin-left:25px; }
    100%{ margin-left:0; }
  }`;
  document.head.appendChild(style);

});