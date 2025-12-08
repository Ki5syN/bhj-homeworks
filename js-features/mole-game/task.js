let hit = Number(document.getElementById("dead").textContent);
let miss = Number(document.getElementById("lost").textContent);


    for(let i = 1; i <= 9; i++) {
        let hole  =  document.getElementById(`hole${i}`)    
        hole.onclick = () => {
        if ( hole.className.includes("hole_has-mole")) {
            hit++;
            document.getElementById("dead").textContent = hit;
        } else {
            miss++;
            document.getElementById("lost").textContent = miss;
        } 
        
        }
    }


