
let carousel = document.getElementById('carousel');
let foodHolder =  document.getElementsByClassName('images');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

let sortBtn = document.getElementById('meal-class').children
let meals = carousel.children

let totalPosition = foodHolder.length;
console.log(totalPosition)

prevButton.addEventListener('click', previous)
nextButton.addEventListener('click', next)

for(let i = 0; i < sortBtn.length; i++) {

    sortBtn[i].addEventListener('click', function() {
        let targetData = sortBtn[i].getAttribute("data-target")

        for(let j = 0; j < foodHolder.length; j++) {

            let targetItem = foodHolder[j].getAttribute("data-items")

            if(targetData == 'all') {
                foodHolder[j].classList.add('active')
                foodHolder[j].classList.remove('delete')
            }
            else if (targetData == targetItem) {
                foodHolder[j].classList.add('active')
                foodHolder[j].classList.remove('delete')
            }
            else {
                foodHolder[j].classList.remove('active')
                foodHolder[j].classList.add('delete')
            }

        }

    })  
    previous()
    next()
}

function previous() {
    carousel.prepend(foodHolder[totalPosition - 1])
}
function next() {
    carousel.append(foodHolder[0])
}

















































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