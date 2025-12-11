// --- Animasyonlu semboller ---
const symbols = ["❤", "💖", "💘", "💕", "⭐", "🌸"];
const mainText = document.getElementById("mainText");
mainText.classList.add("show");

function createSymbol() {
  const symbol = document.createElement("div");
  symbol.classList.add("symbol");
  symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  symbol.style.left = Math.random() * 100 + "vw";
  symbol.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(symbol);
  setTimeout(() => symbol.remove(), 8000);
}

let symbolInterval = setInterval(createSymbol, 400);

// --- Slideshow metinleri ---
const texts = [
  "Seni çok seviyorum",
  "Sen benim her şeyimsin",
  "İyi ki varsın",
  "Hep benimle ol",
  "Sürekli beni hatırla",
  "Ve seni ne kadar sevdiğimi unutma diye",
  "Bir anı için bu siteyi sana özel yaptım",
  "Önce bizim hikayemizle başlicaz, arkana yaslan",
  "Eğer hazırsan hikayemiz başlasın sevgilim",
];

let delay = 3000;
const displayTime = 5000;
const fadeTime = 1400;

texts.forEach((text) => {
  setTimeout(() => {
    mainText.classList.remove("show");
    setTimeout(() => {
      mainText.textContent = text;
      mainText.classList.add("show");
    }, fadeTime);
  }, delay);
  delay += displayTime;
});

// Son yazının kaybolması ve butonun görünmesi
setTimeout(() => {
  mainText.classList.remove("show");
  document.getElementById("startBtn").style.display = "block";
}, delay + fadeTime);

// --- Slideshow ---
const slides = [
  {
    type: "image",
    src: "gun.png",
    text: "Birlikte olduğumuz gün sayısı",
  },
  {
    type: "image",
    src: "pics/duvar.jpg",
    text: "Sana yaptığım ilk duvar kağıdı",
  },
  { type: "image", src: "pics/cizim.gif", text: "Muzelere layik cizimimiz" },
  {
    type: "image",
    src: "pics/ilkfoto.jpg",
    text: "Sana uzun uzun baktığım ilk fotoğraf",
  },
  {
    type: "video",
    src: "pics/cuzdan.mp4",
    text: "İlk cüzdanına beni koyduğun an",
  },
  { type: "video", src: "pics/not.mp4", text: "Bana yaptığın ilk not" },
  { type: "image", src: "pics/hediye.jpg", text: "Bana ilk aldigin hediye" },
  {
    type: "image",
    src: "pics/duvar2.jpg",
    text: "Beni yaptigin bir duvar kagidi",
  },
  {
    type: "video",
    src: "pics/tiktok.mp4",
    text: "Bana yaptigin tiktok(cok tatli)",
  },
  { type: "image", src: "pics/velet.jpg", text: "Veletligimizin birlesimi" },
];

let index = 0;
const img = document.getElementById("media");
const video = document.getElementById("video");
const text = document.getElementById("text");

function showSlide() {
  if (index >= slides.length) {
    // Son slide sonrası tüm medya ve yazıyı gizle
    img.style.display = "none";
    video.style.display = "none";
    text.style.display = "none";
    video.pause();

    // Mektubu göster
    showLetter();
    return;
  }

  const slide = slides[index];
  text.style.display = "block";
  text.textContent = slide.text;

  img.style.display = "none";
  video.style.display = "none";
  video.pause();

  if (slide.type === "image") {
    img.src = slide.src;
    img.style.display = "block";
    img.onload = () => {
      setTimeout(() => {
        index++;
        showSlide();
      }, 5000);
    };
  } else {
    video.src = slide.src;
    video.style.display = "block";
    video.onloadeddata = () => video.play();
    video.onended = () => {
      index++;
      showSlide();
    };
  }
}

function startSlideshow() {
  clearInterval(symbolInterval); // Emoji animasyonunu durdur
  document.getElementById("startBtn").style.display = "none";
  showSlide();
}

document.getElementById("startBtn").addEventListener("click", startSlideshow);

// --- Mektup ---
function showLetter() {
  const letterContainer = document.getElementById("letterContainer");
  const envelope = document.getElementById("envelope");
  const paper = document.getElementById("paper");

  letterContainer.style.display = "flex"; // başta gizli

  let opened = false;

  envelope.addEventListener("click", () => {
    if (!opened) {
      envelope.classList.add("open"); // kapak açılır
      setTimeout(() => {
        paper.style.display = "block"; // kağıt çıkar
      }, 500);
      opened = true;
    } else {
      paper.textContent = ".........helelllelelele  Seni çok seviyorum bebegim";
    }
  });
}





