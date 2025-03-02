// ------------------------Variables & Targets----------------------------------

// Variable for hamberger icon
const hamberger = document.querySelector('#hamberger-icon');

// Variable for location icon
const locationIcon = document.querySelector('#location-icon');

// Variable for hamberger bar
const bars = hamberger.querySelectorAll('span');

// Variable for Desktop menu
const menu = document.querySelector('#menu');

// Variable for Desktop Location menu
const locationMenu = document.querySelector('#locationMenu');

// Variable for Mobile Location menu
const branchForMob = document.querySelector('#branchForMob');

// Variable for Mobile Location menu
const ATMForMob = document.querySelector('#ATMForMob');

// ------------------------------------------------------------------

// ------------------------Nav-Events--------------------------------

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
        span.style.backgroundColor = '#ffff'; // Change color to white
    });
})
// Js for Menu & Location
hamberger.addEventListener('click', function (){
    if (locationMenu.classList.contains('locationOpen')) {
        locationMenu.classList.remove('locationOpen');
        hamberger.classList.toggle('iconopen');
        menu.classList.toggle('trans');
    } else {
        hamberger.classList.toggle('iconopen');
        menu.classList.toggle('trans');
    }
})
locationIcon.addEventListener('click', function () {
    if (hamberger.classList.contains('iconopen') || menu.classList.contains('trans') || locationMenu.classList.contains('locationOpen')) {
        menu.classList.remove('trans');
        hamberger.classList.remove('iconopen');
        locationMenu.classList.toggle('locationOpen');
    }
    else{
        locationMenu.classList.add('locationOpen');
    }
});

// Js for when user clicking on the body hide all the menu
document.addEventListener('click', function (event) {
    // Check if the click target is NOT inside the menu, hamburger, or location icon
    if (!hamberger.contains(event.target) && 
        !menu.contains(event.target) && 
        !locationIcon.contains(event.target) && 
        !locationMenu.contains(event.target)) {
        
        // Hide all menus
        hamberger.classList.remove('iconopen');
        menu.classList.remove('trans');
        locationMenu.classList.remove('locationOpen');
    }
});

// Js for when user will click atm location for mobile devices
ATMForMob.addEventListener('click', function (){
    if (branchMobList.classList.contains('flex')) {
        ATMForMob.style.color = '#0099CC'
        branchForMob.style.color = '#64748b'
        branchMobList.classList.toggle('hidden')
        ATMMobList.classList.add('flex')
        ATMMobList.classList.remove('hidden')
    }
    else{
        ATMMobList.classList.add('hidden')
    }
})

// Js for when user will click branch location for mobile devices
branchForMob.addEventListener('click', function (){
    if (ATMMobList.classList.contains('flex')) {
        ATMForMob.style.color = '#64748b'
        branchForMob.style.color = '#0099CC'
        branchMobList.classList.toggle('hidden')
        ATMMobList.classList.remove('flex')
        ATMMobList.classList.add('hidden')
    }
})


// ------------------------------------------------------------------