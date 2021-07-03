const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let correntActive = 1;

next.addEventListener('click', () => {
    correntActive++;

    if (correntActive > circles.length) {
        correntActive = circles.length;
    }
    update()
})
prev.addEventListener('click', () => {
    correntActive--;

    if (correntActive < 1) {
        correntActive = 1;
    }
    update()
})


function update() {
    circles.forEach((circle, idx) => {

        if (idx < correntActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active');
        }

    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

    if (correntActive === 1) {
        prev.disabled = true;
    } else if (correntActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}