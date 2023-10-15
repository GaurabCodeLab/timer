const timer = document.querySelector(".timer");
const btn = document.querySelector(".btn");
let minute = 0;
let second = 0;
let centiSecond = 0;

function increaseTimer(){
    centiSecond = centiSecond + 1;
    if(centiSecond>=99){
        centiSecond = 0;
        second = second + 1;
    }
    if(second>=59){
        second = 0;
        minute = minute + 1;
    }
    const modifiedMinute = minute.toString().padStart(2, "0");
    const modifiedSecond = second.toString().padStart(2, "0");
    const modifiedCentisecond = centiSecond.toString().padStart(2, "0");
    timer.textContent = `${modifiedMinute}:${modifiedSecond}:${modifiedCentisecond}`;
}

const id = setInterval(()=>{
    increaseTimer();
}, 10);

btn.addEventListener("click", ()=>{
    clearInterval(id);
})


