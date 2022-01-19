class Timer {


    constructor(timer){
    }


    static renderTimers(){
        for(let timer of timers){
            renderTimer(timer)
        }
    }
    
    static fetchTimers(){
        fetch(timerURL)
        .then(res => res.json())
        .then(timers => {
            for(let timer of timers){
                let newList = new Timer(timer.data)
            }
        })
    }

    renderTimer(timer){
        console.log(timer)
        const li = document.createElement('li')
        li.dataset.id = timer.id

        const p1 = document.createElement('p')
        p1.innerText = timer.attributes.span

        const p2 = document.createElement('p')
        p2.innerText = timer.attributes.description

        const p3 = document.createElement('p')
        p3.innerText = timer.attributes.datetime


        const reviewForm = document.createElement('form')
        reviewForm.innerHTML += `<input type="text" 
        id="review-input"><input type="submit">`

        reviewForm.addEventListener("submit", renderReview)

        const reviewList = document.createElement('ul')
        timer.attributes.reviews.forEach(review => {
            const reviewLi = document.createElement('li')
            reviewLi.innerText = review.comment
            timerList.appendChild(reviewLi)
        })

        li.append(p1, p2, p3, reviewForm, reviewList)

        timerList.appendChild(li)

        timerForm.reset()
    }

}
