// Temperature conversion
const textbox = document.getElementById("a24_number");
const ctof = document.getElementById("ctof");
const ftoc = document.getElementById("ftoc");
result = document.getElementById("a24_result");
let temp;
function convertTemperature(){
    if(ctof.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } 
    else if(ftoc.checked){
        temp = Number(textbox.value);
        temp = 5/9 * (temp-32);
        result.textContent = temp.toFixed(1) + "°C";
    } 
    else result.textContent = "Select a unit";
}