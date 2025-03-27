function checkCalculations(){
    const number = parseInt(document.getElementById("numberInput").value);
    let message = "";
    if (number % 4 === 0 && number % 6 === 0){
        message = `PopSnap`;
    }
    else if (number % 4 === 0){
        message = `Pop`;
    }
    else if (number % 6 === 0){
        message = `Snap`;
    }
    else{
        message = `${number}`;
    }
    document.getElementById("numberMessage").textContent = message
};