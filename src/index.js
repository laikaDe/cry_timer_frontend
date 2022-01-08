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
    reviewForm.innerHTML += `<input type="text" 
    id="review-input"><input type="submit">`

    reviewForm.addEventListener("submit", submitReview)

    const reviewList = document.createElement('ul')

    li.append(p, reviewForm, reviewList)

    timerList.appendChild(li)

    timerForm.reset()
}

function submitReview(e){
    e.preventDefault()
    const reviewInput = e.target.children[0].value 
    const reviewList = e.target.nextElementSibling

    const li = document.createElement('li')

    li.innerText = reviewInput
    reviewList.appendChild(li)}