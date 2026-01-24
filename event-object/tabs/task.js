let navigation = document.querySelector(".tab__navigation")
let contents = document.querySelectorAll(".tab__content")

document.addEventListener("click", (event) => {
	if(!event.target.classList.contains("tab")){
		return;
	}
	navigation.querySelectorAll(".tab").forEach((e, index) => {
		if (e === event.target) {
			e.classList.add("tab_active")
			contents[index].classList.add("tab__content_active")
		} else {
			e.classList.remove("tab_active")
			contents[index].classList.remove("tab__content_active")
		}

	})


})