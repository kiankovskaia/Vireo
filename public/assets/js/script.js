const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");
console.log(img);

let index = 0;

let interval = setInterval(run, 2000);

function run() {
  index++;

  changeImage();
}

function changeImage() {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }
  imgs.style.transform = `translateY(${-index * 500}px)`;
}
