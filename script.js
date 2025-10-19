const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const result = document.querySelector('.result');
const container = document.querySelector('.container');
const slideImage = document.getElementById('slideImage');
const bgMusic = document.getElementById('bgMusic');
const loveLetter = document.querySelector('.love-letter');
const loveMessage = document.getElementById('loveMessage');

// Slideshow photos (replace with your own)
const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg',
  'images/photo4.jpg',
  'images/photo5.jpg',
  'images/photo6.jpg',
  'images/photo7.jpg',
  'images/photo8.jpg',
];

let currentIndex = 0;

// Typing love message
const message = `
Anh biết hiện giờ mình đang tạm xa nhau, nhưng anh vẫn luôn nghĩ về em 
Anh biết là anh ích kỷ, nhưng anh vẫn luôn chỉ muốn mình quay về với nhau thôi 
Anh biết anh chưa trưởng thành,còn bấp bênh nhiều thứ 
Anh biết anh đã từng nhiều lần phạm sai lầm làm em buồn 
Tuy đã trễ, nhưng sau một thời gian anh cũng đã suy ngẫm và nhận ra được lỗi lầm của anh
Anh thương em nhiều lắm, anh muốn được ở bên em thôi
Tuy chưa nhiều, nhưng hi vọng em nhận tấm lòng của anh ngày Phụ Nữ Việt Nam
Anh vẫn hằng ngày cố gắng, hi vọng rằng một ngày em có thể chấp nhận sự nỗ lực của anh
Và mình cùng xây dựng lại mọi thứ cùng nhau
Chúc mừng ngày Phụ Nữ Việt Nam nha Em Bé Thỏ 💖
`;

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
  container.style.display = 'none';
  result.classList.remove('hidden');

  // Play music
  bgMusic.play();

  // Start slideshow
  const slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideImage.src = images[currentIndex];
  }, 2500);

  // Floating hearts
  setInterval(createHeart, 500);

  // Show love letter after slideshow
  setTimeout(() => {
    clearInterval(slideInterval);
    loveLetter.classList.remove('hidden');
    typeText(message, loveMessage);
  }, 20000); // 10 seconds delay
});

// Floating hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// Typing animation
function typeText(text, element, speed = 60) {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent = text.slice(0, i);
    i++;
    if (i > text.length) clearInterval(interval);
  }, speed);
}
