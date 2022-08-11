const toVideo = document.getElementById("vid");
const btn = document.getElementById("btns");
const preLoad= document.getElementById("pre");


btn.addEventListener("click",function(){
    
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        toVideo.pause();
    }else{
        btn.classList.remove("slide");
        toVideo.play();
    }
})

window.addEventListener("load", function(){
    preLoad.classList.add("hide-preloader")
})
