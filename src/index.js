//Selectors

const moodForm = document.getElementById("mood-form")
const moodInput = document.getElementById("mood-input")
const moodDescriptionInput = document.getElementById("mood-description-input")
const moodDateTimeInput = document.getElementById("mood-datetime-input")
const moodList = document.getElementById("mood-list")
const moodURL = `http://localhost:3000/moods`
const reviewURL = `http://localhost:3000/reviews`

//EventListeners
moodForm.addEventListener("submit", Mood.submitMood)


//Functions
Mood.fetchMoods()