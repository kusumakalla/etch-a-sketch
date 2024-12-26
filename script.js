let container = document.querySelector(".container");


function grid(n) {


    for (let i = 1; i <= n; i++) {

        let containern = document.createElement("div");
        containern.classList.add("containern");


        for (let j = 1; j <= n; j++) {
            let div = document.createElement("div");
            div.classList.add("hoverDiv");
            div.textContent = "div";
            containern.appendChild(div);
        }
        container.appendChild(containern);
    }


    let hoverDiv = document.querySelectorAll('.hoverDiv');


    hoverDiv.forEach(element => {
        let count = 0;
        element.addEventListener('mouseover', (e) => {
            count += 0.1;
            console.log(count)
            e.target.style.backgroundColor = 'pink';
            e.target.style.opacity = count;
        });
    });
    ``
    hoverDiv.forEach(element => {
        element.addEventListener('mouseleave', (e) => {
            e.target.style.backgroundColor = '';
            e.target.style.opacity = 1;
        });
    });
}

let input = document.querySelector(".input");

input.addEventListener('click', () => {
    container.innerHTML = '';
    let inputNum = prompt("enter the number of squares you would like in each row");
    while ((inputNum > 100)) {
        inputNum = prompt("Sorry, please enter a value less than 100");
    }
    grid(inputNum);
})
