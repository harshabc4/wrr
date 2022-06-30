// const point1 = document.querySelector('.point-1')
// const point2 = document.querySelector('.point-2')
// const point3 = document.querySelector('.point-3')
// const point4 = document.querySelector('.point-4')
const wildlifeWrapper = document.querySelector('#wildlife-wrapper')
const wrrWrapper = document.querySelector('#wrr-wrapper')

// Set up points as clickable objects to hide the page
point1.addEventListener('click', function point1Unlock(){
   wildlifeWrapper.classList.add('point1Unlock')
   checkHide()
})

point2.addEventListener('click', function point2Unlock(){
    wildlifeWrapper.classList.add('point2Unlock')
    checkHide()
 })

 point3.addEventListener('click', function point3Unlock(){
    wildlifeWrapper.classList.add('point3Unlock')
    checkHide()
 })

 point4.addEventListener('click', function point4Unlock(){
    wildlifeWrapper.classList.add('point4Unlock')
    checkHide()
 })

// Checks if wildlifeWrapper contains all of the unlock classes and then hides itself and shows alternative
 function checkHide() {
    if(wildlifeWrapper.classList.contains('point1Unlock') && wildlifeWrapper.classList.contains('point2Unlock') && wildlifeWrapper.classList.contains('point3Unlock') && wildlifeWrapper.classList.contains('point4Unlock')){
        wildlifeWrapper.classList.add('hidden')
        wrrWrapper.classList.remove('hidden')
    }
}

const nav = document.querySelector('.scroll-bar');
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
   console.log(lastScrollY)
   if (lastScrollY > 120){
      nav.classList.add('nav-hidden')
      console.log('going down')
   }else if(lastScrollY > window.scrollY){
      nav.classList.remove('nav-hidden')
      console.log('going up')
   }

   lastScrollY = window.scrollY;
})
// Hide scrollbar on scroll
