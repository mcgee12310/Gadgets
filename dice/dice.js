// Dice roller
function rollDice(){
    const numofDice = document.getElementById("dice_input").value;
    const dice_result = document.getElementById("dice_result");
    const dice_image = document.getElementById("dice_image");
    const values = [];
    const images = [];

    for(i = 1; i<=numofDice; i++){
        const value = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        console.log(value);
        values.push(value);
        images.push(`<img src="/images/${value}.png">`)
    }

    dice_result.textContent = `dice: ${values.join(', ')}`;
    dice_image.innerHTML = images.join("");
}