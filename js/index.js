const slide = document.querySelectorAll('.slide');
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let TimeInterval = 5000;
let auto = true;

const nextbtn = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
    }else{
        slide[0].classList.add('current')
    }
    // setTimeout(() => current.classList.remove('current'))
}

const prevbtn = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current')
    }else{
        slide[slide.length -1].classList.add('current')
    }
    // setTimeout(() => current.classList.remove('current'))
}


next.addEventListener('click', e => {
    nextbtn()
    if(auto){
    clearInterval(slideInterval)
    const slideInterval = setInterval(() => {
        nextbtn()
    }, 5000);
}
})

prev.addEventListener('click', e => {
    prevbtn()
    if(auto){
        clearInterval(slideInterval)
        const slideInterval = setInterval(() => {
            nextbtn()
        }, 5000);
    }
})

if(auto){
    const slideInterval = setInterval(() => {
        nextbtn()
    }, 5000);
}