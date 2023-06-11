const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}));

// Get the header
const header = document.getElementById('myheader');

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
window.onscroll = myFunction();

const myProjects = [
  {
    id: 'proj1',
    name: 'KingFisher Chemicals',
    description: 'A joyful celebration believing in the openness and sharing, believing in "Food is the New Gold" creating a positive change with people from over 100 countries is taking place in November, Pakistan',
    featuredImage: './images/KingFisherChemicals.jpg',
    technologies: ['HTML', 'Ruby', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/KingFisher-Chemicals/',
    linkSource: 'https://github.com/Mike111222/KingFisher-Chemicals/',
  },
  {
    id: 'proj2',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'Ruby', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj3',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'Ruby', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj4',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'Ruby', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj5',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'Ruby', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj6',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'Ruby', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
];

// for loading projects on run time through JavaScript...Project Card Mapping

const projectsContainer = document.getElementById('projects-container');

myProjects.map((card) => {
  projectsContainer.innerHTML += `
    <div id="${card.id}" class="project-card">
      <h2 class="work-subheading projecttitle">${card.name}</h2>
      <p class="work-specs projectdetails">${card.description}</p>
      <div class="for-flex projectflex2">
        <ul>
          <li class="flex-items item1">${card.technologies[0]}</li>
          <li class="flex-items item2">${card.technologies[1]}</li>
          <li class="flex-items item3">${card.technologies[2]}</li>
        </ul>
      </div>
      <button type="button" id="myBtn" class="work-btn projbtn on-mobile">${card.seeProject}</button>
    </div>
    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>${card.name}</h2>
          <div class="for-flex projectflex2">
            <ul>
              <li class="flex-items item1">${card.technologies[0]}</li>
              <li class="flex-items item2">${card.technologies[1]}</li>
              <li class="flex-items item3">${card.technologies[2]}</li>
            </ul>
          </div>
        </div>
        <div class="modal-body">
          <div><img src="./images/KingFisherChemicals.jpg" class="modal-img"alt="project image"></div>
          <div>
            <p>
            A joyful celebration believing in the openness and sharing, believing in "Food is the New Gold" creating a positive change with people from over 100 countries is taking place in November, Pakistan
            </p><br>
            <p class="hide">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s with the 
              releax map lapora verita.
            </p>
            <div class="btns-div">
            <a href="${card.linkLive}"><img src="./images/See Live.png" class="img-btn" alt="Live Link"></a>
            <a href="${card.linkSource}"><img src="./images/See Source.png" class="img-btn" alt="source code"></a>
      
  
      </div>
          </div>
        </div>
      </div>
    </div>
  
`;
  return ('');
});

// Get the modal

const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
span.onclick = () => {
  modal.style.display = 'none';
};
// Get the button that opens the modal
const proBtn = document.getElementsByClassName('projbtn');

Array.from(proBtn).forEach((button) => {
  button.addEventListener('click', () => {
    // Perform desired action here
    document.body.classList.toggle('no-scroll');
    modal.style.display = 'block';
  });
});
const modalClose = document.querySelector('.close');
modalClose.addEventListener('click', () => {
  modal.classList.remove('act');
  document.body.classList.remove('no-scroll');
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

//* **end of modal***

// ***the contact form validation***

// Step-1 Check the letter case of the string is lower case, if yes, return true,
// if no, return false
const checkCase = (str) => {
  const isLower = str.toString().toLowerCase();
  if (str === isLower) {
    return true;
  }
  return false;
};

// Step-2 validate the email, prevent the default event submit,
// take the input value of email, if email value is in lowercase, return true,
// form will be submitted using formspree service
// else return false
const validate = (email) => {
  email.preventDefault();
  const inputMail = document.getElementById('email').value;
  const form = document.getElementById('myform');
  const checkEmail = checkCase(inputMail);
  if (checkEmail === true) {
    form.action = 'https://formspree.io/f/xbjewoor';
    form.submit();
  } else { // else return false and throw an error message for the user
    const throwError = document.getElementById('error-msg');
    throwError.innerHTML = 'Please check your email address again. The email input should always be in the lower case.';
  }
};
const form = document.getElementById('myform');
form.addEventListener('submit', validate);

//* **end of form validation code***

//* **preserve data in browser local storage ***

/**
 * Declaring form elements i-e name, email, textarea
 * The form elements (fullNameInput, emailInput, and textInput)
 * are declared by selecting the corresponding HTML elements using document.querySelector().
*/
const fullNameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const textInput = document.querySelector('#textarea');

// Load the data from local storage, if it already exists in the local storage
const savedData = JSON.parse(localStorage.getItem('myFormData'));

/**
 * An if statement checks if there is any saved data (savedData). If data exists,
 * it populates the form fields (fullNameInput, emailInput, and textInput) with the saved values.
*/

if (savedData) {
  fullNameInput.value = savedData.name;
  emailInput.value = savedData.email;
  textInput.value = savedData.message;
}
/**
 * The saveFormData() function is defined to capture changes in the
 *  form input fields. Inside the function, a JavaScript object (myFormData)
 *  is created with the current values of the input fields.
 */
function saveFormData() {
  const myFormData = {
    name: fullNameInput.value,
    email: emailInput.value,
    text: textInput.value,
  };

  /**
  * The myFormData object is then saved to local storage as a single entry
  *  using localStorage.setItem('myFormData', JSON.stringify(myFormData)).
  * The object is converted to a JSON string using JSON.stringify() before storing it.
 */

  localStorage.setItem('myFormData', JSON.stringify(myFormData));
}
// adding eventListeners to the form input elements
fullNameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', saveFormData);
textInput.addEventListener('input', saveFormData);