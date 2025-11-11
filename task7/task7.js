// Create an async function fetching from a public API (e.g., https://jsonplaceholder.typicode.com/posts/1
// ) and log progress (fetch start, awaiting, done).

async function fetchData(){
    try{
        console.log("Fetch Start");

        console.log("Awaiting...");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        
        if(!response.ok){
            throw new Error("Cannot fetch data");
        }

        const data = await response.json();
        console.log(data);

        console.log("Done");

    }catch(error){
        console.log("Error: " + error);
    }
}
fetchData();