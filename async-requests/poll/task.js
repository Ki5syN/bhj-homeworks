const answersBox = document.getElementById("poll__answers");
const titleBox = document.getElementById("poll__title");
let vote = NaN

fetch("https://students.netoservices.ru/nestjs-backend/poll")
	.then(response => response.json())
	.then(data => {
		vote = data.id;
		titleBox.textContent = data.data.title;
		data.data.answers.forEach((element, index) => {
			answersBox.insertAdjacentHTML("beforeend", `
            <button class="poll__answer" data-index= ${index}>
              ${element}
            </button>
            `)
		});
	})

answersBox.addEventListener("click", event => {

	if (event.target.closest(".poll__answer")) {
		alert("Спасибо, ваш голос засчитан!")

		let answer = event.target.closest(".poll__answer").dataset.index;

		fetch("https://students.netoservices.ru/nestjs-backend/poll", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: `vote=${vote}&answer=${answer}`
			})

			.then(response => response.json())
			.then(data => {
				answersBox.innerHTML = "";
				const dataResult = data.stat;
				dataResult.forEach(el => {
					answersBox.insertAdjacentHTML("beforeend",
						`<div>
                        ${el.answer}  ${el.votes}
                     </div>`
					)
				})
			})
	}


})




/**let xhr = new XMLHttpRequest()
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll")
xhr.responseType = 'json';
xhr.send()

xhr.onload = () => {
    const dataResponse  = xhr.response;
    const titleResponse = dataResponse.data.title    
    const answersResponse  = dataResponse.data.answers
    vote  = dataResponse.id

    titleBox.textContent = titleResponse;
    
    answersResponse.forEach((element, index) => {
        answersBox.insertAdjacentHTML("beforeend", `
            <button class="poll__answer" data-index= ${index}>
              ${element}
            </button>
            ` )        
    });

}

answersBox.addEventListener("click", event => {
    
    if (event.target.closest(".poll__answer")) {
        alert("Спасибо, ваш голос засчитан!")

        let answer = event.target.closest(".poll__answer").dataset.index;
             
        let xhr = new XMLHttpRequest()
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll")
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.responseType = 'json';
        

        xhr.onload = () =>  {
            answersBox.innerHTML = "";
            const dataResult  = xhr.response.stat;
            dataResult.forEach( el => {
                answersBox.insertAdjacentHTML("beforeend", 
                    `<div>
                        ${el.answer}  ${el.votes}
                     </div>`
                )
            })
        }
        xhr.send(`vote=${vote}&answer=${answer}`)
    }
})
*/