




function DoItFunction(): void
{

    let selected: HTMLSelectElement = <HTMLSelectElement> document.getElementById("actioninput");
    let inputstring: HTMLInputElement = <HTMLInputElement> document.getElementById("textinput");



    //lad os tage value fra vores dropdown vælger
    let outputString: string = selected.value;
    console.log(outputString);


    
let result: HTMLDivElement = <HTMLDivElement> document.getElementById("result");

let tempoutput: string;
let temp2: string;

    switch (selected.value) {
        case "uppercase":
            
            tempoutput = inputstring.value;
            result.innerHTML = tempoutput.toUpperCase();
            console.log(tempoutput)   
            
            break;

        case "lowercase":
            tempoutput = inputstring.value;
            result.innerHTML = tempoutput.toLowerCase();
            console.log(tempoutput)    
            break;    
    
        case "yeet":

                console.log("yeet")   
                result.textContent = "yeet";
            break;
        
            
        default:
                console.log("default :(")   
            break;
    }
}


