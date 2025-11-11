// Create a small interactive web page where a button click logs numbers 1–5. Compare blocking vs non-blocking approaches.

const display = document.getElementById("numbers");

// function logNumbers(){
//     setTimeout(()=>{ //Non Blocking Approach
//         for(let i=1; i<=5; i++){
//             display.textContent += i + " ";
//             console.log(i);
//         }
//     },4000);
// }

function logNumbers() {
    const start = Date.now();
    const end = start + 4000;

    for (let i = 0; true; i++) { //blocking approach
        if (Date.now() >= end) {
            break;
        }
    }

    for (let i = 1; i <= 5; i++) {
        display.textContent += i + " ";
    }


}