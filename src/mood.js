class Mood {


    static allMoods = []


    constructor(mood){
        this.id = mood.id
        this.span = mood.attributes.span
        this.description = mood.attributes.description
        this.datetime = mood.attributes.datetime
        this.reviews = mood.attributes.reviews
        Mood.allMoods.push(this)
    }


    static renderMoods(){
        for(let mood of this.allMoods){
            mood.renderMood(mood)
        }
    }
    
    static fetchMoods(){
        fetch(moodURL)
        .then(res => res.json())
        .then(moods => {
            for(let mood of moods){
                let newList = new Mood(mood.data)
            }
            this.renderMoods()
        })
    }

    renderMood(){
        const li = document.createElement('li')
        li.dataset.id = this.id

        const p1 = document.createElement('p')
        p2.innerText = this.description

        const p2 = document.createElement('p')
        p3.innerText = this.datetime

        // const deleteBtn = document.createElement('button')
        // deleteBtn.innerText = "delete"
        // deleteBtn.addEventListener("click", this.deleteTimer)


        const reviewForm = document.createElement('form')
        reviewForm.innerHTML += `<input type="text" 
        id="review-input"><input type="submit">`
        reviewForm.addEventListener("submit", Review.createReview)

        const reviewList = document.createElement('ul')
        this.reviews.forEach(review => {
            let reviewObj = new Review(review)
            console.log(reviewObj)
            reviewObj.renderReview(reviewList)
        })

        li.append(p1, p2, reviewForm, reviewList)

        moodList.appendChild(li)

        moodForm.reset()
    }

    static submitMood(e){
        e.preventDefault() 
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                description: moodDescriptionInput.value,
                datetime: moodDateTimeInput.value
            })   
    }
    fetch(moodURL, configObj)
    .then(res => res.json())
    .then(data => {
        let newMood = new Mood(data.data)
        newMood.renderMood()
    })
}
    
    // deleteMood(){
    //     const MoodId = this.target.parentElement.dataset.id
        
    //     fetch(`${moodURL}/${moodId}`, {
    //         method: "DELETE"
    //     })
        
    //     this.parentElement.remove()
    // }

}
