const OPT={
 o:[["ultah","Ulang tahun"],["anniv","Anniversary"],["wisuda","Wisuda"],["maaf","Minta maaf"],["sembuh","Cepat sembuh"],["nikah","Pernikahan"],["duka","Belasungkawa"],["hias","Hiasan rumah"]],
 r:[["pasangan","Pasangan"],["ibu","Ibu"],["teman","Teman"],["kolega","Kolega"],["diri","Diri sendiri"]],
 m:[["romantis","Romantis"],["ceria","Ceria"],["elegan","Elegan"],["tenang","Tenang"],["hangat","Hangat"]],
 col:[["merah","Merah"],["putih","Putih"],["pink","Pink"],["kuning","Kuning"],["ungu","Ungu"],["oranye","Oranye"]],
 b:[["1","Hemat"],["2","Menengah"],["3","Premium"]],
 k:[["1","Mudah"],["2","Sedang"],["3","Telaten"]]
};
const F=[
 {n:"Mawar merah",c:"#c4162f",o:["anniv","maaf","ultah"],r:["pasangan"],m:["romantis","elegan"],col:"merah",b:2,k:2,p:"Rp5.000–15.000",mean:"Cinta yang dalam dan perasaan yang tulus.",tip:"Potong miring tiap 2 hari, ganti air bersih setiap hari."},
 {n:"Mawar putih",c:"#f4f1ee",o:["nikah","duka","wisuda"],r:["pasangan","ibu","kolega"],m:["elegan","tenang"],col:"putih",b:2,k:2,p:"Rp5.000–15.000",mean:"Ketulusan, awal yang baru, dan penghormatan.",tip:"Jauhkan dari buah matang agar tidak cepat layu."},
 {n:"Melati",c:"#fffdf2",o:["nikah","hias","duka"],r:["ibu","diri"],m:["tenang","hangat"],col:"putih",b:1,k:1,p:"Rp2.000–6.000",mean:"Kesucian dan kesederhanaan, bunga nasional Indonesia.",tip:"Taruh di tempat teduh dan semprot air tipis."},
 {n:"Tulip",c:"#e8478b",o:["ultah","anniv","hias"],r:["pasangan","teman","diri"],m:["ceria","romantis"],col:"pink",b:3,k:2,p:"Rp15.000–30.000",mean:"Cinta sempurna dan kegembiraan.",tip:"Simpan di air dingin; batangnya terus tumbuh."},
 {n:"Lily",c:"#f7c6d9",o:["nikah","duka","sembuh"],r:["ibu","kolega"],m:["elegan","tenang"],col:"pink",b:3,k:2,p:"Rp15.000–35.000",mean:"Kemurnian dan ketenangan jiwa.",tip:"Buang benang sari agar serbuk tidak mengotori."},
 {n:"Anggrek bulan",c:"#d9a7e8",o:["hias","wisuda","ultah"],r:["ibu","kolega","diri"],m:["elegan","hangat"],col:"ungu",b:3,k:3,p:"Rp80.000–250.000",mean:"Keanggunan dan keindahan abadi.",tip:"Siram seminggu sekali, hindari sinar matahari langsung."},
 {n:"Bunga matahari",c:"#f5b700",o:["wisuda","ultah","sembuh"],r:["teman","kolega","diri"],m:["ceria","hangat"],col:"kuning",b:1,k:1,p:"Rp5.000–12.000",mean:"Kesetiaan, semangat, dan energi positif.",tip:"Beri air banyak; tahan hingga 7 hari."},
 {n:"Lavender",c:"#9a7bd4",o:["sembuh","hias","maaf"],r:["ibu","diri","teman"],m:["tenang","hangat"],col:"ungu",b:2,k:1,p:"Rp3.000–8.000",mean:"Ketenangan dan penyembuhan.",tip:"Bisa dikeringkan dan awet berbulan-bulan."},
 {n:"Peony",c:"#f3a0bd",o:["nikah","anniv","ultah"],r:["pasangan","ibu"],m:["romantis","elegan"],col:"pink",b:3,k:3,p:"Rp35.000–70.000",mean:"Kemakmuran, cinta, dan pernikahan bahagia.",tip:"Beli saat masih kuncup lalu mekarkan di suhu ruang."},
 {n:"Gerbera",c:"#ff7a3d",o:["ultah","wisuda","sembuh"],r:["teman","kolega"],m:["ceria","hangat"],col:"oranye",b:1,k:1,p:"Rp3.000–8.000",mean:"Keceriaan dan kemurnian hati.",tip:"Air cukup 5 cm saja agar batang tidak busuk."},
 {n:"Krisan",c:"#f2d230",o:["duka","hias","sembuh"],r:["ibu","kolega","diri"],m:["tenang","hangat"],col:"kuning",b:1,k:1,p:"Rp3.000–8.000",mean:"Panjang umur, simpati, dan kesetiaan.",tip:"Sangat awet, bisa bertahan 2 minggu."},
 {n:"Anyelir",c:"#d6405f",o:["ibu","ultah","maaf"].filter(x=>x!=="ibu").concat(["wisuda"]),r:["ibu","teman"],m:["hangat","ceria"],col:"merah",b:1,k:1,p:"Rp3.000–7.000",mean:"Kasih sayang dan rasa terima kasih.",tip:"Potong ujung batang di bawah buku ruas."},
 {n:"Daisy",c:"#fafafa",o:["maaf","sembuh","hias"],r:["teman","diri"],m:["ceria","tenang"],col:"putih",b:1,k:1,p:"Rp2.000–5.000",mean:"Kepolosan dan awal yang segar.",tip:"Taruh di tempat terang tapi tidak panas."},
 {n:"Dahlia",c:"#e0792a",o:["ultah","hias","anniv"],r:["pasangan","teman"],m:["hangat","elegan"],col:"oranye",b:2,k:2,p:"Rp8.000–20.000",mean:"Martabat dan komitmen yang bertahan.",tip:"Ganti air tiap hari dan buang daun yang terendam."}
];
const S={o:null,r:null,m:null,col:null,b:null,k:null};
const bouquet=[];let sel=null,msgIdx=0;
const $=s=>document.querySelector(s);

