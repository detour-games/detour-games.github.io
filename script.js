const translations = {
  zh: {
    nav_games:"游戏", nav_games_footer:"游戏", nav_features:"特色", nav_journal:"开发日志", nav_journal_footer:"开发日志",
    hero_title:"Games", hero_sub:"Independent titles on Steam.",
    hero_text:"查看《拼豆！》《漂流瓶盖》《沙雕之路》，以及后续新作与开发记录。",
    hero_cta_main:"查看游戏", hero_cta_secondary:"查看开发日志",
    games_kicker:"GAMES", games_title:"游戏作品",
    g1_title:"拼豆！", g1_desc:"一款轻松治愈的 3D 拼豆游戏。挑选图案、放下拼豆、完成熨烫并收藏作品，也可以上传自己的图片制作拼豆图纸。", g1_tag1:"轻松", g1_tag2:"创作", g1_tag3:"治愈",
    g2_title:"漂流瓶盖", g2_desc:"选择一个瓶盖，看它在水流与各种场景中和其他瓶盖比赛。轻松、物理模拟，也有一点完全交给运气的紧张感。", g2_tag1:"休闲", g2_tag2:"竞速", g2_tag3:"物理",
    g3_title:"沙雕之路", g3_desc:"为了买一份海蜇出门，结果一路穿过沙雕大陆与多个次元。以好奇心、喜剧故事和冒险探索驱动的公路旅行。", g3_tag1:"冒险", g3_tag2:"角色扮演", g3_tag3:"欢乐", g3_tag4:"探索",
    features_kicker:"FEATURES", features_title:"三个游戏，<br/>同等展示。",
    f1_title:"直接进入 Steam", f1_body:"三张游戏卡片都可以整张点击，直接打开各自的 Steam 商店页面。",
    f2_title:"统一展示结构", f2_body:"不再让某一款游戏压过其他作品，三款游戏都按同等分量展示。",
    f3_title:"轻量而清楚", f3_body:"保留清爽配色和动效，同时让页面信息更直接，更像一个真正的作品主页。",
    f4_title:"持续更新", f4_body:"开发日志区域会继续保留，后续可以继续往里面补充新内容和新游戏。",
    journal_kicker:"DEV JOURNAL", journal_title:"开发日志",
    j1_title:"Elsewhere 网站整理中", j1_body:"调整为更清楚的游戏主页结构，统一展示当前作品与开发记录。",
    j2_title:"三款游戏已加入主页", j2_body:"《拼豆！》《漂流瓶盖》《沙雕之路》现在都可以从主页直接进入 Steam 页面。",
    closing_title:"Elsewhere", closing_text:"Games on Steam, with room for more.", back_top:"回到顶部"
  },
  en: {
    nav_games:"Games", nav_games_footer:"Games", nav_features:"Features", nav_journal:"Dev Journal", nav_journal_footer:"Dev Journal",
    hero_title:"Games", hero_sub:"Independent titles on Steam.",
    hero_text:"Explore PIN DOU!, Drifting Bottle Cap, Road of Absurdity, and future titles with development updates.",
    hero_cta_main:"View games", hero_cta_secondary:"View dev journal",
    games_kicker:"GAMES", games_title:"Games",
    g1_title:"PIN DOU!", g1_desc:"A relaxing 3D fuse-bead game. Pick a pattern, place each bead, finish the piece, and build a collection of your own. You can also upload your own images and turn them into bead patterns.", g1_tag1:"COZY", g1_tag2:"CREATIVE", g1_tag3:"RELAXING",
    g2_title:"Drifting Bottle Cap", g2_desc:"Pick a bottle cap and watch it race through water-driven courses. A casual physics simulation where luck can still make every run tense.", g2_tag1:"CASUAL", g2_tag2:"RACING", g2_tag3:"PHYSICS",
    g3_title:"Road of Absurdity", g3_desc:"A trip to buy jellyfish turns into a journey across an absurd continent and multiple dimensions, driven by curiosity, comedy and exploration.", g3_tag1:"ADVENTURE", g3_tag2:"RPG", g3_tag3:"FUNNY", g3_tag4:"EXPLORATION",
    features_kicker:"FEATURES", features_title:"Three games,<br/>equal weight.",
    f1_title:"Direct Steam access", f1_body:"Every game card is fully clickable and opens its own Steam store page.",
    f2_title:"A unified structure", f2_body:"No single game dominates the page now. All three titles are presented with equal weight.",
    f3_title:"Light and clear", f3_body:"The page keeps its fresh palette and motion, while becoming more straightforward as a game homepage.",
    f4_title:"Room to grow", f4_body:"The dev journal stays in place, ready for more updates and future titles.",
    journal_kicker:"DEV JOURNAL", journal_title:"Dev Journal",
    j1_title:"The Elsewhere site is being refined", j1_body:"The homepage structure is being reorganized to present the games and updates more clearly.",
    j2_title:"Three games are now on the homepage", j2_body:"PIN DOU!, Drifting Bottle Cap, and Road of Absurdity can now all be opened directly from the homepage.",
    closing_title:"Elsewhere", closing_text:"Games on Steam, with room for more.", back_top:"Back to top"
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
