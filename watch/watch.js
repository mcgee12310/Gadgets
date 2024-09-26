// Digital clock
function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    let minutes = now.getMinutes().toString().padStart(2,0);
    let seconds = now.getSeconds().toString().padStart(2,0);
    let timeString = `${hours}:${minutes}:${seconds} ${meridiem}`
    document.getElementById("clock").textContent=timeString;
}
updateClock();
setInterval(updateClock, 1000);

// Stop watch
display = document.getElementById("displayStopwatch");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
function startStopwatch(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime; 
        timer = setInterval(updateStopwatch, 10);
        isRunning = true;
    }
}
function stopStopwatch(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function resetStopwatch(){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function updateStopwatch(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); 
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); 
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    
    hours = String(hours). padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds). padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}