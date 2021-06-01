const jokeEl= document.getElementById("joke");
const buttonEl= document.getElementById("button");

buttonEl.addEventListener('click',generate)
generate()

function generate() {

    const config= {
        headers: {
            Accept: 'application/json'
        }
    }
    
 fetch('https://icanhazdadjoke.com/',config)
 .then((res)=> res.json())
 .then((data)=> {
     jokeEl.innerHTML= data.joke
 })
}

