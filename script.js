
const year = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const dailyQuote = document.getElementById("dailyQuote");
const newQuote = document.getElementById("newQuote");

// Tahun otomatis
year.textContent = new Date().getFullYear();

// Menu navigasi HP
menuToggle.addEventListener("click", () => {
  const opened = navMenu.classList.toggle("open");

  menuToggle.textContent = opened ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(opened));
});

// Tutup menu setelah memilih halaman
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Animasi ketika elemen muncul di layar
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Koleksi kata-kata motivasi
const quotes = [
  "Kamu berhak beristirahat tanpa merasa tertinggal.",
  "Pelan-pelan saja, bunga pun tidak mekar dalam semalam.",
  "Jangan menyerah hanya karena hari ini terasa sulit.",
  "Kamu sedang bertumbuh, bukan tertinggal.",
  "Tidak semua hal harus sempurna untuk menjadi indah.",
  "Percayalah, usaha kecil hari ini bisa menjadi cerita indah esok hari.",
  "Jadilah lembut kepada dirimu sendiri. Kamu juga sedang belajar.",
  "Masa depan yang indah dimulai dari keberanian untuk mencoba.",
  "Kamu tidak harus menjadi orang lain untuk menjadi berharga.",
  "Tetaplah bersinar, bahkan ketika tidak semua orang melihat cahayamu.",
  "Satu langkah kecil tetap membawamu lebih dekat pada impian.",
  "Semoga kamu selalu menemukan alasan kecil untuk tersenyum."
];

let previousIndex = -1;

newQuote.addEventListener("click", () => {
  let index;

  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (quotes.length > 1 && index === previousIndex);

  previousIndex = index;

  dailyQuote.classList.add("changing");

  window.setTimeout(() => {
    dailyQuote.textContent = quotes[index];
    dailyQuote.classList.remove("changing");
  }, 180);
});
