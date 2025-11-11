// Chain two Promises and compare their timing with setTimeout.

setTimeout(()=>{
    console.log("setTimeout");
},0)

const promise = new Promise(resolve=>{
    resolve("Promise1");
});

promise
.then(message=>{console.log(message); return "Promise2"})
.then(message=> console.log(message));