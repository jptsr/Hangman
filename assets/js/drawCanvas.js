const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext("2d");

// console.log("drawCanvas is playing");

let draw1 = () => {
    ctx.fillStyle = "1b1b1b";

    ctx.beginPath();
    ctx.moveTo(15,90);
    ctx.lineTo(55, 90);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(35, 90); //x, y
    ctx.lineTo(35, 90); //x, y
    ctx.lineTo(35, 25);
    ctx.lineTo(65, 25);
    ctx.lineTo(65, 35);
    ctx.stroke();
};

let draw2 = () => {
    draw1();

    ctx.fillStyle = "1b1b1b";

    ctx.beginPath();
    ctx.arc(65, 41, 6, 0, 2 * Math.PI); // x, y, raidus, starting angle in radian, ending angle in radian, (counter)clockwise (optional)
    ctx.stroke();
};

let draw3 = () => {
    draw1();
    draw2();

    ctx.fillStyle = "1b1b1b";

    ctx.beginPath();
    ctx.moveTo(65, 47);
    ctx.lineTo(65, 75);
    ctx.stroke();
};

let draw4 = () => {
    draw1();
    draw2();
    draw3();

    ctx.fillStyle = "1b1b1b";

    ctx.beginPath();
    ctx.moveTo(65, 55);
    ctx.lineTo(57, 63);
    ctx.stroke();
};

let draw5 = () => {
    draw1();
    draw2();
    draw3();
    draw4();

    ctx.fillStyle = "1b1b1b";

    ctx.beginPath();
    ctx.moveTo(65, 55);
    ctx.lineTo(73, 63);
    ctx.stroke();
};

let draw6 = () => {
    draw1();
    draw2();
    draw3();
    draw4();
    draw5();

    ctx.fillStyle = "1b1b1b";

    ctx.beginPath();
    ctx.moveTo(65, 75);
    ctx.lineTo(57, 80);
    ctx.stroke();
};

let draw7 = () => {
    draw1();
    draw2();
    draw3();
    draw4();
    draw5();
    draw6();
    
    ctx.fillStyle = "1b1b1b";

    ctx.beginPath();
    ctx.moveTo(65, 75);
    ctx.lineTo(73, 80);
    ctx.stroke();
};