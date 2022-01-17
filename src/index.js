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
    .then(timers => timers.forEach(renderTimer))
}

timerForm.addEventListener("submit", submitTimer)


function submitTimer(event){
    event.preventDefault() 
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
    .then(res => res.json())
    .then(renderTimer)
}

// render timer to dom
function renderTimer(timer){
    const li = document.createElement('li')
    li.dataset.id = timer.id

    const p1 = document.createElement('p')
    p1.innerText = timer.span

    const p2 = document.createElement('p')
    p2.innerText = timer.description

    const p3 = document.createElement('p')
    p3.innerText = timer.datetime


    const reviewForm = document.createElement('form')
    reviewForm.innerHTML += `<input type="text" 
    id="review-input"><input type="submit">`

    reviewForm.addEventListener("submit", renderReview)

    const reviewList = document.createElement('ul')

    li.append(p1, p2, p3, reviewForm, reviewList)

    timerList.appendChild(li)

    timerForm.reset()
}

function renderReview(e){
    e.preventDefault()
    console.log(e.target)
    const reviewInput = e.target.children[0].value 
    const reviewList = e.target.nextElementSibling

    const li = document.createElement('li')

    li.innerText = reviewInput
    reviewList.appendChild(li)

    // submitReview(reviewInput)

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