function DoItFunction() {
    var selected = document.getElementById("actioninput");
    var inputstring = document.getElementById("textinput");
    //lad os tage value fra vores dropdown vælger
    var outputString = selected.value;
    console.log(outputString);
    var result = document.getElementById("result");
    var tempoutput;
    var temp2;
    switch (selected.value) {
        case "uppercase":
            tempoutput = inputstring.value;
            result.innerHTML = tempoutput.toUpperCase();
            console.log(tempoutput);
            break;
        case "lowercase":
            tempoutput = inputstring.value;
            result.innerHTML = tempoutput.toLowerCase();
            console.log(tempoutput);
            break;
        case "yeet":
            console.log("yeet");
            result.textContent = "yeet";
            break;
        default:
            console.log("default :(");
            break;
    }
}
