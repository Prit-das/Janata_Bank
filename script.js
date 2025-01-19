// Js for hamberger icon
const hamberger = document.querySelector('#hamberger-icon');

// Js for location icon
const locationIcon = document.querySelector('#location-icon');

// Js for hamberger bar
const bars = hamberger.querySelectorAll('span');

// Js for Mobile menu
const mobileMenu = document.querySelector('#mobileMenu');

// JS for navigation bar mouse enter effect
const navigation = document.querySelector('#navigation');
navigation.addEventListener('mouseenter', function (){
    navigation.classList.add('navigation-background');
    locationIcon.classList.add('locationInvert');
    bars.forEach((span) => {
        span.style.backgroundColor = '#0099CC'; // Change color to blue
    });
    
})
// JS for navigation bar mouse leave effect
navigation.addEventListener('mouseleave', function (){
    navigation.classList.remove('navigation-background');
    locationIcon.classList.remove('locationInvert');
    bars.forEach((span) => {
        span.style.backgroundColor = '#ffff'; // Change color to blue
    });
})

hamberger.addEventListener('click', function (){
    hamberger.classList.toggle('iconopen');
    mobileMenu.classList.toggle('trans');
})