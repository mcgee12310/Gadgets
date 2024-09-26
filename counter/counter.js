// COUNTER PROGRAM
const decrease = document.getElementById("decrease"); 
const reset = document.getElementById("reset"); 
const increase = document.getElementById("increase"); 
const countLabel = document.getElementById("a7"); 
let count = 0;
increase.onclick= function(){
    count++;
    countLabel.textContent = count;
}
decrease.onclick= function(){
    count--;
    countLabel.textContent = count;
}
reset.onclick= function(){
    count = 0;
    countLabel.textContent = count;
}