// getting the element id's
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

// Add event listeners for hover events
portfolioBtn.addEventListener("mouseenter", () => {
  imgDisplay.src = PProjDisplay;
});
foodMakerBtn.addEventListener("mouseenter", () => {
  imgDisplay.src = foodMakerProjDisplay;
});
PASSBtn.addEventListener("mouseenter", () => {
  imgDisplay.src = PASSProjDisplay;
});
japanBlogBtn.addEventListener("mouseenter", () => {
  imgDisplay.src = JapanBlogProjDisplay;
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

// Add event listeners for hover events on links
document.querySelectorAll('#flexLinks a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const paraId = link.getAttribute('data-para-id');
    showProcess(paraId);

    // Your existing code for image display
    const imageSrc = link.getAttribute('data-img-src'); // Add this attribute to your <a> tags
    if (imgDisplay && imageSrc) {
      imgDisplay.src = imageSrc;
    }
  });
});
