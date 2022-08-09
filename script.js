let intervalID;
let hours = 0
let seconds = 0;
let minutes = 0;
let milliseconds = 0;
let isRunning = true;

const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const resetButton = document.querySelector("#reset-button");
const display = document.querySelector(".display")

const stopWatch = {
    start : () =>{
        isRunning = true
        if(isRunning){
           intervalID = setInterval(() => {
               milliseconds += 10;
               console.log(milliseconds)
               if(milliseconds === 1000 && hours != 60){
                seconds++
                milliseconds = 0
               }else if(seconds === 60){
                minutes++;
                seconds = 0;
               }else if(minutes === 60){
                hours++;
                minutes = 0;
               }
               updateDisplay()
           }, 10);
        }
   },
   
   stop : () =>{
    clearInterval(intervalID);
    isRunning = false
   },
   
   reset : () => {
     intervalID;
     hours = 0
     seconds = 0;
     minutes = 0;
     milliseconds = 0;
     isRunning = true;
     updateDisplay()
   },
   
}

const updateDisplay = () =>{
    display.innerText = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`
   }

startButton.addEventListener("click", stopWatch.start);
stopButton.addEventListener("click", stopWatch.stop);
resetButton.addEventListener("click",stopWatch.reset)


