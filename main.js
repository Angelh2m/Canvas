

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// C == context and get all the methods from canvas
let c = canvas.getContext('2d');

// Rectanlges
c.fillStyle = "rgba(255,0,0, 0.5"
c.fillRect(100, 100, 70, 50);
c.fillRect(20, 20, 40, 30);
c.fillRect(300, 40, 90, 10);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.strokeStyle = "blue";
c.stroke();

// Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.stroke();


for (let i = 0; i < 1000; i++) {

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.stroke();

}