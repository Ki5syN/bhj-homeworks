document.addEventListener("click", (event) => {
	event.preventDefault();

	const target = event.target.closest(".font-size, .color")
	const control = document.querySelectorAll(".font-size")
	const colorBlock = document.querySelectorAll(".color")
	const book = document.querySelector(".book__content")
	control.forEach((e) => {
		e.classList.toggle("font-size_active", e === target)
	})
	colorBlock.forEach((e) => {
		e.classList.toggle("color_active", e === target)

	})

	function removeByPrefix(element, prefix, newClass) {
		element.classList.forEach((e) => {
			if (e.startsWith(prefix)) {
				element.classList.remove(e)
			}
			if (newClass) {
				element.classList.add(newClass)
			}
		})
	}


	if (!target.dataset.size) {
		removeByPrefix(book, "font-size")
	}

	if (target.dataset.size) {
		removeByPrefix(book, "font-size", `font-size_${event.target.dataset.size}`)
	}

	if (target.dataset.textColor) {
		removeByPrefix(book, "text_color", `text_color_${event.target.dataset.textColor}`)
	}

	if (target.dataset.bgColor) {
		removeByPrefix(book, "bg_color", `bg_color_${event.target.dataset.bgColor}`)
	}

})