// Getting element id's
const portfolioBtn = document.querySelector('#portfolio');
const foodMakerBtn = document.querySelector('#foodMaker');
const PASSBtn = document.querySelector('#PASS');
const japanBlogBtn = document.querySelector('#japanBlog');

const imgDisplay = document.querySelector('#imgDisplay')

// img in the file that change on hover
const PProjDisplay = '../../zassets/READMEimg/Screenshot2023-08-22PPF.png';
const foodMakerProjDisplay = '../../zassets/Images/Projects/FoodMakerApp.png';
const JapanBlogProjDisplay = '../../zassets/Images/Projects/JJapanBlog.png';
const PASSProjDisplay = '../../zassets/Images/Projects/PlainAndSimpleForWebProjInvertedColor.png';

document.addEventListener("DOMContentLoaded", () => {
  // Check if there's saved content in localStorage
  const savedParaId = localStorage.getItem('lastViewedParaId');
  const savedImageSrc = localStorage.getItem('lastViewedImageSrc');

  if (savedParaId && savedImageSrc) {
    showProcess(savedParaId);
    imgDisplay.src = savedImageSrc;
  }
});

// Add event listeners for hover events on links
document.querySelectorAll('#flexLinks a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const paraId = link.getAttribute('data-para-id');
    showProcess(paraId);

    let imageSrc;
    switch (paraId) {
      case 'para1':
        imageSrc = PProjDisplay;
        break;
      case 'para2':
        imageSrc = foodMakerProjDisplay;
        break;
      case 'para3':
        imageSrc = PASSProjDisplay;
        break;
      case 'para4':
        imageSrc = JapanBlogProjDisplay;
        break;
    }

    if (imgDisplay && imageSrc) {
      imgDisplay.src = imageSrc;

      // Saves current paraId and imageSrc to localStorage
      localStorage.setItem('lastViewedParaId', paraId);
      localStorage.setItem('lastViewedImageSrc', imageSrc);
    }
  });
});

// Function to hide all .processes elements
function hideAllProcesses() {
  document.querySelectorAll('.processes').forEach(div => {
    div.classList.remove('active');
  });
}

// Function to show the relevant .processes element
function showProcess(paraId) {
  hideAllProcesses();
  const processDiv = document.querySelector(`#${paraId}`);
  if (processDiv) {
    processDiv.classList.add('active');
  }
}
