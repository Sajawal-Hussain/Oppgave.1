
let GoldColor = "Gold";
let SilverColor = "Silver";
let BronzeColor = "Bronze";


function changeBackgroundColor(ColorClass) {
    document.body.classList.remove(GoldColor, SilverColor, BronzeColor);
    document.body.classList.toggle(ColorClass);
    console.log(`Changed background color to ${ColorClass}.`);
}


document.getElementById("ColorPicker1").addEventListener("click", function() {
    let ColorClass = prompt("Enter a color for background:");
    changeBackgroundColor(ColorClass);
});
document.getElementById("ColorPicker2").addEventListener("click", function() {
    let ColorClass = prompt("Enter a color for background:");
    changeBackgroundColor(ColorClass);
});


document.getElementById("Button1").addEventListener("click", function() {
    changeBackgroundColor(GoldColor);
});

document.getElementById("Button2").addEventListener("click", function() {
    changeBackgroundColor(SilverColor);
});

document.getElementById("Button3").addEventListener("click", function() {
    changeBackgroundColor(BronzeColor);
});

