var boxes = document.querySelectorAll('.box');
var rgb = document.querySelector(".rgb");
var restart = document.querySelector('#restart');
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var stat = document.querySelector(".status");

var boxcount = 6;
stat.textContent = "Let's Play";

var colors=generateRandomColor(6);
var pickedColor=colors[Math.floor(Math.random()*6)];
rgb.textContent=pickedColor;

hardBtn.addEventListener("click", function(){
    boxcount=6;
    colors=generateRandomColor(boxcount);
    pickedColor=colors[Math.floor(Math.random()*boxcount)];
    rgb.textContent=pickedColor;
    stat.textContent = "Let's Play";
    changeBubbles();
    
    var htmlStyles = window.getComputedStyle(document.querySelector("html"));
    var colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
    document.documentElement.style.setProperty("--colNum",6);
    document.querySelector(".mainbox").style.justifyContent="space-around";

    for(var i=0;i<6;i++){
        if(colors[i]){
            boxes[i].style.background=colors[i];
            boxes[i].style.display="block";
        }
    }
});

easyBtn.addEventListener("click", function(){
    boxcount=3;
    colors=generateRandomColor(boxcount);
    pickedColor=colors[Math.floor(Math.random()*boxcount)];
    rgb.textContent=pickedColor;
    stat.textContent = "Let's Play";
    changeBubbles();

    var htmlStyles = window.getComputedStyle(document.querySelector("html"));
    var colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
    document.documentElement.style.setProperty("--colNum",3);
    document.querySelector(".mainbox").style.justifyContent="space-around";


    for(var i=0;i<6;i++){
        if(colors[i]){
            boxes[i].style.background=colors[i];
        }
        else{
            boxes[i].style.display="none";
        }
    }
});

restart.addEventListener("click", function(){
    colors=generateRandomColor(boxcount);
    pickedColor=colors[Math.floor(Math.random()*boxcount)];
    rgb.textContent=pickedColor;
    stat.textContent = "Let's Play";
    changeBubbles();

    for(var i=0;i<boxcount;i++){
        if(colors[i]){
            boxes[i].style.background=colors[i];
        }
    }
});

function win(){
    for(var i=0;i<boxcount;i++){
        boxes[i].style.background=pickedColor;
    }
    stat.textContent="You! Win";

    var img = document.querySelectorAll(".bubble img");
    img[0].src="./img/award.png";
    img[1].src="./img/fire1.png";
    img[2].src="./img/medal.png";
    img[3].src="./img/trophy.png";
    img[4].src="./img/fire.png";
    img[5].src="./img/award.png";
    img[6].src="./img/trophy.png";
    img[7].src="./img/medal.png";
    img[8].src="./img/award.png";
    img[9].src="./img/fire1.png";
    img[10].src="./img/medal.png";
    img[11].src="./img/trophy.png";
}

function changeBubbles(){
    var img = document.querySelectorAll(".bubble img");
    for(var i=0;i<12;i++){
        img[i].src="./img/bubble.png";
    }
}

function lose(a){
    a.style.background="#0b0b3a";
    stat.textContent="Better Luck! Next Time";
}

for(var i=0;i<boxcount;i++){
    boxes[i].style.background=colors[i];
    boxes[i].addEventListener("click", function(){
        var selectedColor=this.style.background;
        console.log(pickedColor);
        console.log(selectedColor);
        if(selectedColor===pickedColor){
            win();
        }
        else{
            lose(this);
        }
    });
}


function generateRandomColor(count){
    var arr=[]
    for(var i=0;i<count;i++){
        arr.push(randomColor());
    }
    return arr;
}


function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

