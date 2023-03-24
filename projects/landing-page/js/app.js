/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Build the navigation menu
//can also use document.querySelector('#navbar__list');
const navbarList = document.getElementById('navbar__list');
//this is the entire list of sections. Using the spread operator ... converts the NodeList returned
//by document.querySelectorAll() to an array.
const [...sections] = document.querySelectorAll('section');
// Creates a fragment to hold the navigation menu items
//Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
const fragment = document.createDocumentFragment();

const toTopButton = document.getElementById('to-top-button');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Source: https://knowledge.udacity.com/questions/85408
// function isSectionElementInViewport(sec) {
//   const rect = sec.getBoundingClientRect();
//   return (
//     sec.top >= 0 &&
//     sec.left >= 0 &&
//     sec.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     sec.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// Replaced isSectionElementInViewport() with IntersectionObserver()
// Use IntersectionObserver to toggle the 'your-active-class' and 'active' classes on sections and their corresponding nav items
//Source: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting
//Source: https://knowledge.udacity.com/questions/667155, 
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      toggleActiveClass(entry.target);
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

//Toggles to add/remove active class from section and its corresponding nav item
function toggleActiveClass(section) {
  if (!section) {
    return;
  }

  // Remove active class from all sections and their corresponding nav items
  function toggleActiveClass(section) {
    if (!section) {
      return;
    }

    // Remove active class from all sections and their corresponding nav items
    sections.forEach((section) => {
      section.classList.remove('your-active-class');
      const navItem = document.querySelector(`a[href="#${section.id}"]`);
      if (navItem) {
        navItem.classList.remove('active');
      }
    });

    // Add active class to the section and its corresponding nav item
    section.classList.add('your-active-class');
    const navItem = document.querySelector(`a[href="#${section.id}"]`);
    console.log(navItem);
    if (navItem) {
      navItem.classList.add('active');
    }
  }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar() {
  const fragment = document.createDocumentFragment();
  sections.forEach((section) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = section.dataset.nav;
    a.setAttribute('href', `#${section.id}`);
    a.classList.add('menu__link');
    li.appendChild(a);
    fragment.appendChild(li);
  });
  navbarList.appendChild(fragment);
}

//Scroll to anchor ID using scrollTO event
// Scroll to the clicked section smoothly
//Source: https://knowledge.udacity.com/questions/72618
//Source: https://knowledge.udacity.com/questions/147927
function scrollToSection(event) {
  event.preventDefault();
  if (event.target.nodeName === 'A') {
    // Get the id of the section to scroll to from the href attribute of the clicked navigation item
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add the 'your-active-class' and 'active' classes to the section 
//and the corresponding navigation item when the section is in the viewport
// function setActiveSection() {
//   sections.forEach((section) => {
//     if (isSectionElementInViewport(section)) {
//       toggleActiveClass(section);
//     }
//   });
// }


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
buildNavbar();

// Scroll to section on link click
navbarList.addEventListener('click', scrollToSection);

// Set sections as active
document.addEventListener('scroll', toggleActiveClass);

// Button functionality: 
// Show/hide the to-top button depending on the scroll position
document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
});

// Scroll to the top of the page when the to-top button is clicked
toTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

