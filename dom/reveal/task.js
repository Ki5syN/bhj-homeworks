
const boxElement = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver ((entery) =>{
    
    entery.forEach((el) => {
        if(el.isIntersecting){
            el.target.classList.add("reveal_active")
        } else {
            el.target.classList.remove("reveal_active")
        }
    })
    
    }, 
    { threshold: 0.4}
)

boxElement.forEach((e) => { observer.observe(e)})

/**
window.addEventListener("scroll", () => {
    boxElement.forEach((e) =>{
        const boxElementRectParams = e.getBoundingClientRect()
        const { top} = boxElementRectParams;
        if (window.innerHeight >= top ) {
            e.classList.add("reveal_active")
        }
        if (window.innerHeight < top) {
            e.classList.remove("reveal_active")
        }

    }) 

})
    **/