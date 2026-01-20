const inputField = document.getElementById("task__input")
const targetList = document.getElementById("tasks__list")

let savedBox = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTask() {
	savedBox.forEach(element => {

		const targetBox = document.createElement("div");
		targetBox.className = "task";

		const target = document.createElement("div");
		target.className = "task__title";
		target.textContent = element;

		const removeTarget = document.createElement("a");
		removeTarget.className = "task__remove";
		removeTarget.innerHTML = "&times";

		targetList.appendChild(targetBox)
		targetBox.appendChild(target)
		targetBox.appendChild(removeTarget)

	});
}

renderTask()

document.addEventListener("click", (event) => {

	if (event.target.closest("#tasks__add") && inputField.value.trim()) {


		savedBox = JSON.parse(localStorage.getItem("tasks")) || [];
		savedBox.push(inputField.value)
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