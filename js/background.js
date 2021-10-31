const images = ["0.jpeg.JPG", "1.jpeg.JPG", "2.jpeg.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
