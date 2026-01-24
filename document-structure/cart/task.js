const basketBox = document.querySelector(".cart")
const basket = basketBox.querySelector(".cart__products")

let savedBox = JSON.parse(localStorage.getItem("basket")) || [];

function renderBasket() {
	basket.innerHTML = ""

	savedBox.forEach(element => {

		const productBox = document.createElement("div");
		productBox.className = "cart__product";
		productBox.dataset.id = element.id;

		const imageBox = document.createElement("img");
		imageBox.classList.add("cart__product-image");
		imageBox.src = element.img;

		const productCountBox = document.createElement("div");
		productCountBox.textContent = element.count
		productCountBox.className = "cart__product-count"

		basket.appendChild(productBox);
		productBox.appendChild(imageBox);
		productBox.appendChild(productCountBox);
	});

	toggleBasket()
}

renderBasket()


function toggleBasket() {
	if (basket.children.length === 0) {
		basketBox.classList.add("cart_hidden")
	} else {
		basketBox.classList.remove("cart_hidden")
	}
}

function flying(product, productBox, imageProd) {
	let startImage = product.querySelector(".product__image");

	let imageFlying = startImage.cloneNode(true);
	imageFlying.classList.add("image-fly");
	document.body.appendChild(imageFlying);

	let startCoordinate = startImage.getBoundingClientRect();
	let finishCoordinate = productBox.getBoundingClientRect();

	imageFlying.style.top = startCoordinate.top + "px";
	imageFlying.style.left = startCoordinate.left + "px";

	window.requestAnimationFrame(() => {
		imageFlying.style.top = finishCoordinate.top + "px";
		imageFlying.style.left = finishCoordinate.left + "px";
	})

	imageFlying.addEventListener("transitionend", () => {
		imageFlying.remove()
		imageProd.classList.remove("cart_hidden")
	})

}

document.addEventListener("click", event => {

	let product = event.target.closest(".product")

	if (event.target.classList.contains("product__quantity-control")) {
		let contolBox = product.querySelector(".product__quantity-controls")
		let count = contolBox.querySelector(".product__quantity-value")
		let value = Number(count.textContent)

		if (event.target.classList.contains("product__quantity-control_dec")) {
			if (value > 1) {
				value--
			};
		}

		if (event.target.classList.contains("product__quantity-control_inc")) {
			value++;
		}

		count.textContent = value;

	}

	if (event.target.classList.contains("product__add")) {

		let prodId = product.dataset.id
		let existingProduct = basket.querySelector(`.cart__product[data-id="${prodId}"]`);

		if (existingProduct) {
			let count = existingProduct.querySelector(".cart__product-count");
			count.textContent =
				Number(count.textContent) +
				Number(product.querySelector(".product__quantity-value").textContent);


			savedBox.forEach(item => {
				if (item.id === prodId) {
					item.count = count.textContent;
				}
			});

			localStorage.setItem("basket", JSON.stringify(savedBox));
		} else {

			let productBox = document.createElement("div");
			productBox.dataset.id = prodId;
			productBox.className = "cart__product"

			let imageProd = document.createElement("img");
			imageProd.classList.add("cart__product-image", "cart_hidden")
			imageProd.src = product.querySelector(".product__image").src

			let productCount = document.createElement("div");
			productCount.textContent = product.querySelector(".product__quantity-value").textContent;
			productCount.className = "cart__product-count"

			basket.appendChild(productBox);
			productBox.appendChild(imageProd);
			productBox.appendChild(productCount);


			savedBox = JSON.parse(localStorage.getItem("basket")) || [];
			savedBox.push({
				id: productBox.dataset.id,
				count: productCount.textContent,
				img: imageProd.src
			})
			localStorage.setItem("basket", JSON.stringify(savedBox))


			toggleBasket()

			flying(product, productBox, imageProd)

		}
	}

	if (event.target.closest(".cart__products")) {
		let delItem = event.target.closest(".cart__product")

		let savedItems = JSON.parse(localStorage.getItem("basket"));
		let currentTargets = savedItems.filter(item => item.id !== delItem.dataset.id)
		localStorage.setItem("basket", JSON.stringify(currentTargets))
		delItem.remove()

		toggleBasket()


	}
});