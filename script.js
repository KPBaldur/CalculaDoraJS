const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(btn.id === "="){
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id == "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id
        }
    })    
});



document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        display.value += key;
    } else if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        display.value = "";
    }
});