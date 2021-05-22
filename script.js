const jokeEl= document.getElementById("joke");
const buttonEl= document.getElementById("button");

buttonEl.addEventListener('click',generate)
generate()

async function generate() {

    const config= {
        headers: {
            'Accept': 'application/json'
        }
    }
    
    const response= await fetch('https://icanhazdadjoke.com/',config)

    const data= await response.json();
    jokeEl.innerHTML= data.joke;
}

