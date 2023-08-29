// getting the element id's
const portfolioBtn = document.querySelector('#portfolio');
const foodMakerBtn = document.querySelector('#foodMaker');
const PASSBtn = document.querySelector('#PASS');
const japanBlogBtn = document.querySelector('#japanBlog');

const imgDisplay = document.querySelector('#imgDisplay')


// unused img's in the file that will change upon hover
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
