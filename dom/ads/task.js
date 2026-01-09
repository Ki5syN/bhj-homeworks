let rotatorElement = null;

document.querySelectorAll(".rotator").forEach((rotatorElement) => {

	function currentRotator(rotatorElement) {
		const rotator = rotatorElement.querySelectorAll(".rotator__case")
		let currentIndex = 0;

		function rotatorCase() {

			rotator.forEach((el) => {
				el.classList.remove("rotator__case_active");
			})

			const workRotator = rotator[currentIndex]
			const interval = parseInt(workRotator.dataset.speed)
			const color = workRotator.dataset.color
			workRotator.classList.add("rotator__case_active");
			workRotator.style.color = color
			currentIndex = (currentIndex + 1) % rotator.length;


			setTimeout(rotatorCase, interval)
		}
		rotatorCase()

	}

	currentRotator(rotatorElement)

})

