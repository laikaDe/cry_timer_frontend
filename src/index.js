const timerForm = document.getElementById("timer-form")
const timerInput = document.getElementById("timer-input")
const timerDescriptionInput = document.getElementById("timer-description-input")
const timerDateTimeInput = document.getElementById("timer-datetime-input")
const timerList = document.getElementById("timer-list")
const timerURL = `http://localhost:3000/timers`
const reviewURL = `http://localhost:3000/reviews`

function fetchTimers() {
    fetch(timerURL)
    .then(res => res.json())
    .then(posts => posts.forEach(timer => renderTimer(timer.description, timer.datetime)))

}

timerForm.addEventListener("submit", submitTimer)
timerForm.addEventListener("submit", renderTimer)


function submitTimer(e){
    e.preventDefault() 
    console.log(e.target.children[0].value)
    const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            span: timerInput.value,
            description: timerDescriptionInput.value,
            datetime: timerDateTimeInput.value
        })   
    }
    fetch(timerURL, configObj)
  
    renderTimer(timerInput.value)
}

// render timer to dom
function renderTimer(timer){
 
    const li = document.createElement('li')
    li.dataset

    const p = document.createElement('p')
    p.innerText = timer

    const reviewForm = document.createElement('form')
    reviewForm.innerHTML += `<input type="text" 
    id="review-input"><input type="submit">`

    reviewForm.addEventListener("submit", renderReview)

    const reviewList = document.createElement('ul')

    li.append(p, reviewForm, reviewList)

    timerList.appendChild(li)

    timerForm.reset()
}

function renderReview(e){
    e.preventDefault()

    const reviewInput = e.target.children[0].value 
    const reviewList = e.target.nextElementSibling

    const li = document.createElement('li')

    li.innerText = reviewInput
    reviewList.appendChild(li)

    submitReview(reviewInput)

    e.target.reset()
    
}

function submitReview(review){
    fetch(reviewURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            comment: review.comment
        })
    })
}

fetchTimers()