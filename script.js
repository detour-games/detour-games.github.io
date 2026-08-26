const translations = {
  zh: {
    nav_game:"游戏", nav_features:"特色", nav_journal:"开发日志", nav_journal_footer:"开发日志",
    hero_title_main:"拼豆！", hero_title_sub:"A relaxing 3D fuse-bead game.",
    hero_text:"挑选喜欢的图案，一颗一颗放下拼豆，完成、熨烫并收藏属于自己的作品。",
    hero_cta_main:"查看游戏", hero_cta_secondary:"查看开发日志",
    poster_bottom_left:"正在开发",
    badge_relax:"轻松", badge_create:"创作", badge_collect:"收藏",
    game_kicker:"CURRENT GAME", game_title:"轻松治愈的<br/>3D 拼豆游戏",
    panel_line_1a:"挑选图案", panel_line_2a:"放下拼豆", panel_line_3a:"完成熨烫",
    game_info_title:"拼豆！",
    game_desc:"选择游戏准备好的图案，也可以上传自己喜欢的图片，将它转换成可以实际制作的拼豆图纸。",
    game_desc_2:"宠物、角色、像素画、照片，或者任何你想拼出来的东西，都可以成为新的作品。",
    meta_status:"状态", meta_status_val:"开发中", meta_platform:"平台", meta_genre:"类型", meta_genre_val:"休闲 / 创作 / 治愈",
    steam_open:"打开 Steam 商店页", steam_title:"在 Steam 上查看<br/>《拼豆！》", steam_fallback:"如果 Steam 小组件没有正常加载，也可以直接打开商店页面。",
    features_kicker:"FEATURES", features_title:"舒服地摆，<br/>慢慢地完成。",
    f1_title:"真正立体的制作过程", f1_body:"完整 3D 场景中制作拼豆，看着一颗颗立体小豆子慢慢组成完整图案。",
    f2_title:"自由上传图片", f2_body:"把自己喜欢的图片转换成拼豆图纸，做宠物、角色、照片或像素画。",
    f3_title:"完成后熨烫与展示", f3_body:"作品完成后进入熨烫环节，再把它挂起来收藏，慢慢填满你的展示空间。",
    f4_title:"轻松安静的节奏", f4_body:"不追求紧张压力，只专注于舒服的操作、清晰的反馈和完成作品的满足感。",
    journal_kicker:"DEV JOURNAL", journal_title:"开发日志",
    j1_title:"DETOUR 官网上线", j1_body:"先把《拼豆！》的内容整理到一个公开页面里，后续会继续更新。",
    j2_title:"《拼豆！》持续开发中", j2_body:"核心制作流程、作品收藏和更多内容会在这里持续记录。",
    closing_title:"拼豆！", closing_text:"一款轻松治愈的 3D 拼豆游戏。", back_top:"回到顶部"
  },
  en: {
    nav_game:"Game", nav_features:"Features", nav_journal:"Devlog", nav_journal_footer:"Devlog",
    hero_title_main:"PIN DOU!", hero_title_sub:"A relaxing 3D fuse-bead game.",
    hero_text:"Pick a pattern, place each bead one by one, iron the finished piece, and build a collection of your own.",
    hero_cta_main:"View game", hero_cta_secondary:"View devlog",
    poster_bottom_left:"IN DEVELOPMENT",
    badge_relax:"RELAX", badge_create:"CREATE", badge_collect:"COLLECT",
    game_kicker:"CURRENT GAME", game_title:"A relaxing<br/>3D fuse-bead game",
    panel_line_1a:"Choose pattern", panel_line_2a:"Place beads", panel_line_3a:"Finish and iron",
    game_info_title:"PIN DOU!",
    game_desc:"Use in-game patterns or upload an image you like and convert it into a fuse-bead design you can actually make.",
    game_desc_2:"Pets, characters, pixel art, photos, or anything else you want to build can become your next piece.",
    meta_status:"STATUS", meta_status_val:"IN DEVELOPMENT", meta_platform:"PLATFORM", meta_genre:"GENRE", meta_genre_val:"COZY / CREATIVE / RELAXING",
    steam_open:"Open Steam store page", steam_title:"View PIN DOU!<br/>on Steam", steam_fallback:"If the Steam widget does not load, you can open the store page directly.",
    features_kicker:"FEATURES", features_title:"Settle in,<br/>place each bead.",
    f1_title:"A truly tactile 3D process", f1_body:"Create your piece in a full 3D space and watch each tiny bead slowly build the final design.",
    f2_title:"Upload your own images", f2_body:"Turn your favorite pictures into fuse-bead patterns: pets, characters, photos, or pixel art.",
    f3_title:"Iron and display your work", f3_body:"After finishing, move into the ironing step and hang the result in your own display space.",
    f4_title:"A calm, gentle rhythm", f4_body:"The game focuses on comfortable interaction, clear feedback, and the simple satisfaction of finishing a piece.",
    journal_kicker:"DEV JOURNAL", journal_title:"Dev Journal",
    j1_title:"The DETOUR website is live", j1_body:"A public home for PIN DOU!, with more updates to come.",
    j2_title:"PIN DOU! is still in development", j2_body:"Core crafting flow, collections, and more progress will continue to be recorded here.",
    closing_title:"PIN DOU!", closing_text:"A relaxing 3D fuse-bead game.", back_top:"Back to top"
  }
};

