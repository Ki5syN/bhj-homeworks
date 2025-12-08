/* let timer = Number(document.getElementById("timer").textContent);
const interval = setInterval(() => {
    if(timer <= 0) {
        clearInterval(interval)
        alert("Вы победили в конкурсе!")
    }

    timer--;
    document.getElementById("timer").textContent = timer;
    
}, 1000);
*/

let timer = document.getElementById("timer").textContent;
let longTimer = 10


const interval01 = setInterval(() => {
    if(longTimer <= 0) {
        clearInterval(interval01)
        /* alert("Вы победили в конкурсе!")*/
        /*location.assign("https://pixabay.com/ru/photos/%d1%81%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%bd%d1%8b%d0%b9-%d0%b8%d0%b8-%d1%87%d0%b0%d0%b9%d0%ba%d0%b0-%d0%be%d0%ba%d0%b5%d0%b0%d0%bd-%d0%b2%d0%be%d0%bb%d0%bd%d0%b0-9917901/")*/
        const link = document.createElement('a');
        link.href = 'https://pixabay.com/ru/photos/%d1%81%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%bd%d1%8b%d0%b9-%d0%b8%d0%b8-%d1%87%d0%b0%d0%b9%d0%ba%d0%b0-%d0%be%d0%ba%d0%b5%d0%b0%d0%bd-%d0%b2%d0%be%d0%bb%d0%bd%d0%b0-9917901/';
        link.download = 'image.jpg'; 
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    longTimer--;
    
    let hour =  String(Math.floor(longTimer / 3600)).padStart(2, "0");
    let minute = String(Math.floor((longTimer % 3600)/60)).padStart(2, "0");
    let second = String(longTimer % 60).padStart(2, "0");    

    document.getElementById("timer").textContent = `${hour}:${minute}:${second}`  
}, 1000);
