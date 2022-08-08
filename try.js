


function setNewImage(){
    document.getElementById("img1").src = "assets/sunafter-01-01.svg";
}

function setOldImage() {
    document.getElementById("img1").src = "assets/sun-01.svg";
}



///////////////////////////

window.onload = function () {
//pop up

setTimeout(showPopup, 4000);

function showPopup() {
    document.getElementById("instruction").style.visibility  = "hidden" ;
}

//play
var myMusic = document.getElementById("mymusic");
var icon = document.getElementById("icon");


icon.onclick = function() {
    if (myMusic.paused){
        myMusic.play();
        icon.src = "assets/pause.png";
    }else{
        myMusic.pause();
        icon.src = "assets/play.png";
    }
    
}

let more = document.getElementById("wave20");
let audioArr = document.getElementById("enter");


more.addEventListener("mouseenter", () => {
    audioArr.play();
})

//audio sun/mounatin   
    // var dark = document.getElementById("darkbackground");
    
let suninsky = document.getElementById("img1");
let sunaudio = document.getElementById("sun-audio");


suninsky.addEventListener("mouseenter", () => {
        sunaudio.play();
})


let mountainimg = document.getElementById("mountain-box");
let mountain = document.getElementById("mountain-audio");
console.log(mountain);

mountainimg.addEventListener("mouseenter", () => {
    mountain.play();
    if (mountain.play()){
        document.getElementById("mountain-birds").style.visibility = "visible";
    }
})

let waterbox = document.getElementById("water-box");
let water2 = document.getElementById("active-water2");
console.log(water2);

waterbox.addEventListener("mouseenter", () => {
water2.play();
})

//mooniconswitch
    // var moonicon = document.getElementById("moon");


    // moonicon.onclick = function () {
    //     if (moonicon.src === "0530/moonicon.png") {
    //         moonicon.src = "0530/suniconmode.png";
    //     } else {
    //         moonicon.src = "0530/moonicon.png";
    //     }

    // }
//volume2

    let volume_slider = document.querySelector(".volume");
    volume_slider.onchange = function volume_change(e) {
        var volume = e.target.value / 100;
        myMusic.volume = parseFloat(volume);
        if (myMusic.volume === 0 ) {
            icon.src = "assets/play.png"
        } else {
            icon.src = "assets/pause.png"
        }
    }

 //nightmode switch  
 
 const toggleswitch = document.querySelector('.theme-switch input[type= "checkbox"]');
const currentTheme= localStorage.getItem('theme');

    if (currentTheme){
        document.documentElement.setAttribute('data-theme', currentTheme)
        if (currentTheme === 'dark'){
            toggleswitch.checked = true;
        }
    }

    function switchTheme(e){
        if (e.target.checked){
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            document.getElementById("background1").src = "assets/newcompletebackgrounddark-01-02-02.png";
            // document.getElementById("img1").src = "";
            document.getElementById("img1").style.visibility = "hidden";
            document.getElementById("mooninsky").style.visibility = "visible";
            document.getElementById("activewater").src = "";
            document.getElementById("moon").src = "assets/suniconmode.png";
            document.getElementById("twinklingimg").style.visibility = "visible";
            document.getElementById("darktwinklingimg").style.visibility = "visible";


        }
        else{
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            document.getElementById("background1").src = "assets/completebackground2-01.png";
            document.getElementById("activewater").src = "assets/activewater-01-01.svg";
            document.getElementById("moon").src = "assets/moonicon.png"
            //sun in sky
            document.getElementById("img1").style.visibility = "visible";
            document.getElementById("mooninsky").style.visibility = "hidden";
            document.getElementById("twinklingimg").style.visibility = "hidden";
            document.getElementById("darktwinklingimg").style.visibility = "hidden";

        }
        
    }

    toggleswitch.addEventListener('change',switchTheme, false);

    //text

    var texticon= document.getElementById("fa-bars");
    const bottompage = document.getElementById("bottom1");
    

    texticon.onclick = function () {
        bottompage.scrollIntoView({ behavior: "smooth"});
    }


    //birdmouse

    const frame = document.querySelector('.frame');
    const pointer = document.querySelector('.circle');
    frame.addEventListener('mousemove', (e) => {
        pointer.style.top = `${e.offsetY}px`;
        pointer.style.left = `${e.offsetX}px`;
    });
    frame.addEventListener('mouseleave', (e) => {
        // pointer.style.visibility = "hidden";
        pointer.style.top = "0%";
        pointer.style.left = "0%";
    })


    //canvas
    var canvas = document.querySelector("#myCanvas");
    var ctx = canvas.getContext("2d");

    base_image = new Image();
    base_image.src = 'assets/fish.png';
    ctx.drawImage(base_image, 0, 0);

    // context.beginPath();
    // context.moveTo(200, 100);
    // context.lineTo(170, 150);
    // context.lineTo(230, 150);
    // context.closePath();
    window.addEventListener("keydown", moveSomething, false);

    var deltaX = 0;
    var deltaY = 0;
    function moveSomething(e) {
        switch (e.keyCode) {
            case 37:
                deltaX -= 2;
                break;
            case 38:
                deltaY -= 2;
                break;
            case 39:
                deltaX += 2;
                break;
            case 40:
                deltaY += 2;
                break;
        }
        drawTriangle();
    }  

    function drawTriangle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // context.beginPath();
        // context.moveTo(200 + deltaX, 100 + deltaY);
        // context.lineTo(170 + deltaX, 150 + deltaY);
        // context.lineTo(230 + deltaX, 150 + deltaY);
        // context.closePath();

        // context.lineWidth = 10;
        // context.strokeStyle = "rgba(102, 102, 102, 1)";
        // context.stroke();

        // context.fillStyle = "rgba(255, 204, 0, 1)";
        // context.fill();


        }

        // var myImg = new Image();
        // var myImgPos = {
        //     x: 250,
        //     y: 125,
        //     width: 50,
        //     height: 25
        // }

        // // function draw() {
        //     myImg.onload = function () {
        //         ctx.drawImage(myImg, myImgPos.x, myImgPos.y, myImgPos.width, myImgPos.height);
        //     }

        //     myImg.src = 'assets/fish.png';
        // // }

        // // function moveMyImg() {
        //     ctx.clearRect(myImgPos.x, myImgPos.y, myImgPos.x + myImgPos.width, myImgPos.y +
        //         myImgPos.height);
        //     myImgPos.x -= 5;
        // // }

        // // setInterval(draw, 50);
        // // setInterval(moveMyImg, 50);}
        
    
        e.preventDefault();
        drawTriangle(); 
    

    

}