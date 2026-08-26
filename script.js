const translations = {
  zh: {
    nav_games:"游戏", nav_games_footer:"游戏", nav_features:"特色", nav_journal:"开发日志", nav_journal_footer:"开发日志",
    hero_title:"拼豆！", hero_sub:"A relaxing 3D fuse-bead game.", hero_text:"挑选喜欢的图案，一颗一颗放下拼豆，完成、熨烫并收藏属于自己的作品。", hero_cta_main:"打开 Steam 页面", hero_cta_secondary:"查看其他游戏", hero_meta:"STEAM / 开发中",
    games_kicker:"GAMES", games_title:"其他游戏",
    g1_title:"拼豆！", g1_desc:"一款轻松治愈的 3D 拼豆游戏。挑选图案、放下拼豆、完成熨烫并收藏作品，也可以上传自己的图片制作拼豆图纸。", g1_tag1:"轻松", g1_tag2:"创作", g1_tag3:"治愈",
    g2_title:"漂流瓶盖", g2_desc:"选择一个瓶盖，看它在水流与各种场景中和其他瓶盖比赛。轻松、物理模拟，也有一点完全交给运气的紧张感。", g2_tag1:"休闲", g2_tag2:"竞速", g2_tag3:"物理",
    g3_title:"沙雕之路", g3_desc:"为了买一份海蜇出门，结果一路穿过沙雕大陆与多个次元。以好奇心、喜剧故事和冒险探索驱动的公路旅行。", g3_tag1:"冒险", g3_tag2:"角色扮演", g3_tag3:"欢乐", g3_tag4:"探索",
    closing_text:"更多游戏和开发记录会继续更新。", back_top:"回到顶部"
  },
  en: {
    nav_games:"Games", nav_games_footer:"Games", nav_features:"Features", nav_journal:"Dev Journal", nav_journal_footer:"Dev Journal",
    hero_title:"PIN DOU!", hero_sub:"A relaxing 3D fuse-bead game.", hero_text:"Pick a pattern, place each bead one by one, iron the finished piece, and build a collection of your own.", hero_cta_main:"Open Steam page", hero_cta_secondary:"View other games", hero_meta:"STEAM / IN DEVELOPMENT",
    games_kicker:"GAMES", games_title:"Other games",
    g1_title:"PIN DOU!", g1_desc:"A relaxing 3D fuse-bead game. Pick a pattern, place each bead, finish the piece, and build a collection of your own. You can also upload your own images and turn them into bead patterns.", g1_tag1:"COZY", g1_tag2:"CREATIVE", g1_tag3:"RELAXING",
    g2_title:"Drifting Bottle Cap", g2_desc:"Pick a bottle cap and watch it race through water-driven courses. A casual physics simulation where luck can still make every run tense.", g2_tag1:"CASUAL", g2_tag2:"RACING", g2_tag3:"PHYSICS",
    g3_title:"Road of Absurdity", g3_desc:"A trip to buy jellyfish turns into a journey across an absurd continent and multiple dimensions, driven by curiosity, comedy and exploration.", g3_tag1:"ADVENTURE", g3_tag2:"RPG", g3_tag3:"FUNNY", g3_tag4:"EXPLORATION",
    closing_text:"More games and development updates will be added here.", back_top:"Back to top"
  }
};

let lang = localStorage.getItem("elsewhere-lang") || "zh";
const langButton = document.getElementById("langButton");

function applyLang(){
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  langButton.textContent = lang === "zh" ? "EN / 中" : "中 / EN";
  localStorage.setItem("elsewhere-lang", lang);
}
langButton.addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  applyLang();
});
applyLang();


// PIN DOU! hero heart
const heartPattern = [
  "0001100011000",
  "0011110111100",
  "0111111111110",
  "1111111111111",
  "1111111111111",
  "0111111111110",
  "0111111111110",
  "0011111111100",
  "0001111111000",
  "0000111110000",
  "0000011100000",
  "0000001000000",
  "0000000000000"
];
const pindouHeart = document.getElementById("pindouHeart");
if (pindouHeart) {
  heartPattern.join("").split("").forEach((v, i) => {
    const dot = document.createElement("span");
    dot.className = "hero-bead" + (v === "1" ? " active" : "");
    if ([17, 35, 73].includes(i)) dot.classList.add("mint");
    pindouHeart.appendChild(dot);
  });
}


const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

function bindTilt(card){
  card.addEventListener("mousemove", e => {
    if (window.innerWidth < 900) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * 8;
    const rx = (0.5 - py) * 8;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  });
  card.addEventListener("mouseleave", () => { card.style.transform = ""; });
}
document.querySelectorAll(".tilt-card").forEach(bindTilt);

document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    if (window.innerWidth < 900) return;
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.08}px,${y * 0.08}px)`;
  });
  btn.addEventListener("mouseleave", () => btn.style.transform = "");
});

const canvas = document.getElementById("cursorTrail");
const ctx = canvas.getContext("2d");
let dpr = Math.max(1, window.devicePixelRatio || 1);
let particles = [];
let lastX = -999, lastY = -999;

function resizeCanvas(){
  dpr = Math.max(1, window.devicePixelRatio || 1);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
  ctx.setTransform(dpr,0,0,dpr,0,0);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const colors = ["#ffd5e6","#c9f1ff","#dbf8ea","#fff2be","#e8dcff"];

function spawn(x,y,dx,dy){
  for(let i=0;i<2;i++){
    particles.push({
      x,y,
      dx:(Math.random()-.5)*0.9 + dx*0.015,
      dy:(Math.random()-.5)*0.9 + dy*0.015,
      size:Math.random()*6+4,
      alpha:.85,
      life:Math.random()*28+28,
      color:colors[(Math.random()*colors.length)|0]
    });
  }
}

window.addEventListener("mousemove", e => {
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  lastX = e.clientX; lastY = e.clientY;
  spawn(e.clientX, e.clientY, dx, dy);
});

window.addEventListener("touchmove", e => {
  const t = e.touches[0];
  if(!t) return;
  const dx = t.clientX - lastX;
  const dy = t.clientY - lastY;
  lastX = t.clientX; lastY = t.clientY;
  spawn(t.clientX, t.clientY, dx, dy);
}, {passive:true});

function draw(){
  ctx.clearRect(0,0,innerWidth,innerHeight);
  for(let i=particles.length-1;i>=0;i--){
    const p = particles[i];
    p.x += p.dx;
    p.y += p.dy;
    p.alpha *= 0.97;
    p.life -= 1;
    p.size *= 0.985;
    ctx.globalAlpha = Math.max(0,p.alpha);
    const grad = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size);
    grad.addColorStop(0,p.color);
    grad.addColorStop(1,"rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();
    if(p.life<=0 || p.alpha<0.03 || p.size<0.8) particles.splice(i,1);
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}
draw();
