import projectImages from '../assets/pictures/index';

const projectsData = [
  {
    id: 1,
    name: 'Password Generator',
    picture: projectImages.passwordImage,
    description: "This is a program that uses JavaScript to generate a password based on the user's choice of included character types (lowercase letters, uppercase letters, numbers, and special characters)",
    githubRepo: 'https://github.com/sam-st/password-generator',
  },
  {
    id: 2,
    name: 'Web Based Text Editor',
    picture: projectImages.jateImage, 
    description: 'A web based text editor that you can install and use offline as well',
    githubRepo: 'https://github.com/sam-st/web-based-text-editor'
  },
  {
    id: 3,
    name: 'Note Taker',
    picture: projectImages.noteImage, 
    description: 'Creates notes with the click of a button',
    githubRepo: 'https://github.com/sam-st/note-taker'
  },
  {
    id: 4,
    name: '5 Day Forecast',
    picture: projectImages.forecastImage, 
    description: 'This is an app that wil show you a 5-day forecast depending on what city you search for.',
    githubRepo: 'https://github.com/sam-st/5-day-forecast'
  },
  {
    id: 5,
    name: 'Daily Planner',
    picture: projectImages.plannerImage, 
    description: 'This is a planner you can use to make plans for your daily life.',
    githubRepo: 'https://github.com/sam-st/daily-schedule'
  },
  {
    id: 6,
    name: 'Philly Quiz',
    picture: projectImages.quizImage, 
    description: 'A quiz about Philly',
    githubRepo: 'https://github.com/sam-st/philly-quiz'
  },
  {
    id: 7,
    name: 'Cook Bookmark',
    picture: projectImages.cookbookImage, 
    description: "To taste or not to taste? you have come to the right place. CookBookmark is a website created to allow users to search for recipes by a few clicks. Then, just seconds later, recipes are where their eyes can see. \nIn front of the user are recipes for what could possibly be some of their favorite meals. In addition to being able to fetch recipes, the user gets the ingredients and instructions so they can make their own version of the meal right at home. The user also has the option to save recipes from the database to their very own recipe book. Therefore having access to all their favorite meal's recipes without having to search and find it through the database. Upon save, this button will append to a delete if the user palate changes and wish to remove a recipe from their recipe book. \nDont forget about the print button which allows the user to print a hard copy of the recipe shoud they want to. This is possible by a technology named: WordPress Gutenberg, that us developers decided to implement in this application. It is a cool and handy feature.",
    githubRepo: 'https://github.com/sjones-njones/Recipe-Book-Group-3-Project-2'
  },
];

export default projectsData;
