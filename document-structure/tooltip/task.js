let tooltip = 0;

document.addEventListener("click", (event) => {
	event.preventDefault()
	if (event.target.classList.contains("has-tooltip")) {

		if (tooltip) {
			tooltip.remove()
			tooltip = 0;
		}

		tooltip = document.createElement("div");
		tooltip.textContent = event.target.title;
		tooltip.className = "tooltip  tooltip_active";

		document.body.appendChild(tooltip)

		let elementWhere = event.target.getBoundingClientRect();
		const position = event.target.dataset.position;

		let top = 0;
		let left = 0;

		switch (position) {
			case "top":
				top = elementWhere.top - tooltip.offsetHight;
				left = elementWhere.left;
				break;
			case "left":
				top = elementWhere.top;
				left = elementWhere.left - tooltip.offsetWidth;
				break
			case "right":
				top = elementWhere.top;
				left = elementWhere.right;
				break
			default:
				top = elementWhere.bottom;
				left = elementWhere.left;
		}


		tooltip.style.top = top + "px"
		tooltip.style.left = left + "px"

	}
})