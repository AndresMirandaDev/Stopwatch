let counter = 0;
let intervalID;

const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const resetButton = document.querySelector("#reset-button");

const start = () =>{
    intervalID = setInterval(() => {
        counter++
    }, 1000);
};