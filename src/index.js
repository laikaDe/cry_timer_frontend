const timerForm = document.getElementById("timer-form")
const timerInput = document.getElementById("timer-input")
const timerDescriptionInput = document.getElementById("timer-description-input")
const timerDateTimeInput = document.getElementById("timer-datetime-input")
const timerList = document.getElementById("timer-list")
const timerURL = `http://localhost:3000/timers`
const reviewURL = `http://localhost:3000/reviews`


timerForm.addEventListener("submit", Timer.submitTimer)

Timer.fetchTimers()