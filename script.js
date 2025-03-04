// ------------------------Variables & Targets----------------------------------

// Theme color variables
const blue = '#0099CC';
const white = '#ffff';
const slate = '#64748b';


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

// Variable for Mobile Account menu
const accountSection = document.querySelector('#accountSection');

// Variable for Mobile Account menu
const loanSection = document.querySelector('#loanSection');

// Variable for Mobile Account menu
const cardSection = document.querySelector('#cardSection');

// Variable for Mobile Account menu
const guaranteeSection = document.querySelector('#guaranteeSection');

// Variable for Mobile Account menu
const servicesSection = document.querySelector('#servicesSection');

// Variable for Mobile Account menu
const aboutSection = document.querySelector('#aboutSection');

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
        span.style.backgroundColor = blue; // Change color to blue
    });
    
})
// JS for navigation bar mouse leave effect
navigation.addEventListener('mouseleave', function (){
    navigation.classList.remove('navigation-background');
    locationIcon.classList.remove('locationInvert');
    bars.forEach((span) => {
        span.style.backgroundColor = white; // Change color to white
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

// Js for mobile account & loan menu switch icons
function toggleSection(sectionId, childId) {
    let section = document.getElementById(sectionId);
    let child = document.getElementById(childId);
    let icon = section.querySelector("i");

    // Toggle visibility of the child section
    child.classList.toggle("hideSection");

    // Check if the section is open or closed and set the correct icon
    if (child.classList.contains("hideSection")) {
        icon.classList.replace("bi-dash-circle-fill", "bi-plus-circle-fill");
    } else {
        icon.classList.replace("bi-plus-circle-fill", "bi-dash-circle-fill");
    }
}

// Event listeners for Account Section
accountSection.addEventListener("click", function () {
    toggleSection("accountSection", "accountChild");
});

// Event listeners for Loan Section
loanSection.addEventListener("click", function () {
    toggleSection("loanSection", "loanChild");
});

// Event listeners for Loan Section
cardSection.addEventListener("click", function () {
    toggleSection("cardSection", "cardChild");
});

// Event listeners for guatantee Section
guaranteeSection.addEventListener("click", function () {
    toggleSection("guaranteeSection", "guaranteeChild");
});

// Event listeners for services Section
servicesSection.addEventListener("click", function () {
    toggleSection("servicesSection", "servicesChild");
});

// Event listeners for about Section
aboutSection.addEventListener("click", function () {
    toggleSection("aboutSection", "aboutChild");
});

// Js for when user will click atm location for mobile devices
ATMForMob.addEventListener('click', function (){
    if (branchMobList.classList.contains('flex')) {
        ATMForMob.style.color = blue
        branchForMob.style.color = slate
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
        ATMForMob.style.color = slate
        branchForMob.style.color = blue
        branchMobList.classList.toggle('hidden')
        ATMMobList.classList.remove('flex')
        ATMMobList.classList.add('hidden')
    }
})
// ------------------------------------------------------------------