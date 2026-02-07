const textArea = document.getElementById("editor");
const clearField = document.getElementById("clear")
textArea.value = localStorage.getItem("text") || "";

textArea.addEventListener("input", () => {     
    localStorage.setItem("text", textArea.value);
})

clearField.addEventListener("click", () => {
    textArea.value = ""
    localStorage.removeItem("text");
})





