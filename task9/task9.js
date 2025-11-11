// Create a simple HTML page with heavy DOM (100 divs) and large image. Use console.time() to measure render speed.
console.time("measure speed");

const container = document.getElementById("container");

const image = document.createElement("img");
image.src = "./large_image.jpeg";
document.body.appendChild(image);

for(let i=0; i<100; i++){

    const divs = document.createElement("div");
    divs.textContent = `Div ${i+1}`;
    container.appendChild(divs);
    divs.classList.add("divs");

}

console.timeEnd("measure speed");