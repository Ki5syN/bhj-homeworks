let hit = Number(document.getElementById("dead").textContent);
let miss = Number(document.getElementById("lost").textContent);


for (let i = 1; i <= 9; i++) {
	let hole = document.getElementById(`hole${i}`)
	hole.onclick = () => {
		if (hole.className.includes("hole_has-mole")) {
			hit++;
			document.getElementById("dead").textContent = hit;
		} else {
			miss++;
			document.getElementById("lost").textContent = miss;
		}

		if (hit === 10) {
			alert("Вы победили")
			hit = 0;
			miss = 0;
		};

		if (miss === 5) {
			alert("Вы проиграли");
			hit = 0;
			miss = 0;
		}

		document.getElementById("dead").textContent = hit;
		document.getElementById("lost").textContent = miss;
	}

} 
        
