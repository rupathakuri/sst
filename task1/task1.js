
        console.log("A");

        const start = Date.now();
        const end = start + 5000;

        for(let i = 0; true ; i++){ //infinite for loop
            if(Date.now() >= end){ //waits for 5 seconds
                break;
            }  
        }

        console.log("B");

        console.log("C");