let lang = localStorage.getItem("detour-lang-v2") || "zh";
const langButton = document.getElementById("langButton");

function applyLang(){
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  langButton.textContent = lang === "zh" ? "EN / 中" : "中 / EN";
  localStorage.setItem("detour-lang-v2", lang);
}
langButton.addEventListener("click",()=>{lang = lang === "zh" ? "en" : "zh";applyLang();});
applyLang();

// Hero bead heart
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
  if([31,32,56,57,58].includes(i)) b.classList.add("alt");
  beadHeart.appendChild(b);
});

// Decorative floating beads
const visualBeads = document.getElementById("visualBeads");
const beadData = [
  [14,16,40,"#fff1b0"],[23,28,28,"#c3f2df"],[36,19,38,"#ffc8d8"],[44,35,28,"#ffffff"],
  [58,16,46,"#cdefff"],[71,30,28,"#e6dbff"],[80,18,34,"#c2f0e2"],[68,56,42,"#ffe2eb"],
  [54,63,32,"#fff4ca"],[32,58,24,"#ffffff"],[18,71,42,"#d8f4ff"],[79,71,30,"#b8f0de"]
];
beadData.forEach(([x,y,size,color],idx)=>{
  const b=document.createElement("span");
  b.className="v-bead";
  b.style.left=x+"%";
  b.style.top=y+"%";
  b.style.width=size+"px";
  b.style.height=size+"px";
  b.style.background=color;
  b.style.animation=`bob ${4.8 + idx*0.25}s ease-in-out ${idx*0.15}s infinite`;
  visualBeads.appendChild(b);
});

// Add dynamic keyframes for bead bobbing
const styleTag = document.createElement("style");
styleTag.textContent = `
@keyframes bob { 50% { transform: translateY(-12px) rotate(6deg); } }
`;
document.head.appendChild(styleTag);

// Reveal on scroll
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("visible"); });
},{ threshold:.12 });
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

// Tilt cards
function bindTilt(card){
  card.addEventListener("mousemove",e=>{
    if(window.innerWidth < 900) return;
    const r=card.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width;
    const py=(e.clientY-r.top)/r.height;
    const ry=(px-.5)*8;
    const rx=(.5-py)*8;
    card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  });
  card.addEventListener("mouseleave",()=>{ card.style.transform=""; });
}
document.querySelectorAll(".tilt-card").forEach(bindTilt);

// Magnetic buttons
document.querySelectorAll(".magnetic").forEach(btn=>{
  btn.addEventListener("mousemove",e=>{
    if(window.innerWidth < 900) return;
    const r=btn.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2;
    const y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*0.08}px,${y*0.08}px)`;
  });
  btn.addEventListener("mouseleave",()=> btn.style.transform="");
});

// Cursor trail particles
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

window.addEventListener("mousemove",e=>{
  const dx=e.clientX-lastX;
  const dy=e.clientY-lastY;
  lastX=e.clientX; lastY=e.clientY;
  spawn(e.clientX, e.clientY, dx, dy);
});

window.addEventListener("touchmove",e=>{
  const t=e.touches[0];
  if(!t) return;
  const dx=t.clientX-lastX;
  const dy=t.clientY-lastY;
  lastX=t.clientX; lastY=t.clientY;
  spawn(t.clientX, t.clientY, dx, dy);
},{passive:true});

function draw(){
  ctx.clearRect(0,0,innerWidth,innerHeight);
  for(let i=particles.length-1;i>=0;i--){
    const p=particles[i];
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
