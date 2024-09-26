// CALCULATOR PROGRAM
let displaycalculator = document.getElementById("displaycalculator");
function appendToDisplay(input){
    displaycalculator.value += input;
}
function clearDisplay(){
    displaycalculator.value = "";
}
function calculate(){
    try{
        displaycalculator.value = eval(displaycalculator.value);
    }
    catch(error) {
        displaycalculator.value = "Error";
    }
}