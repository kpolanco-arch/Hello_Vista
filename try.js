function setNewImage(){
    document.getElementById("img1").src = "0530/sunafter-01.svg";
}

function setOldImage() {
    document.getElementById("img1").src = "sun-01.svg";
}

// $(document).ready(function(){
//     $(".btn .fa-play-circle-o").on('click', function(){
//         $(this).hide();
//         $(".fa-pause-circle-o").fadeIn();
//         $("#mymusic")[0].play();
//     })
// })

// $(document).ready(function () {
//     $(".btn .fa-pause-circle-o").on('click', function () {
//         $(this).hide();
//         $(".fa-play-circle-o").fadeIn();
//         $("#mymusic")[0].play();
//     })
// })

window.onload = function () {

//play
var myMusic = document.getElementById("mymusic");
var icon = document.getElementById("icon");


icon.onclick = function() {
    if (myMusic.paused){
        myMusic.play();
        icon.src = "pause.png";
    }else{
        myMusic.pause();
        icon.src = "play.png";
    }
    
}

let more = document.getElementById("wave20");
let audioArr = document.getElementById("enter");
console.log(audioArr);

more.addEventListener("mouseenter", () => {
    audioArr.play();
})

    
    var dark = document.getElementById("darkbackground");
    var moonicon = document.getElementById("moon");


    moonicon.onclick = function () {}

//volume
    let recent_volume = document.querySelector('#volume');
    let volume_show = document.querySelector('#volume_show');
    let slider = document.querySelector('#duration_slider');
    // change volume
    
    function volume_change() {
        volume_show.innerHTML = recent_volume.value;
        track.volume = recent_volume.value / 100;
    }

    // change slider position 
    function change_duration() {
        slider_position = track.duration * (slider.value / 100);
        track.currentTime = slider_position;
    }

}