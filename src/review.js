class Review {

    constructor(review) {
        this.timer_id = review.timer_id
        this.comment = review.comment
        this.id = review.id
    }

    static createReview(e){
        e.preventDefault()
        const reviewInput = e.target.children[0].value 
        const reviewList = e.target.nextElementSibling
        const timerId = e.target.parentElement.dataset.id
    
        Review.submitReview(reviewInput, reviewList, timerId)
    
        e.target.reset()
        
    }
    
    renderReview(reviewList){
        const li = document.createElement('li')
        li.dataset.id = this.timer_id
        li.innerText = this.comment
    
        // const deleteBtn = document.createElement('button')
        // deleteBtn.innerText = "X"
        // li.appendChild(deleteBtn)
        reviewList.appendChild(li)
    }
    
    
    static submitReview(review, reviewList, timerId){
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
        }).then(res => res.json())
        .then(review => {
            let newReview = new Review(review)
            newReview.renderReview(reviewList)
        })
    }
}

