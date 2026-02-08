document.addEventListener("DOMContentLoaded", () => {
	let popup = document.getElementById("subscribe-modal")

	if (!document.cookie.includes("popupShow=")) {
		popup.classList.add("modal_active")
	}

	popup.addEventListener("click", event => {
		if (event.target.classList.contains("modal__close_times")) {
			popup.classList.remove("modal_active")
			document.cookie = "popupShow=true;"
			console.log(document.cookie)
		}
	})
})