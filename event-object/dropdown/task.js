const onList = (listElement) => {
	listElement.classList.add("dropdown__list_active")
}

const closeList = (listElement) => {
	listElement.classList.remove("dropdown__list_active")
}

document.addEventListener("click", (event) => {
	let findGroup = event.target.closest(".dropdown")
	let findValua = findGroup.querySelector(".dropdown__value")
	let findItem = event.target.closest(".dropdown__item")

	if (event.target.classList.contains("dropdown__link")) {
		event.preventDefault()
	}

	if (findItem) {
		closeList(findGroup.querySelector(".dropdown__list"))
		findValua.textContent = findItem.querySelector(".dropdown__link").textContent;

	}

	if (event.target.classList.contains("dropdown__value")) {
		onList(findGroup.querySelector(".dropdown__list"))
	}

})