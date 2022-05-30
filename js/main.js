
let carousel = document.querySelector('.carousel'); //slider(slider-main)
let foodHolder =  document.getElementsByClassName('breakfast-images');//item
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

let slidePosition = 0;
let totalPosition = foodHolder.length;

prevButton.addEventListener('click', () => {
    if(slidePosition == totalPosition - 1)
    carousel.prepend(foodHolder[foodHolder.length - 1])
})

nextButton.addEventListener('click', () => {
    carousel.append(foodHolder[0])
})







//====for one at a time=======
// let slidePosition = 0;
// let totalSlide = foodHolder.length

// prevButton.addEventListener('click', previous)
// nextButton.addEventListener('click', next)

// function previous() {
//     if (slidePosition === totalSlide - 1) {
//         slidePosition -- 
//         console.log(foodHolder[slidePosition])
//     }else if (slidePosition === 0){
//         slidePosition = totalSlide - 1
//         console.log(foodHolder[slidePosition])
//     }
// }

// function next() {
//     for(let slidePosition; slidePosition < totalSlide) {
        
//     }

// }

// function  moveToNext() {

//     // foodHolder[slidePosition]
// }
// function moveToPrevious() {

//     // foodHolder[slidePosition]
// }



















































// prevButton.addEventListener('click', () => {
//     console.log(carousel.scrollWidth)
    
//     carousel.scrollLeft -= 200
// })

// nextButton.addEventListener('click', () => {
//     console.log(carousel.scrollWidth)

//     carousel.scrollLeft += 200
// })

// let maxScrollLeft = carousel.offsetWidth - carousel.scrollLeft;


// function autoSlide() {
//     if (carousel.scrollLeft > (carousel.offsetWidth - 1)) {
//         carousel.scrollLeft -= carousel.offsetWidth;
//     }
//     else {
//         carousel.scrollLeft += 2;
//     }
// }

// let autoScroll = setInterval(autoSlide, 100)

// //stop scrolling on a mouseover event
// //foodHolder.forEach(food.addEventListener('mouseover', () => {
// //    clearInterval(autoScroll)
// //}))

// for (let i = 0; i < foodHolder; i++) {
//     foodHolder[i].addEventListener('mouseover', () => {
//         clearInterval(autoScroll)
//     })
//     foodHolder[i].addEventListener('mouseout', () => {
//         setInterval(autoScroll)
//     })
// }