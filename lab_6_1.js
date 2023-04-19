const cells = document.getElementsByTagName("td");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].classList.contains("white")) {
                cells[j].classList.replace("white", "black");
            } else {
                cells[j].classList.replace("black", "white");
            }
        }
    });
}