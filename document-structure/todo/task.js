const inputField = document.getElementById("task__input")
const targetList = document.getElementById("tasks__list")


document.addEventListener("click", (event) => {
	event.preventDefault();
	if (event.target.closest("#tasks__add") && inputField.value.trim()) {
		const targetBox = document.createElement("div");
		targetBox.className = "task";

		const target = document.createElement("div");
		target.className = "task__title";
		target.textContent = inputField.value;

		const removeTarget = document.createElement("a");
		removeTarget.className = "task__remove";
		removeTarget.innerHTML = "&times";

		targetList.appendChild(targetBox)
		targetBox.appendChild(target)
		targetBox.appendChild(removeTarget)

		let savedBox = JSON.parse(localStorage.getItem("tasks")) || [];
		savedBox.push(target.textContent)
		localStorage.setItem("tasks", JSON.stringify(savedBox))

	}

	if (event.target.classList.contains("task__remove")) {
		const removeElement = event.target.previousElementSibling.textContent
		let savedTargets = JSON.parse(localStorage.getItem("tasks"));
		let currentTargets = savedTargets.filter(el => el !== removeElement)
		localStorage.setItem("tasks", JSON.stringify(currentTargets))
		event.target.parentElement.remove();

	}


})