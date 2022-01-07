const timerForm = document.getElementById("timer-form")
const timerInput = document.getElementById("timer-input")
const timerList = document.getElementById("timer-list")

timerForm.addEventListener("submit", submitTimer)

function submitTimer(e){
    e.preventDefault() 
    console.log(e.target.children[0].value)
    const li = document.createElement('li')

    const p = document.createElement('p')
    p.innerText = timerInput.value

    const reviewForm = document.createElement('form')
    reviewForm.innerHTML += `<input type="text"><input
    type="submit">`

    li.append(p, reviewForm)

    timerList.appendChild(li)

    timerForm.reset()
}