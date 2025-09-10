// for generating random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = "#";

    for(let i = 0; i<6; i++){
        color = color + hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalId;
const sRandomColor = function(){
   if(!intervalId){
    intervalId = setInterval(changeBG,1000);
   }
    function changeBG(){
        document.body.style.backgroundColor = randomColor();
    }
};

document.querySelector("#start").addEventListener("click",sRandomColor);

const stpRandomColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};
document.querySelector("#stop").addEventListener("click",stpRandomColor);

// console.log(randomColor());
