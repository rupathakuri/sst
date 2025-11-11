
        console.log("A");

        const start = Date.now();
        const end = start + 5000;

        for(let i = 0; true ; i++){ 
            if(Date.now() >= end){
                break;
            }  
        }

        console.log("B");

        console.log("C");