function flowerSVG(c,size=64){
  let p="";for(let i=0;i<8;i++)p+=`<ellipse cx="32" cy="15" rx="8" ry="14" transform="rotate(${i*45} 32 32)" fill="${c}" stroke="rgba(0,0,0,.18)" stroke-width="1"/>`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" aria-hidden="true">${p}<circle cx="32" cy="32" r="7" fill="#f2b632" stroke="rgba(0,0,0,.2)"/></svg>`;
}
$("#logo").innerHTML=flowerSVG("#e8478b",72);

// kelopak jatuh
const pe=$("#petals");for(let i=0;i<14;i++){const e=document.createElement("i");e.style.left=Math.random()*100+"%";e.style.animationDuration=(14+Math.random()*16)+"s";e.style.animationDelay=(-Math.random()*20)+"s";e.style.transform=`scale(${.7+Math.random()})`;pe.appendChild(e)}

// chip
document.querySelectorAll(".chips").forEach(box=>{
  const k=box.dataset.k;
  OPT[k].forEach(([v,l])=>{
    const b=document.createElement("button");b.className="chip";b.textContent=l;b.dataset.v=v;b.setAttribute("aria-pressed","false");
    b.onclick=()=>{S[k]=S[k]===v?null:v;sync();render()};box.appendChild(b)});
});
function sync(){document.querySelectorAll(".chips").forEach(box=>{const k=box.dataset.k;box.querySelectorAll(".chip").forEach(b=>b.setAttribute("aria-pressed",String(S[k]===b.dataset.v)))})}
$("#reset").onclick=()=>{Object.keys(S).forEach(k=>S[k]=null);sync();render()};

const label=(k,v)=>(OPT[k].find(x=>x[0]===String(v))||[])[1];

function score(f){
  let pts=0,max=0;const why=[];
  const add=(k,w,ok,text)=>{if(S[k]!==null){max+=w;if(ok){pts+=w;why.push(text)}}};
  add("o",30,f.o.includes(S.o),"cocok untuk "+(label("o",S.o)||"").toLowerCase());
  add("r",22,f.r.includes(S.r),"disukai "+(label("r",S.r)||"").toLowerCase());
  add("m",20,f.m.includes(S.m),"nuansa "+(label("m",S.m)||"").toLowerCase());
  add("col",14,f.col===S.col,"warna "+S.col);
  if(S.b!==null){max+=8;const d=f.b-Number(S.b);if(d<=0){pts+=8;why.push("sesuai anggaran")}else if(d===1)pts+=3}
  if(S.k!==null){max+=6;const d=f.k-Number(S.k);if(d<=0){pts+=6;why.push("perawatan "+(label("k",S.k)||"").toLowerCase())}else if(d===1)pts+=2}
  return {pct:max?Math.round(pts/max*100):null,why};
}

function render(){
  const res=F.map(f=>({f,...score(f)}));
  const active=Object.values(S).some(v=>v!==null);
  if(active)res.sort((a,b)=>b.pct-a.pct);
  const top=res[0];
  $("#insight").innerHTML=flowerSVG(top.f.c,40)+`<div>`+(active
    ?`<b>Analisis AI:</b> dari preferensimu, <b>${top.f.n}</b> paling cocok (${top.pct}%)${top.why.length?" karena "+top.why.join(", "):""}. ${top.f.mean}`
    :`<b>Mulai di sini:</b> pilih satu atau lebih preferensi di samping. Peringkat bunga langsung berubah mengikuti pilihanmu.`)+`</div>`;
  const list=$("#list");list.innerHTML="";
  res.forEach(({f,pct})=>{
    const b=document.createElement("button");b.className="fl"+(sel===f.n?" sel":"");
    b.innerHTML=(pct!==null?`<span class="score">${pct}%</span>`:"")+`<div class="top">${flowerSVG(f.c,72)}</div><h3>${f.n}</h3><small>${f.p}</small>`+(pct!==null?`<div class="bar"><span style="width:${pct}%"></span></div>`:"");
    b.onclick=()=>{sel=f.n;render();showDetail(res.find(r=>r.f.n===f.n));$("#detail").scrollIntoView({behavior:"smooth",block:"nearest"})};
    list.appendChild(b)});
  if(sel)showDetail(res.find(r=>r.f.n===sel));
}

