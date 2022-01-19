const timerForm = document.getElementById("timer-form")
const timerInput = document.getElementById("timer-input")
const timerDescriptionInput = document.getElementById("timer-description-input")
const timerDateTimeInput = document.getElementById("timer-datetime-input")
const timerList = document.getElementById("timer-list")
const timerURL = `http://localhost:3000/timers`
const reviewURL = `http://localhost:3000/reviews`

// function fetchTimers() {
//     fetch(timerURL)
//     .then(res => res.json())
//     .then(timers => timers.forEach(data => renderTimer(data.data)))
// }

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
    .then(data => renderTimer(data.data))
}

// render timer to dom
// function renderTimer(timer){
//     console.log(timer)
//     const li = document.createElement('li')
//     li.dataset.id = timer.id

//     const p1 = document.createElement('p')
//     p1.innerText = timer.attributes.span

//     const p2 = document.createElement('p')
//     p2.innerText = timer.attributes.description

//     const p3 = document.createElement('p')
//     p3.innerText = timer.attributes.datetime


//     const reviewForm = document.createElement('form')
//     reviewForm.innerHTML += `<input type="text" 
//     id="review-input"><input type="submit">`

//     reviewForm.addEventListener("submit", renderReview)

//     const reviewList = document.createElement('ul')
//     timer.attributes.reviews.forEach(review => {
//         const reviewLi = document.createElement('li')
//         reviewLi.innerText = review.comment
//         timerList.appendChild(reviewLi)
//     })

//     li.append(p1, p2, p3, reviewForm, reviewList)

//     timerList.appendChild(li)

//     timerForm.reset()
// }

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