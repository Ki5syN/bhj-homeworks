let item = document.getElementById("items")

function bilderItem(code, value) {
	item.insertAdjacentHTML("afterbegin", `
        <div class="item">
            <div class="item__code">
                 ${code}
                </div>
                <div class="item__value">
                  ${value}
                </div>
                <div class="item__currency">
                   руб. 
                </div>
          </div>`)

}

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses")
xhr.send()
xhr.onload = () => {
	if (xhr.status !== 200) {
		console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`)

	}

	document.getElementById("loader").classList.remove("loader_active")

	const dataResponse = JSON.parse(xhr.responseText)
	const dataValute = dataResponse.response.Valute

	for (let key in dataValute) {
		let valute = dataValute[key]
		let code = valute.CharCode
		let value = valute.Value

		bilderItem(code, value)


	}


}