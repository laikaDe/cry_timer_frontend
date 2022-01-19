class Timer {


    static allTimers = []


    constructor(timer){
        this.id = timer.id
        this.span = timer.attributes.span
        this.description = timer.attributes.description
        this.datetime = timer.attributes.datetime
        this.reviews = timer.attributes.reviews
        Timer.allTimers.push(this)
    }


    static renderTimers(){
        for(let timer of this.allTimers){
            timer.renderTimer(timer)
        }
    }
    
    static fetchTimers(){
        fetch(timerURL)
        .then(res => res.json())
        .then(timers => {
            for(let timer of timers){
                let newList = new Timer(timer.data)
            }
            this.renderTimers()
        })
    }

    renderTimer(){
        const li = document.createElement('li')
        li.dataset.id = this.id

        const p1 = document.createElement('p')
        p1.innerText = this.span

        const p2 = document.createElement('p')
        p2.innerText = this.description

        const p3 = document.createElement('p')
        p3.innerText = this.datetime


        const reviewForm = document.createElement('form')
        reviewForm.innerHTML += `<input type="text" 
        id="review-input"><input type="submit">`

        reviewForm.addEventListener("submit", renderReview)

        const reviewList = document.createElement('ul')
        this.reviews.forEach(review => {
            createReview(review.comment, reviewList, this.id)
        })

        li.append(p1, p2, p3, reviewForm, reviewList)

        timerList.appendChild(li)

        timerForm.reset()
    }

    static submitTimer(e){
        e.preventDefault() 
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
    .then(data => {
        let newTimer = new Timer(data.data)
        newTimer.renderTimer()
    })
}
}
