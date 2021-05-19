let y = document.getElementById('move-to');
y.style.top = "-100vh";


function myFunction(x) {

    x.classList.toggle("change");
    if (y.style.top === "-100vh") {

        y.style.top = 0;
     
    }
    else {

        y.style.top = "-100vh";
       

    }

}

let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    text.style.top = 50 + value * (-0.5) + '%';
    bird1.style.top = value * (-1.5) + 'px';
    bird1.style.left = value * (2) + 'px';
    bird2.style.top = value * (-1.5) + 'px';
    bird2.style.left = value * (-5) + 'px';
    btn.style.marginTop = value * (1.5) + 'px';
    rocks.style.top = value * (-0.12) + 'px';
    forest.style.top = value * (0.25) + 'px';
    header.style.top = value * (-0.5) + 'px';
})


const inputs = document.querySelectorAll('.input');
function focusFun() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFun() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFun);
    input.addEventListener('blur', blurFun);
})
