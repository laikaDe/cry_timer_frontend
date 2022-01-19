const timerForm = document.getElementById("timer-form")
const timerInput = document.getElementById("timer-input")
const timerDescriptionInput = document.getElementById("timer-description-input")
const timerDateTimeInput = document.getElementById("timer-datetime-input")
const timerList = document.getElementById("timer-list")
const timerURL = `http://localhost:3000/timers`
const reviewURL = `http://localhost:3000/reviews`


timerForm.addEventListener("submit", Timer.submitTimer)

function renderReview(e){
    e.preventDefault()
    const reviewInput = e.target.children[0].value 
    const reviewList = e.target.nextElementSibling
    const timerId = e.target.parentElement.dataset.id

    const li = document.createElement('li')
    li.dataset.id = timerId
    li.innerText = reviewInput
    reviewList.appendChild(li)


    submitReview(reviewInput, timerId)

    e.target.reset()
    
}

function createReview(reviewInput, reviewList, timerId){
    const li = document.createElement('li')
    li.dataset.id = timerId
    li.innerText = reviewInput 

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "X"
    li.appendChild(deleteBtn)
    reviewList.appendChild(li)
}


function submitReview(review, timerId){
    fetch(reviewURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            comment: review,
            timer_id: timerId
        })
    })
}

Timer.fetchTimers()