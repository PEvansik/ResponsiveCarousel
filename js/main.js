let foodHolder =  document.querySelectorAll('.breakfast-images');
let carousel = document.querySelector('.carousel');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');



prevButton.addEventListener('click', () => {
    console.log(carousel.scrollWidth)
    
    carousel.scrollLeft -= 200
})

nextButton.addEventListener('click', () => {
    console.log(carousel.scrollWidth)

    carousel.scrollLeft += 200
})

let maxScrollLeft = carousel.offsetWidth - carousel.scrollLeft;


function autoSlide() {
    if (carousel.scrollLeft > (carousel.offsetWidth - 1)) {
        carousel.scrollLeft -= carousel.offsetWidth;
    }
    else {
        carousel.scrollLeft += 2;
    }
}

let autoScroll = setInterval(autoSlide, 100)

//stop scrolling on a mouseover event
//foodHolder.forEach(food.addEventListener('mouseover', () => {
//    clearInterval(autoScroll)
//}))

for (let i = 0; i < foodHolder; i++) {
    foodHolder[i].addEventListener('mouseover', () => {
        clearInterval(autoScroll)
    })
    foodHolder[i].addEventListener('mouseout', () => {
        setInterval(autoScroll)
    })
}