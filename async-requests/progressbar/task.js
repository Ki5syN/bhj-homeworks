const progress = document.getElementById("progress");
const form = document.getElementById("form");


form.addEventListener("submit", (event) => {
	event.preventDefault()

	const formData = new FormData(form);
	const xhr = new XMLHttpRequest();

	xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")

	xhr.upload.onprogress = (event) => {
		if (event.lengthComputable) {
			let countdown = event.loaded / event.total
			console.log(countdown)
			progress.value = countdown

		}
	}

	xhr.onload = () => {
		if (xhr.status >= 200 && xhr.status <= 299) {
			console.log("Данные отпарвлен успешно")
		} else {
			console.log(`ошибка ${xhr.status} ${xhr.statusText}`);
		}
	}

	xhr.send(formData)


})