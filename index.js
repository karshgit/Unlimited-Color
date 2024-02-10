let body = document.querySelector("body");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let colorCreater

let colorGen = ()=>{
   let HexValue = "0123456789ABCDEF";
   let color ="#";
   for(let i = 0; i < 6; i++){
     color += HexValue[Math.floor(Math.random() * 16)];
    }
    return color;
    
}

let intervalid
let startChangingColor = ()=>{
    function colorchangeing (){
        body.style.background = colorGen();
    }
    intervalid = setInterval(colorchangeing,1000);
}



let stopChangingColor = () =>{
    clearInterval(intervalid);
}
start.addEventListener("click",startChangingColor);

stop.addEventListener("click",stopChangingColor)






