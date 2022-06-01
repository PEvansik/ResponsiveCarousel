
let carousel = document.getElementById('carousel');
let foodHolder =  document.getElementsByClassName('images');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

let btn = document.getElementById('meal-class');

let totalPosition = foodHolder.length;

//select all the meal buttons
let sortBtn = btn.children
//select all the meals
let meals = carousel.children

// console.log(sortBtn)
// console.log(foodHolder)
// console.log(totalPosition)


prevButton.addEventListener('click', previous)
nextButton.addEventListener('click', next)


//loop through the meal buttons
for(let i = 0; i < sortBtn.length; i++) {
    //add eventlistener to each one
    sortBtn[i].addEventListener('click', function() {
        //pick out the buttons and add/remove classes accordingly same class name
        for(let j = 0; j < sortBtn.length; j++) {
            sortBtn[j].classList.remove('current')
        }
        this.classList.add('current')

        let targetData = this.getAttribute("data-target")
        //pick each data attribute
        for(let k = 0; k < sortBtn.length; k++) {
            sortBtn[k].classList.remove('active');
            sortBtn[k].classList.add('delete')

            if(sortBtn[k].getAttribute('data-items') == targetData || targetData == 'all') {
                this.classList.add()
            }
        }
    })  
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