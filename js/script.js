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
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj2',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj3',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj4',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj5',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj6',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    seeProject: 'See Project',
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
];

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
          <div><img src="./images/popup-desktop.png" class="modal-img"alt="project image"></div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s.
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
span.onclick = function () {
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
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// const allProjects = [
//   {
//     id: 'myworks',
//     name: 'My Recent Works',
//     description: 'A daily selection of privately
//     personalized reads; no accounts or sign-ups required.',
//     featuredImage: '.images/myworks-desktop.png',
//     technologies: ['HTML', 'BootStrap', 'Ruby'],
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj1',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads;
//      no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj2',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads;
//     no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj3',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads;
//     no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj4',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads;
//     no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj5',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads;
//     no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj6',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads;
//     no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   }
// ];
