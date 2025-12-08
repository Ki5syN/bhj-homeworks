let counter = Number(document.getElementById("clicker__counter").textContent);
let speed = Number(document.getElementById("clicker__speed").textContent)
let data = new Date()
document.getElementById("cookie").onclick = () => {
	let afterData = new Date()
	speed = ((afterData - data) / 1000).toFixed(2);
	data = afterData;
	counter++;
	document.getElementById("clicker__counter").textContent = counter;
	document.getElementById("clicker__speed").textContent = speed;
	document.getElementById("cookie").width = 400;
	setTimeout(() => document.getElementById("cookie").width = 200, 200)

}