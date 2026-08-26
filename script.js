const translations = {
  en: {
    nav_games:"Games", nav_studio:"Studio", nav_journal:"Journal",
    hero_kicker:"INDEPENDENT GAME STUDIO",
    hero_text:"We make playful, tactile games about small obsessions, quiet moments, and unexpected turns.",
    hero_cta:"See our games", hero_about:"About DETOUR",
    games_kicker:"SELECTED GAME", games_title:"One small thing,<br/>made with care.",
    pindou_title:"PIN DOU!", pindou_desc:"A relaxing 3D fuse-bead game. Pick a pattern, place each bead, iron the finished piece, and build a collection of your own.",
    meta_status:"STATUS", meta_status_value:"IN DEVELOPMENT", meta_platform:"PLATFORM", steam_soon:"Steam page — soon",
    studio_kicker:"ABOUT THE STUDIO", studio_title:"Games worth<br/>taking a detour for.",
    studio_body:"DETOUR is an independent game development label focused on clear ideas, tactile interaction and memorable little worlds.",
    p1:"Simple to enter.", p2:"Pleasant to touch.", p3:"Hard to forget.",
    journal_kicker:"DEV JOURNAL", journal_title:"Notes from<br/>the side road.",
    j1_title:"DETOUR is taking shape.", j1_body:"A small home for our games, experiments and work in progress.",
    j2_title:"PIN DOU! is in development.", j2_body:"A tactile 3D game about placing tiny beads one by one.",
    closing_kicker:"STAY ON THE SIDE ROAD", closing_text:"Independent games, made somewhere off the main road."
  },
  zh: {
    nav_games:"游戏", nav_studio:"工作室", nav_journal:"开发日志",
    hero_kicker:"独立游戏开发工作室",
    hero_text:"我们喜欢做触感明确、概念清晰的小型游戏：关于微小的执着、安静的时刻，以及偶尔偏离主路的惊喜。",
    hero_cta:"查看游戏", hero_about:"关于 DETOUR",
    games_kicker:"正在制作", games_title:"认真做好<br/>一件小东西。",
    pindou_title:"拼豆！", pindou_desc:"一款轻松治愈的 3D 拼豆游戏。挑选喜欢的图案，一颗一颗放下拼豆，完成、熨烫并收藏属于自己的作品。",
    meta_status:"状态", meta_status_value:"开发中", meta_platform:"平台", steam_soon:"Steam 商店页 — 即将上线",
    studio_kicker:"关于工作室", studio_title:"值得绕一点路<br/>去玩的游戏。",
    studio_body:"DETOUR 是一个独立游戏开发品牌。我们关注清晰的玩法想法、舒服的操作触感，以及能够被记住的小世界。",
    p1:"上手简单。", p2:"操作舒服。", p3:"留下记忆。",
    journal_kicker:"开发日志", journal_title:"来自支路的<br/>一些记录。",
    j1_title:"DETOUR 正在成形。", j1_body:"这里会成为游戏、实验和开发过程的小小落脚点。",
    j2_title:"《拼豆！》正在开发。", j2_body:"一款把小豆子一颗颗放下去的 3D 触感游戏。",
    closing_kicker:"偶尔离开主路", closing_text:"一些在主路之外慢慢做出来的独立游戏。"
  }
};

let lang = localStorage.getItem("detour-lang") || "en";
const langButton = document.getElementById("langButton");

function applyLang(){
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  langButton.textContent = lang === "zh" ? "EN / 中" : "中 / EN";
  localStorage.setItem("detour-lang", lang);
}
langButton.addEventListener("click",()=>{lang = lang === "en" ? "zh" : "en";applyLang();});
applyLang();

const heart = [
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
"0000000000000",
];
const beadHeart = document.getElementById("beadHeart");
heart.join("").split("").forEach((v,i)=>{
  const b=document.createElement("span");
  b.className="bead"+(v==="1"?" on":"");
  if([17,35,73].includes(i)) b.classList.add("glow");
  beadHeart.appendChild(b);
});

const cloud = document.getElementById("beadsCloud");
const beads = [
  [18,18,38,"#fff3a8"],[26,28,28,"#9af0d5"],[40,14,45,"#ffd0dd"],[55,32,32,"#ffffff"],
  [70,17,42,"#b4f0ff"],[80,39,26,"#e7d6ff"],[61,56,38,"#fff0a6"],[34,54,30,"#ffffff"],
  [17,65,43,"#bcecff"],[78,68,34,"#ffcadb"],[49,73,24,"#dfff68"]
];
beads.forEach(([x,y,size,color])=>{
  const b=document.createElement("span");b.className="cloud-bead";
  b.style.left=x+"%";b.style.top=y+"%";b.style.width=size+"px";b.style.height=size+"px";b.style.background=color;
  b.style.transform=`rotate(${(x-y)}deg)`;
  cloud.appendChild(b);
});

const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

window.addEventListener("mousemove",e=>{
  const card=document.querySelector(".hero-card");
  if(!card || window.innerWidth<900) return;
  const rx=(e.clientY/window.innerHeight-.5)*-4;
  const ry=(e.clientX/window.innerWidth-.5)*5;
  card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
});