function showDetail({f,pct,why}){
  const d=$("#detail");d.classList.add("on");
  const inB=bouquet.includes(f.n);
  d.innerHTML=flowerSVG(f.c,130)+`<div class="txt"><h2>${f.n}</h2>`+
   (pct!==null?`<div class="why">${why.map(w=>`<span>${w}</span>`).join("")}</div>`:"")+
   `<ul class="kv"><li><b>Makna:</b> ${f.mean}</li><li><b>Perawatan:</b> ${f.tip}</li><li><b>Harga:</b> ${f.p} per tangkai</li><li><b>Cocok untuk:</b> ${f.o.map(x=>label("o",x)).join(", ")}</li></ul>
   <div class="row"><button class="btn" id="addb">${inB?"Hapus dari buket":"Tambah ke buket"}</button></div></div>`;
  $("#addb").onclick=()=>{toggle(f.n)};
}

function toggle(n){
  const i=bouquet.indexOf(n);
  if(i>=0)bouquet.splice(i,1);else{if(bouquet.length>=5)return toast("Maksimal 5 jenis bunga per buket");bouquet.push(n)}
  renderBouquet();render();
}
function renderBouquet(){
  const w=$("#bqItems");
  if(!bouquet.length){w.innerHTML='<span class="empty">Belum ada bunga. Klik bunga di atas lalu pilih “Tambah ke buket”.</span>';$("#msg").classList.remove("on");return}
  w.innerHTML=bouquet.map(n=>{const f=F.find(x=>x.n===n);return `<span class="bq-item">${flowerSVG(f.c,20)}${n}<button aria-label="Hapus ${n}" data-n="${n}">×</button></span>`}).join("");
  w.querySelectorAll("button").forEach(b=>b.onclick=()=>toggle(b.dataset.n));
  if($("#msg").classList.contains("on"))makeMsg(false);
}

const T={
 ultah:["Selamat ulang tahun, {to}! Semoga hari-harimu selalu penuh tawa. Buket {f} ini sebagai tanda sayang dariku.","Di hari spesialmu, {f} ini kukirim untuk mendoakan kebahagiaan tanpa henti."],
 anniv:["Terima kasih sudah bersamaku, {to}. {f} ini mewakili cerita kita yang terus mekar.","Selamat anniversary! Seperti {f}, cintaku tumbuh makin indah tiap hari."],
 wisuda:["Selamat wisuda, {to}! Kerja kerasmu terbayar. {f} ini untuk merayakan langkah barumu.","Bangga sekali padamu. Semoga {f} ini mengiringi sukses di bab berikutnya."],
 maaf:["Maafkan aku, {to}. Lewat {f} ini aku ingin memperbaiki semuanya.","Aku sungguh menyesal. Semoga {f} ini membuka ruang untuk kita bicara baik-baik."],
 sembuh:["Cepat sembuh, {to}. Semoga {f} ini membawa semangat dan hari yang lebih cerah.","Istirahat yang cukup ya. {f} ini kukirim bersama doa agar kamu segera pulih."],
 nikah:["Selamat menempuh hidup baru! Semoga {f} ini menjadi awal rumah tangga yang penuh berkah.","Turut berbahagia atas pernikahanmu. Semoga cinta kalian mekar seperti {f}."],
 duka:["Turut berduka cita yang mendalam. Semoga {f} ini menjadi tanda doa dan dukungan untukmu, {to}.","Semoga keluarga diberi ketabahan. {f} ini kami kirim dengan penuh hormat."],
 hias:["Untuk mempercantik hari-harimu, {to}: {f} yang menyegarkan ruangan.","Sedikit warna untuk rumah. Semoga {f} ini membawa suasana tenang."]
};
function list(a){return a.length<2?a[0]:a.slice(0,-1).join(", ")+" dan "+a[a.length-1]}
function makeMsg(cycle=true){
  if(!bouquet.length)return toast("Tambahkan bunga ke buket dulu");
  const o=S.o||"ultah";const arr=T[o];if(cycle)msgIdx=(msgIdx+1)%arr.length;
  const to={pasangan:"sayang",ibu:"Ibu",teman:"sahabatku",kolega:"rekan kerjaku",diri:"diriku"}[S.r]||"kamu";
  const m=$("#msg");m.textContent=arr[msgIdx%arr.length].replace("{to}",to).replace("{f}",list(bouquet.map(n=>n.toLowerCase())));m.classList.add("on");
}
$("#mk").onclick=()=>makeMsg(true);
$("#cp").onclick=async()=>{const t=$("#msg").textContent;if(!t)return toast("Buat kartu ucapan dulu");try{await navigator.clipboard.writeText(t);toast("Ucapan disalin")}catch(e){toast("Salin manual: tekan lama teks ucapan")}};
$("#clr").onclick=()=>{bouquet.length=0;renderBouquet();render()};

let tt;function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>e.classList.remove("on"),2000)}

render();renderBouquet();
