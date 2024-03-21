const smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];


// global Variables

// r1 = 3;
let passwordGenerator = () => {
    let password = "";
    let charIndex = 0;
    let numberIndex = 0;
    let aphabetNum = 0;
    for (let i = 0; i < 12; i++) {
        let r1 = Math.floor(Math.random() * 4) + 1;
        if (charIndex == 3) {  // if the symbol or charcters have reached the maximum value it will stop  adding symbols to the password
            r1 = Math.floor(Math.random() * 3) + 1;
        }
        else if (charIndex == 3 && numberIndex == 3) {  // if the symbol or charcters have reached the maximum value it will stop  adding symbols to the password
            r1 = Math.floor(Math.random() * 2) + 1;
        }
        else if (aphabetNum == 7) {
            r1 = 3;
        }
        if (r1 == 1) {
            // console.log(smallLetters.length)
            let r2 = Math.floor(Math.random() * smallLetters.length);
            // console.log(smallLetters[25])
            password += smallLetters[r2];
            aphabetNum++;
        }
        else if (r1 == 2) {
            let r2 = Math.floor(Math.random() * capitalLetters.length);
            password += capitalLetters[r2];
            aphabetNum++;
        }
        else if (r1 == 3) {
            let r2 = Math.floor(Math.random() * numbers.length);
            password += numbers[r2];
            numberIndex++;
        }
        else {
            let r2 = Math.floor(Math.random() * specialCharacters.length);
            password += specialCharacters[r2];
            charIndex++;
        }
    }
    return password;
}


let passBtn = document.getElementById( "passGenerator" );
let disp = document.getElementById("disp");
let password = "";
passBtn.addEventListener("click", ()=>{
    password = passwordGenerator();
    console.log(password);
    disp.innerHTML = password;
});


document.getElementById("copy").addEventListener("click", function() {
    var textToCopy = document.getElementById("disp").textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
        if (password != "") {
            alert(`Text copied: ${password}`);
        }
    }, function(err) {
        console.error('Failed to copy: ', err);
    });
});