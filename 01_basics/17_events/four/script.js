const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

const startChangeColor = function(){
    if(!intervalId){
        intervalId = setInterval(function(){
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
    
};
document.querySelector("#start").addEventListener("click", startChangeColor);


const stopChangeColor = function(){
    clearInterval(intervalId);
    intervalId = null
    document.body.style.backgroundColor = "#212121";
};
document.querySelector("#stop").addEventListener("click", stopChangeColor);
