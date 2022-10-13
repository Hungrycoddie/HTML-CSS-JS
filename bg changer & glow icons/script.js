



const button = document.querySelector('button');
const bge = document.querySelector('html');

button.addEventListener('click',() => {
    let col = "#";
    col+=Math.random().toString(16).slice(2,8);
    bge.style.backgroundColor = col;
})
