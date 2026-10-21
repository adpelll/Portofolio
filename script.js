var modes={
  moon:"Mode: Moon · Rapi, tenang, terstruktur",
  merc:"Mode: Merc · Cepat, nekat, tetap beres"
};
function set(m){
  document.documentElement.setAttribute("data-mode",m);
  document.getElementById("bm").className=m==="moon"?"on":"";
  document.getElementById("bd").className=m==="merc"?"on":"";
  document.getElementById("tagline").textContent=modes[m];
}
document.getElementById("bm").onclick=function(){set("moon")};
document.getElementById("bd").onclick=function(){set("merc")};

var galleries={
  skripsi:[
    ["images/skripsi-1-login.png","Halaman Login"],
    ["images/skripsi-2-dashboard.png","Dashboard"],
    ["images/skripsi-3-alternatif.png","Data Alternatif (Siswa)"],
    ["images/skripsi-4-kriteria.png","Data Kriteria"],
    ["images/skripsi-5-penilaian.png","Data Penilaian"],
    ["images/skripsi-6-hasil.png","Hasil Perhitungan"],
    ["images/skripsi-7-laporan.png","Laporan"]
  ],
  laundry:[
    ["images/laundry-1-login.png","Halaman Login"],
    ["images/laundry-2-menu.png","Menu Utama"],
    ["images/laundry-3-member.png","Daftar Member"],
    ["images/laundry-4-transaksi.png","Input Transaksi"],
    ["images/laundry-5-data-transaksi.png","Data Transaksi"]
  ],
  bunga:[
    ["images/bunga-1-beranda.png","Beranda & Filter Preferensi"],
    ["images/bunga-2-pilihan.png","Pilihan Bunga & Buket Saya"]
  ]
};
document.querySelectorAll(".slider").forEach(function(el){
  var list=galleries[el.dataset.gallery],i=0;
  var img=el.querySelector("img"),cap=el.querySelector(".cap");
  function show(n){
    i=(n+list.length)%list.length;
    img.src=list[i][0];img.alt=list[i][1];
    cap.textContent=list[i][1]+"  ·  "+(i+1)+"/"+list.length;
  }
  el.querySelector(".prev").onclick=function(){show(i-1)};
  el.querySelector(".next").onclick=function(){show(i+1)};
  show(0);
});
