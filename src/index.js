const timerForm = document.getElementById("timer-form")

timerForm.addEventListener("submit", submitTimer)

function submitTimer(e){
    e.preventDefault() 
    console.log(e.target.children[0].value)
    const li = document.createElement('li')
    const p = document.createElement('p)')
}