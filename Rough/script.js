let count = document.getElementById("count")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")


let id = null
function startTimer(){
    if(id){
        clearInterval(id)
    }
id = setInterval(() => {
    count.textContent = +count.textContent + 1
}, 500);
}

start.addEventListener("click",() => {
    startTimer()
})

stop.addEventListener("click", () => {
    clearInterval(id)
})
reset.addEventListener("click", () => {
    clearInterval(id)
      count.textContent = 0
})



let input =

fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log);

