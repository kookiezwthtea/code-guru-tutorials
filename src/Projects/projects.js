
const projects = [

//JavaScript Calculator

  {
    id: 1,
    category: 1,
    name: 'JavaScript React Calculator',
    image: 'jscalc.png',
    description: `<p>This project is part of the Front-End Development Libraries Course of
    <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator">
    The Free Code Camp Curriculum.</a></p>
    The React Calculator is developed with React.js, providing users with a user-friendly interface for basic arithmetic operations. With its intuitive design, users can effortlessly perform calculations, including addition, subtraction, multiplication, and division, enhancing the overall user experience. The calculator's clean layout and responsiveness make it an ideal tool for quick and efficient mathematical tasks.`,
    date: '03.01.2024',
    complexity: 'Easy',
    link: 'https://reactcalculatorjsproject.netlify.app/',
    gitHubLink: 'https://drive.google.com/file/d/1d3sxE1eYmuxHqXTqCY6W88iiBJj3PBBH/view?usp=drive_link',
    steps: `
    <pre class='tm-text-gray-dark h6'>
    <h3 class='col-12 tm-text-primary'>Introduction</h3>
    The React Calculator is a web application developed using React.js, offering users a user-friendly interface for basic arithmetic
    operations. 
    Its clean design and intuitive functionality make it an ideal tool for quick and efficient mathematical tasks.
    <p class='text-warning m-0'> Features </p>
    - Four basic arithmetic operations: Addition (+), Subtraction (-), Multiplication (*), and Division (/).
    - Responsive layout for a seamless user experience on various devices.
    - Support for decimal numbers.
    <h4 class='col-12 tm-text-primary m-0'> Usage </h4>
    <p class='text-warning m-0'> 1.Input Numbers </p>
       - Click on the number buttons (0-9) to input the desired numbers.
       - The calculator displays the entered numbers in real-time.
       <p class='text-warning m-0'> 2.Perform Operations</p>
       - Click on the operator buttons (+, -, *, /) to perform corresponding operations.
       - The calculator displays the entered operations in real-time.
       <p class='text-warning m-0'> 3.Calculate Result</p>
       - Click on the "=" button to see the result of the calculation.
       - The result is displayed prominently on the calculator.
       <p class='text-warning m-0'> 4.Decimal Numbers</p>
       - The calculator supports decimal numbers.
       - Click on the "." button to add a decimal point. 
       <p class='text-warning m-0'> 5.Clear Calculator </p>
       - Use the "AC" button to clear the calculator and start a new calculation.  
    Feel free to explore and use the React Calculator for your mathematical needs!
    </pre>
    `,
  },

//Etchasketch

{
  id: 7,
  category: 2,
  name: 'JavaScript Etch-a-Sketch',
  image: 'etchasketch.png',
  description: '<p>This project is part of the JavaScript Course of <a href="https://www.theodinproject.com/lessons/foundations-etch-a-sketch">The Odin Project Curriculum.</a></p> Mouse-O-Sketch is a web application coded in HTML, CSS, and JavaScript, offering users an interactive etch-a-sketch experience. With dynamic grid generation and color-changing features, it provides an engaging platform for creative doodling.',
  link: 'https://js-etch-a-sketch-project.netlify.app/',
  date: '10.01.2024',
  complexity: 'Easy',
  gitHubLink: 'https://drive.google.com/file/d/1zS8HVq3K9R2nlggXGhoaVJ8GOgzYO_3L/view?usp=drive_link',
  steps:`
  <div class='tm-text-gray-dark h6 mt-4 ml-5'>
    <h4 class='col-12 text-warning mb-4'>Steps to Implement</h4>
    <ol class="mb-4">
        <li class="mb-4">Create the HTML file with the necessary structure, including sections for game title, color palette, drawing canvas, and control buttons.</li>
        <li class="mb-4">Apply CSS styles to design an aesthetically pleasing layout, incorporating a custom font, gradient background, and responsive elements.</li>
        <li class="mb-4">Integrate JavaScript to handle dynamic grid generation, color selection, and user interactions for drawing on the canvas.</li>
        <li class="mb-4">Implement features such as color-changing options, an eraser tool, and a clear button to enhance the drawing experience.</li>
        <li class="mb-4">Include responsive design elements to ensure optimal user experience across various devices and screen sizes.</li>
        <li class="mb-4">Incorporate CSS animations for interactive button hover effects, providing visual feedback to users.</li>
        <li class="mb-4">Test the application thoroughly to ensure functionality, responsiveness, and an engaging drawing experience.</li>
        <li class="mb-4">Optimize the code for readability and maintainability, following best practices in HTML, CSS, and JavaScript.</li>
        <li class="mb-4">Deploy the Mouse-O-Sketch application to a hosting platform for public access.</li>
    </ol>
    <p><strong>Additional Information:</strong></p>
    <ul>
        <li>Consider adding more drawing features, such as shapes or patterns, to expand creative possibilities.</li>
        <li>Implement user preferences for customizable grid size, allowing users to tailor the drawing experience to their liking.</li>
        <li>Explore accessibility features to ensure an inclusive experience for users with different abilities.</li>
        <li>Solicit user feedback to identify areas for improvement and potential feature enhancements.</li>
    </ul>
</div>
  `,
},

  //Pomodoro Clock

  {
    id: 3,
    category: 1,
    name: 'Pomodoro Clock',
    image: 'pomodoro-clock.png',
    description: `<p>This project is part of the Front-End Development Libraries Course of
    <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock">
    The Free Code Camp Curriculum.</a></p>
    The Pomodoro Clock is a time management application designed to enhance productivity using the Pomodoro Technique. This technique involves breaking work into intervals, traditionally 25 minutes in length, separated by short breaks. This web-based clock allows users to customize session and break lengths, providing a visual countdown timer.To add a touch of coziness, a cute cat GIF is displayed on the right side of the clock. `,
    link: 'https://pomodoro-clock-reactjsproject.netlify.app/',
    date: '03.01.2024',
    complexity: 'Easy',
    gitHubLink: 'https://drive.google.com/file/d/1sCtAGsREl8bQp6KB-OJ702kUfDirMPY2/view?usp=sharing',
    steps:`
    <div class='tm-text-gray-dark h6 mt-4 ml-5'>
    <h4 class='col-12 text-warning mb-4'>Steps to implement</h4>
    <ol class="mb-4">
    <li class="mb-4">Create the project's file structure with HTML, CSS, and JavaScript files.</li>
    <li class="mb-4">Set up the HTML structure for the Pomodoro Clock, including elements for displaying time, control buttons, and audio notifications.</li>
    <li class="mb-4">Style the Pomodoro Clock using CSS to achieve a visually appealing and user-friendly interface.</li>
    <li class="mb-4">Implement the timer logic in JavaScript, including functionalities for starting, pausing, and resetting the timer.</li>
    <li class="mb-4">Add sound notifications to alert users when a Pomodoro session or break is completed.</li>
    <li class="mb-4">Allow users to customize the Pomodoro session and break durations dynamically.</li>
    <li class="mb-4">Implement a countdown display that updates in real-time as the timer progresses.</li>
    <li class="mb-4">Ensure the timer accurately switches between Pomodoro sessions and breaks based on the configured durations.</li>
    <li class="mb-4">Handle edge cases, such as preventing users from inputting negative durations or non-numeric values.</li>
    <li class="mb-4">Test the Pomodoro Clock thoroughly, checking its functionality, responsiveness, and usability.</li>
    <li class="mb-4">Optimize the code by refactoring and organizing to enhance maintainability.</li>
    <li class="mb-4">Add additional features like a visual progress indicator or the ability to pause and resume the timer.</li>
    <li class="mb-4">Implement accessibility features to ensure the Pomodoro Clock is usable by people with disabilities.</li>
    <li class="mb-4">Explore and implement responsive design principles to make the Pomodoro Clock mobile-friendly.</li>
    <li class="mb-4">Deploy the Pomodoro Clock project on a hosting platform to share it with others.</li>
</ol>
<p><strong>Additional Information:</strong></p>
<ul>
    <li>Consider integrating a visual progress bar or animation to provide users with a clear indication of the remaining time.</li>
    <li>Explore the use of localStorage or sessionStorage to save user preferences, allowing the Pomodoro Clock to remember settings between sessions.</li>
    <li>Add a feature to toggle between light and dark modes for improved user experience, especially during different times of the day.</li>
    <li>Implement keyboard shortcuts to enhance accessibility and user convenience.</li>
    <li>Incorporate responsive design principles to ensure a seamless experience across various devices, including desktops, tablets, and mobile phones.</li>
    <li>Optimize the audio notifications to be pleasant and not disruptive, considering users who may be in shared environments.</li>
    <li>Include a "Reset to Default" button to quickly revert all settings to their default values.</li>
    <li>Provide informative tooltips or help sections to guide users on how to use and customize the Pomodoro Clock.</li>
    <li>Encourage users to take breaks and provide optional reminders or tips on maintaining a healthy work-life balance.</li>
    <li>Test the Pomodoro Clock with a diverse user group to gather feedback for further improvements.</li>
</ul>
    </div>
    `,
  },


//Drum Machine

  {
    id: 4,
    category: 1,
    name: 'Drum Machine',
    image: 'drummachine.png',
    description: `<p>This project is part of the Front-End Development Libraries Course of
    <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine">
    The Free Code Camp Curriculum.</a></p>
    The React Drum Machine is an interactive web application that allows users to create beats and experiment with different drum sounds. Built using React, this drum machine features a grid of clickable pads, each representing a unique drum sound. Users can trigger drum sounds either by clicking on the pads or by using corresponding keyboard keys. The application is designed to be both fun and functional, providing a hands-on experience in music creation.`,
    link: 'https://drummachinereactjsproject.netlify.app/',
    date: '03.01.2024',
    complexity: 'Easy',
    gitHubLink: 'https://drive.google.com/file/d/1ylqKIDHMUNVoO7EajX_Fzw8ncv8YbsWZ/view?usp=drive_link',
    steps:`
    <div class='tm-text-gray-dark h6 mt-4 ml-5'>
    <h4 class='col-12 text-warning mb-4'>Steps to implement</h4>
    <ol class="mb-4">
        <li class="mb-4">Create the project's file structure with HTML, CSS, and JavaScript files.</li>
        <li class="mb-4">Set up the React environment and install necessary dependencies using tools like Create React App.</li>
        <li class="mb-4">Design the component structure for the Drum Machine, considering elements for pads, display, and audio playback.</li>
        <li class="mb-4">Integrate and style the Drum Pads, associating each pad with a specific drum sound and keyboard key.</li>
        <li class="mb-4">Implement the playSound function in JavaScript to handle audio playback when a drum pad is clicked or a corresponding key is pressed.</li>
        <li class="mb-4">Style the Drum Machine using CSS to achieve an attractive and intuitive user interface.</li>
        <li class="mb-4">Add visual feedback for active drum pads, such as highlighting or animation, to enhance user interaction.</li>
        <li class="mb-4">Incorporate useEffect to listen for keyboard events, allowing users to trigger drum sounds using the keyboard.</li>
        <li class="mb-4">Display the active drum key on the interface to provide real-time feedback on user interactions.</li>
        <li class="mb-4">Test the Drum Machine thoroughly, checking the functionality of each drum pad, keyboard interaction, and overall user experience.</li>
        <li class="mb-4">Optimize the code by refactoring and organizing to enhance maintainability and readability.</li>
        <li class="mb-4">Explore and implement additional features, such as volume control, drum kit selection, or recording capabilities.</li>
        <li class="mb-4">Implement accessibility features, ensuring the Drum Machine is usable by people with disabilities.</li>
        <li class="mb-4">Apply responsive design principles to make the Drum Machine mobile-friendly and adaptable to various screen sizes.</li>
        <li class="mb-4">Deploy the Drum Machine project on a hosting platform to share it with others.</li>
    </ol>
    <p><strong>Additional Information:</strong></p>
    <ul>
        <li>Consider adding a visual representation of each drum sound, such as an icon or image, for better user recognition.</li>
        <li>Explore the use of CSS transitions or animations to enhance the visual appeal of drum pad interactions.</li>
        <li>Provide users with the option to customize the drum kit, allowing them to choose from different sets of drum sounds.</li>
        <li>Include tooltips or help sections to guide users on how to navigate and use the Drum Machine effectively.</li>
        <li>Integrate a playback recording feature, allowing users to save and replay their drum patterns.</li>
        <li>Optimize the audio playback for a seamless and responsive experience, especially in different browsers.</li>
        <li>Consider incorporating a settings panel to control aspects like tempo, sound effects, or loop duration.</li>
        <li>Encourage users to experiment with different rhythms and patterns, fostering creativity in drumming.</li>
        <li>Collect user feedback to identify areas for improvement and potential feature enhancements.</li>
    </ul>
</div>

    `,
  },

//Random Quote Generator

  {
    id: 5,
    category: 1,
    name: 'Random Quote Generator',
    image: 'randomquotegenerator.png',
    description: `<p>This project is part of the Front-End Development Libraries Course of
     <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine">
     The Free Code Camp Curriculum.</a></p> ThiThe app is a quote generator with a visually appealing design. It uses vibrant colors, animations, 
     and cosmic elements to make it engaging. Users can read inspiring quotes in a stylish quote box. The goal is to create a simple, tech-savvy 
     tool that provides inspirational content in an attractive way.`,
    link: 'https://randomquotegeneratorreactjsproject.netlify.app/',
    date: '03.01.2024',
    complexity: 'Easy',
    gitHubLink: 'https://drive.google.com/file/d/1_RE1MOk9Hlid1uu8t9ZtnjgIF3iGI3Rv/view?usp=sharing',
    steps:`
    <div class='tm-text-gray-dark h6 mt-4 ml-5'>
    <h4 class='col-12 text-warning mb-4'>Steps to implement</h4>
    <ol class="mb-4">
        <li class="mb-4">Create the project's file structure with HTML, CSS, and JavaScript files.</li>
        <li class="mb-4">Set up the React environment and install necessary dependencies using tools like Create React App.</li>
        <li class="mb-4">Design the component structure for the Quote App, considering elements for content display and fetching quotes.</li>
        <li class="mb-4">Integrate and style the quote display, ensuring it presents both the quote text and author attractively.</li>
        <li class="mb-4">Implement the getQuote function in JavaScript to fetch and display a new quote from an API when requested.</li>
        <li class="mb-4">Style the Quote App using CSS to achieve an appealing and user-friendly interface.</li>
        <li class="mb-4">Add visual feedback for quote transitions, such as fading or sliding effects, to enhance user experience.</li>
        <li class="mb-4">Incorporate useEffect to manage the initial quote fetching and subsequent updates.</li>
        <li class="mb-4">Display additional information, such as the source or category of the quote, to provide context.</li>
        <li class="mb-4">Test the Quote App thoroughly, ensuring proper functioning of the quote fetching and display features.</li>
        <li class="mb-4">Optimize the code by refactoring and organizing for better maintainability and readability.</li>
        <li class="mb-4">Explore and implement additional features, such as sharing quotes on social media or saving favorites.</li>
        <li class="mb-4">Implement accessibility features, ensuring the Quote App is usable by people with disabilities.</li>
        <li class="mb-4">Apply responsive design principles to make the Quote App mobile-friendly and adaptable to various screen sizes.</li>
        <li class="mb-4">Deploy the Quote App project on a hosting platform to share it with others.</li>
    </ol>
    <p><strong>Additional Information:</strong></p>
    <ul>
        <li>Consider adding an animation or visual effect to highlight new quotes for a more engaging experience.</li>
        <li>Explore the use of dynamic colors or themes to create a visually dynamic and pleasant environment.</li>
        <li>Provide users with the option to filter or categorize quotes based on topics or themes.</li>
        <li>Include a feature to allow users to contribute their favorite quotes or suggest new ones.</li>
        <li>Implement a history feature to allow users to revisit previously displayed quotes.</li>
        <li>Optimize the quote fetching mechanism for quick and responsive updates.</li>
        <li>Consider incorporating a settings panel to customize the appearance or behavior of the Quote App.</li>
        <li>Encourage users to reflect on and share their favorite quotes, fostering a positive and uplifting community.</li>
        <li>Collect user feedback to identify areas for improvement and potential feature enhancements.</li>
    </ul>
</div>
    `,
  },

//To Do List

{
  id: 6,
  category: 1,
  name: 'To Do List',
  image: 'todolist.png',
  description: `<p>This project is part of the JavaScript Course of 
  <a href="https://www.theodinproject.com/lessons/node-path-javascript-todo-list">The Odin Project Curriculum.</a></p>
  The To-Do List app is a colorful and user-friendly tool for managing tasks. It adapts well to different screen sizes, making it easy to use on various devices. The design includes dynamic forms, vibrant colors, and interactive elements like checkboxes. Overall, it offers a simple and enjoyable experience for organizing your tasks.`,
  link: 'https://todolist-reactjsproject.netlify.app/',
  date: '04.01.2024',
  complexity: 'Easy',
  gitHubLink: '',
  steps:`
  <div class='tm-text-gray-dark h6 mt-4 ml-5'>
    <h4 class='col-12 text-warning mb-4'>Steps to Implement a <span class="text-info">Vibrant To-Do List</span></h4>
    <ol class="mb-4">
        <li class="mb-4">Establish the project's foundation with a well-organized file structure, including <span class="text-info">HTML, CSS, and JavaScript</span> files.</li>
        <li class="mb-4">Initiate the <span class="text-info">React environment</span> and streamline the process by installing essential dependencies through tools like <span class="text-info">Create React App</span>.</li>
        <li class="mb-4">Craft an intuitive component structure for the <span class="text-info">To-Do List</span>, outlining elements for <span class="text-info">input forms, task displays, and seamless interaction</span>.</li>
        <li class="mb-4">Implement state management using React hooks, such as <span class="text-info">useState</span>, for efficiently handling tasks and their <span class="text-info">completion statuses</span>.</li>
        <li class="mb-4">Elevate the visual appeal of the <span class="text-info">To-Do List</span> by applying <span class="text-info">CSS styles</span> that create an <span class="text-info">aesthetically pleasing and user-friendly interface</span>.</li>
        <li class="mb-4">Introduce functionality for adding new tasks, marking tasks as completed, and effortlessly deleting tasks to enhance <span class="text-info">user experience</span>.</li>
        <li class="mb-4">Ensure responsiveness by incorporating design principles that adapt the <span class="text-info">To-Do List</span> seamlessly to various <span class="text-info">screen sizes</span>.</li>
        <li class="mb-4">Enhance <span class="text-info">user interaction</span> with dynamic styles, introducing features such as <span class="text-info">highlighting completed tasks or providing instant feedback</span> on user actions.</li>
        <li class="mb-4">Optional: Implement advanced features like <span class="text-info">due dates, priorities, or categorization</span> for a <span class="text-info">comprehensive and personalized task management experience</span>.</li>
        <li class="mb-4">Optimize code by <span class="text-info">refactoring and organizing</span> to improve <span class="text-info">maintainability and readability</span> for future development.</li>
        <li class="mb-4">Explore additional features such as <span class="text-info">task sorting, filtering, or search capabilities</span> to offer users a versatile <span class="text-info">task management solution</span>.</li>
        <li class="mb-4">Ensure <span class="text-info">accessibility features</span> are in place, making the <span class="text-info">To-Do List</span> usable for everyone, including people with <span class="text-info">disabilities</span>.</li>
        <li class="mb-4">Thoroughly <span class="text-info">test the To-Do List</span>, evaluating the functionality of adding, completing, and deleting tasks, as well as overall <span class="text-info">user experience</span>.</li>
        <li class="mb-4">Conclude the project by <span class="text-info">deploying the To-Do List</span> on a hosting platform, making it readily available and shareable with others.</li>
    </ol>
    <p><strong>Some Ideas to Improve the Project:</strong></p>
    <ul>
        <li>Consider incorporating visual cues, such as colors or icons, to distinguish different <span class="text-info">task states</span> and enhance <span class="text-info">user comprehension</span>.</li>
        <li>Explore the use of <span class="text-info">CSS transitions or animations</span> to infuse a delightful visual appeal to <span class="text-info">task interactions</span>.</li>
        <li>Empower users with options to organize tasks based on <span class="text-info">due dates, priorities, or any other relevant criteria</span>.</li>
        <li>Include <span class="text-info">tooltips or help sections</span> to guide users on navigating and utilizing the <span class="text-info">To-Do List</span> effectively.</li>
        <li>Integrate a <span class="text-info">task history or log feature</span>, allowing users to track completed tasks and reflect on their <span class="text-info">productivity</span>.</li>
    </ul>
</div>

  `,

},

//Tic Tac Toe

{
  id: 2,
  category: 1,
  name: 'Tic Tac Toe',
  image: 'tictactoe.png',
  description: `<p>This project is part of the JavaScript Course of 
  <a href="https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe">The Odin Project Curriculum.</a></p>
  The Tic Tac Toe project is a React-based implementation of the classic game. It provides users with an interactive game board where two players can take turns marking X and O in a 3x3 grid. The application features a responsive design, real-time status updates, and a move history log. `,
  link: 'https://tictactoereactjsproject.netlify.app/',
  date: '03.01.2024',
  complexity: 'Easy',
  gitHubLink: 'https://drive.google.com/file/d/1IWowDKEBtGaLPVwxY0VBxz1cQDhBijE6/view?usp=drive_link',
  steps: `
  <div class='tm-text-gray-dark h6 mt-4 ml-5'>
  <h4 class='col-12 text-warning mb-4'>Steps to implement</h4>
  <ol start="1" class="mb-5">
  <li class="mb-4">Create a new React project using <code>npx create-react-app my-tic-tac-toe</code>.</li>
  <li class="mb-4">Replace the contents of <code>src/App.js</code> with the provided React Tic Tac Toe code.</li>
  <li class="mb-4">Style the components using the given CSS for an appealing visual experience.</li>
      <li class="mb-4">Install the required dependencies by running <code>npm install</code> in the project's root directory.</li>
      <li class="mb-4">Explore the code structure to understand the React components, state management, and event handling.</li>
      <li class="mb-4">Add sound effects to enhance the gaming experience. You can use HTML5 audio elements or external libraries.</li>
      <li class="mb-4">Implement a multiplayer feature by integrating a backend server using technologies like Node.js and WebSocket.</li>
      <li class="mb-4">Optimize the project for mobile responsiveness to ensure a seamless experience on various devices.</li>
      <li class="mb-4">Consider adding a scoring system, allowing players to compete and track their performance over multiple games.</li>
      <li class="mb-4">Implement an "Undo" feature to allow players to undo their moves and explore different game scenarios.</li>
      <li class="mb-4">Explore and integrate additional animations or transitions to make the user interface more dynamic.</li>
  </ol>
  <p><strong>Additional Information:</strong></p>
  <p>The project includes various features such as dynamic styling, hover effects, and a rotating color animation for an engaging user experience.</p>
  </div>
  `,
},



//JsCalculator

{
  id: 8,
  category: 2,
  name: 'JavaScript Calculator',
  image: 'jscalculator.png',
  description: '<p>This project is part of the JavaScript Course of <a href="https://www.theodinproject.com/lessons/foundations-calculator">The Odin Project Curriculum.</a></p> This project is a simple calculator built with vanilla JavaScript, HTML, and CSS. It features a responsive design with a starry background animation. The calculator supports basic arithmetic operations, keyboard input, and provides a visually appealing user interface.',
  link: 'https://js-calculator-projectt.netlify.app/',
  date: '10.01.2024',
  complexity: 'Easy',
  gitHubLink: 'https://drive.google.com/file/d/16rJdp9ZfjLdGYnFnklPmCF_h_bjq2w4k/view?usp=drive_link',
  steps:`
  <div class='tm-text-gray-dark h6 mt-4 ml-5'>
    <h4 class='col-12 text-warning mb-4'>Steps to Implement</h4>
    <ol class="mb-4">
        <li class="mb-4">Create the project's file structure with a single HTML file containing the calculator component, and include styles and scripts in the same file.</li>
        <li class="mb-4">Design the calculator component with sections for the screen, buttons, and any additional features you plan to include.</li>
        <li class="mb-4">Implement basic calculator functionalities such as addition, subtraction, multiplication, and division using vanilla JavaScript.</li>
        <li class="mb-4">Style the calculator component using CSS, applying a responsive design with a visually appealing color scheme.</li>
        <li class="mb-4">Enhance user experience by adding keyboard support for number input, operation selection, and result calculation.</li>
        <li class="mb-4">Incorporate additional features like decimal point input, backspace functionality, and a clear button.</li>
        <li class="mb-4">Ensure error handling for scenarios like division by zero and provide informative messages to the user.</li>
        <li class="mb-4">Implement animations or transitions for button interactions to improve the overall look and feel.</li>
        <li class="mb-4">Test the calculator thoroughly, checking for correct calculations, responsive design, and a user-friendly interface.</li>
        <li class="mb-4">Optimize the code for readability and maintainability, considering best practices in JavaScript and CSS.</li>
        <li class="mb-4">Deploy the calculator project to a hosting platform for public access.</li>
    </ol>
    <p><strong>Additional Information:</strong></p>
    <ul>
        <li>Explore the possibility of adding scientific calculator features for advanced mathematical operations.</li>
        <li>Consider implementing a history log to display previous calculations and results.</li>
        <li>Allow users to customize the calculator's appearance and theme preferences.</li>
        <li>Implement accessibility features to ensure the calculator is usable by individuals with disabilities.</li>
        <li>Collect user feedback to identify areas for improvement and potential feature enhancements.</li>
    </ul>
</div>

  `,
},

//Number Guessing

{
  id: 9,
  category: 2,
  name: 'Number Guessing',
  image: 'number-guessing.png',
  description: ' Create an engaging number guessing game using HTML, CSS, and JavaScript. Challenge players to guess a randomly generated number within 10 turns, offering visual feedback and an option for players to start a new game.',
  link: 'https://js-number-guessinggame-project.netlify.app/',
  date: '10.01.2024',
  complexity: 'Easy',
  gitHubLink: 'https://drive.google.com/file/d/18CudiPCDoEIxmexuidp8hTxlAQUfVgx5/view?usp=drive_link',
  steps:`
  <div class='tm-text-gray-dark h6 mt-4 ml-5'>
    <h4 class='col-12 text-warning mb-4'>Steps to Implement</h4>
    <ol class="mb-4">
        <li class="mb-4">Create the HTML file with the necessary structure, including sections for the game title, instructions, input field, and result display.</li>
        <li class="mb-4">Add styles using CSS to create an aesthetically pleasing and responsive layout for the game.</li>
        <li class="mb-4">Integrate JavaScript to generate a random number between 1 and 100 for the user to guess.</li>
        <li class="mb-4">Implement logic to handle user guesses, providing feedback on whether the guess is too high, too low, or correct.</li>
        <li class="mb-4">Include a limit of 10 turns for the user to guess the correct number.</li>
        <li class="mb-4">Style the result display to visually indicate the correctness of the guess, with different colors for correct, too high, and too low guesses.</li>
        <li class="mb-4">Disable the input field and submit button after the game ends, and provide an option to start a new game.</li>
        <li class="mb-4">Enhance user experience by incorporating animations or transitions for game interactions.</li>
        <li class="mb-4">Test the game thoroughly, ensuring that it functions as expected and provides a satisfying user experience.</li>
        <li class="mb-4">Optimize the code for readability and maintainability, following best practices in HTML, CSS, and JavaScript.</li>
        <li class="mb-4">Deploy the game project to a hosting platform for public access.</li>
    </ol>
    <p><strong>Additional Information:</strong></p>
    <ul>
        <li>Consider adding sound effects or background music to enhance the gaming experience.</li>
        <li>Implement a scoring system or timer to add an extra layer of challenge for players.</li>
        <li>Allow users to customize the game settings, such as the number range or the maximum number of turns.</li>
        <li>Implement a leaderboard to track and display the highest scores of players.</li>
        <li>Solicit user feedback to identify areas for improvement and potential feature enhancements.</li>
    </ul>
</div>
`,
},

{
  id: 10,
  category: 1,
  name: 'Travel Advisor App',
  image: 'travel-advisorbg.jpg',
  description: ` The Travel Advisor website is built using ReactJS.
  It integrates an API to display locations, hotels, restaurants, and attractions. The website fetches data from external APIs to provide real-time 
  information on places, including ratings and reviewsUser interactions are handled through JavaScript, allowing seamless browsing and exploration of different locations.
  `,
  link: 'https://travel-advissor.netlify.app/',
  date: '18.02.2024',
  complexity: 'Moderate',
  gitHubLink: 'https://drive.google.com/file/d/196463o7Z9RJRoCneEee6tmY4vG73JWF7/view?usp=sharing',
  steps:`
  <div class='tm-text-gray-dark h6 mt-4 ml-5'>
    <h4 class='col-12 text-warning mb-4'>Steps to Implement</h4>
    <ol class="mb-4">
        <li class="mb-4">Create a new project folder and set up the basic structure with ReactJS.</li>
        <li class="mb-4">Obtain API keys for Google Maps and the location data provider (e.g., Google Places API) by following their respective documentation.</li>
        <li class="mb-4">Integrate Google Maps API into your website to display an interactive map. Follow the documentation for map initialization and customization.</li>
        <li class="mb-4">Implement a search feature that allows users to enter a location or choose from predefined options to explore hotels, restaurants, and attractions.</li>
        <li class="mb-4">Utilize the location data provider API to fetch details about hotels, restaurants, and attractions based on user input or map interactions.</li>
        <li class="mb-4">Display the fetched data on the map with markers and additional information (such as name, rating, and type of place).</li>
        <li class="mb-4">Implement a user-friendly interface that allows users to filter and sort the displayed results.</li>
        <li class="mb-4">Add functionality for users to click on a marker to view more detailed information about a specific location.</li>
        <li class="mb-4">Enhance the website's design and responsiveness to provide a seamless experience across various devices.</li>
        <li class="mb-4">Implement error handling for scenarios like failed API requests or no results found.</li>
        <li class="mb-4">Optimize the website for performance, considering factors such as lazy loading images and minimizing unnecessary API requests.</li>
    </ol>
    <p><strong>Additional Information:</strong></p>
    <ul>
        <li>Consider implementing user authentication to provide personalized recommendations and save user preferences.</li>
        <li>Explore the possibility of incorporating a weather API to provide users with current and forecasted weather conditions for their chosen locations.</li>
        <li>Ensure compliance with data protection regulations and prioritize user privacy when handling location-related information.</li>
        <li>Explore ways to monetize the platform, such as partnerships with local businesses, affiliate marketing, or premium subscription services.</li>
        <li>Regularly update and maintain the website to keep pace with changes in APIs, security requirements, and user expectations.</li>
    </ul>
</div>
`,
},

{
  id: 11,
  category: 2,
  name: 'Don`t get mad games',
  image: 'dont-get-mad.jpg',
  description: `In this example we create a simple Don't Get Mad Games Website using HTML, CSS, and JavaScript. The games are designed to be interactive and enjoyable,
  with JavaScript handling game logic. In this website AI coding is used to minimise writing code and simplify the overall process.`,
  link: 'https://dont-get-mad-games.netlify.app/',
  date: '18.02.2024',
  complexity: 'Moderate',
  gitHubLink: 'https://github.com/kookiezwthtea/dont-get-mad-web-games',
  steps:`
  <div class='tm-text-gray-dark h6 mt-4 ml-5'>
    <h4 class='col-12 text-warning mb-4'>Steps to Implement</h4>
    <ol class="mb-4">
        <li class="mb-4">Create a responsive and user-friendly landing page for your website using HTML, CSS, and possibly a front-end framework like Bootstrap or Tailwind CSS.</li>
        <li class="mb-4">Integrate JavaScript to design and implement interactive and engaging small games. Utilize ChatGPT for game logic and interactions.</li>
        <li class="mb-4">Implement a navigation system to allow users to seamlessly switch between different games. Consider using a sidebar, tabs, or a dropdown menu for navigation.</li>
        <li class="mb-4">Optimize the website for performance by minimizing load times, compressing images, and implementing lazy loading for non-essential resources.</li>
        <li class="mb-4">Apply consistent styling across games to maintain a cohesive and visually appealing user interface. Consider creating a shared design system or theme.</li>
        <li class="mb-4">Add a scoring or leaderboard system to encourage competition among users. Utilize local storage or backend services to persist and retrieve scores.</li>
        <li class="mb-4">Implement user authentication if you want to enable features like saving progress, tracking achievements, or personalizing the gaming experience.</li>
        <li class="mb-4">Enhance user experience by incorporating animations or transitions for game interactions.</li>
        <li class="mb-4">Ensure accessibility by implementing keyboard shortcuts, providing alternative text for images, and following best practices for web accessibility.</li>
        <li class="mb-4">Optimize the code for readability and maintainability, following best practices in HTML, CSS, and JavaScript.</li>
        <li class="mb-4">Test the website across different browsers and devices to ensure a consistent and enjoyable experience for all users.</li>
        <li class="mb-4">Deploy the game project to a hosting platform for public access.</li>
    </ol>
    <p><strong>Additional Information:</strong></p>
    <ul>
        <li>Consider adding sound effects or background music to enhance the gaming experience.</li>
        <li>Implement a scoring system or timer to add an extra layer of challenge for players.</li>
        <li>Regularly update and add new games to keep the content fresh and encourage users to return for more enjoyable experiences. Solicit suggestions and feedback from your audience to shape future developments.</li>
        <li>Ensure that your website complies with legal and ethical standards, especially if you plan to collect user data or implement features like user authentication. Familiarize yourself with privacy regulations and take necessary precautions.</li>
        <li>Solicit user feedback to identify areas for improvement and potential feature enhancements.</li>
    </ul>
</div>
`,
},

{
  id: 12,
  category: 1,
  name: 'QuizzLandia',
  image: 'quizz-landia.jpg',
  description: `This is a quiz website is a React.js project with a responsive design. It fetches quiz data and utilizes 
  state management for user interactions. The application offers a dynamic and engaging quiz experience, ensuring compatibility across devices.
  `,
  link: 'https://quizzlandia.netlify.app/',
  date: '18.02.2024',
  complexity: 'Moderate',
  gitHubLink: 'https://github.com/kookiezwthtea/Quizz-web-app',
  steps:`
  <div class='tm-text-gray-dark h6 mt-4 ml-5'>
    <h4 class='col-12 text-warning mb-4'>Steps to Implement</h4>
    <ol class="mb-4">
        <li class="mb-4">Create a new React.js project using a tool like Create React App (CRA).</li>
        <li class="mb-4">Design and structure the quiz components, including questions, options, and a quiz container.</li>
        <li class="mb-4">Implement state management to track the current question, user responses, and quiz progress.</li>
        <li class="mb-4">Create a responsive and user-friendly interface for answering questions and navigating through the quiz.</li>
        <li class="mb-4">Calculate and display the final score at the end of the quiz based on user responses.</li>
        <li class="mb-4">Integrate animations or transitions to enhance the overall user experience.</li>
        <li class="mb-4">Implement a results page with detailed feedback on each question and the overall quiz performance.</li>
    </ol>
    <p><strong>Additional Information:</strong></p>
    <ul>
        <li>Include a variety of question types, such as multiple-choice, true/false, and open-ended questions.</li>
        <li>Use responsive design principles to ensure the quiz is accessible on various devices, including smartphones and tablets.</li>
        <li>Include engaging visuals, such as images or icons, to make the quiz more visually appealing.<</li>
        <li>Provide clear instructions and feedback to guide users through the quiz-taking process.</li>
        <li>Always test the quiz thoroughly to identify and fix any potential bugs or issues.</li>
    </ul>
</div>
`,
},




];

export default projects;

