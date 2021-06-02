const data = {
  skills: [
    {
      _id: 1,
      name: "HTML",
      percent: 90,
      description: [
        "HTML concepts,",
        "tags which are most widely used",
        "Forms, Embedding Multimedia, Vector Graphics",
        "Solid structures",
      ],

      picture: "images/skills/html.png",
      hadCertificate: true,
      certificate: "certificate/webDevelopment.pdf",
    },
    {
      _id: 2,
      name: "CSS",
      picture: "images/skills/css.png",
      description: [
        "CSS architecture: component-based design, BEM, writing reusable code, etc.",
        "Tons of modern CSS techniques to create stunning designs and effects",
        "Advanced CSS animations with @keyframes, animation and transition,",
        "Advanced responsive design: media queries, mobile-first vs desktop-first, em vs rem units, etc.",
        "Responsive images in HTML and CSS for faster pageloads,",
        "Flexbox layouts,  main concepts, introduction to both flex container and flex item specific properties, advanced positioning techniques applied to a huge real-world project",
        "CSS Grid layouts",
      ],

      percent: 90,
      hadCertificate: true,
      certificate: "cssSass.pdf",
    },
    {
      _id: 3,
      name: "JavaScript",
      picture: "images/skills/js.png",
      description: [
        "JavaScript fundamentals (variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings)",
        "Modern OOP(Classes, constructors, prototypal inheritance, encapsulation)",
        "Asynchronous JavaScript (Event loop, promises, async/await, AJAX calls and APIs),",
        "Modern ES6+ (arrow functions, destructuring, spread operator, optional chaining (ES2020))",
      ],

      percent: 80,
      hadCertificate: true,
      certificate: "certificate/JavaScript.pdf",
    },
    {
      _id: 4,
      name: "React",
      picture: "images/skills/react.png",
      description: [
        "Building content with JSX,",
        "communicating with props,",
        "structuring App with class-based components or functional components,",
        "user events and state to create interactive applications,",
        "React Hooks (useState, useEffect, useContext, useReducer, useRef),",
        "handling user input with forms and events,",
        "making API requests with React",
      ],

      percent: 68,
      hadCertificate: true,
      certificate: "certificate/webDevelopment.pdf",
    },
    {
      _id: 5,
      name: "Redux",
      picture: "images/skills/redux.png",
      description: [
        "Integrating React with Redux,",
        "Async actions with Redux thunk,",
        "Redux Store design, Redux dev tools,",
        "Handling forms with Redux forms,",
        "Middlewares with Redux, Actions and Reducers",
      ],

      percent: 70,
      hadCertificate: true,
      certificate: "certificate/webDevelopment.pdf",
    },
    {
      _id: 6,
      name: "Sass",
      picture: "images/skills/sass.png",
      description: [
        "structure your code using SASS",
        "Sass basic features,",
        "SASS compiler",
        "variables and mixins in order to write more concise and flexible code.",
        "extend, placeholder selectors, functions, imports, partials,",
        "make websites responsive for all screen sizes using some SASS techniques.",
      ],

      percent: 80,
      hadCertificate: true,
      certificate: "certificate/cssSass.pdf",
    },
    {
      _id: 7,
      name: "Bootstrap",
      picture: "images/skills/bootstrap.png",
      description: [
        "Bootstrap component",
        "customize Bootstrap",
        "he ins and outs of the new Bootstrap 4 utility classes",
      ],

      percent: 60,
      hadCertificate: false,
    },
    {
      _id: 8,
      name: "NodeJs",
      picture: "images/skills/nodejs.png",
      description: [
        "Fundamentals of Node.js, core modules and NPM (Node Package Manager)",
        "Fundamentals of Express (Node.js framework): routing, middleware, sending responses, etc.",
        "RESTful API design and development with advanced features: filtering, sorting, aliasing, pagination",
        "CRUD operations with MongoDB database locally and on the Atlas platform (in the cloud)",
      ],
      percent: 55,
      hadCertificate: false,
    },
    {
      _id: 9,
      name: "MongoDB",
      picture: "images/skills/mongodb.png",
      description: [
        "Fundamentals of Mongoose (MongoDB JS driver): Data models, CRUD operations, data validation, and middleware",
        "How to work with data in NoSQL databases",
        "Advanced data modelling: relationships between data, embedding, referencing,",
      ],
      percent: 50,
      hadCertificate: false,
    },
    {
      _id: 10,
      name: "Framer Motion",
      picture: "images/skills/framer-motion.png",
      description: [
        "basic properties: animate, gestures, variants, motionValues, Scroll-based animations, Propagation, Orchestration, Dynamic variants",
        "Component animation controls",
        "AnimateSharedLayout, AnimatePresence, LazyMotion",
      ],
      percent: 90,
      hadCertificate: false,
    },
  ],
  services: [
    {
      id: 1,
      image: "images/services/development.gif",
      icon: "images/services/development.png",
      name: "Web Development",
      description:
        "I provide website development services that are on the cutting edge of today’s technologies. I start each development project with an assessment of its requirements in order to create clear, iteration-based development plan.  ",
    },
    {
      id: 2,
      image: "images/services/design.gif",
      icon: "images/services/design.png",
      name: "Web Design",
      description:
        "Simplicity is one of the golden rules of website design. The audience should have an enjoyable, positive experience when using your website. Whether their objective is reading content, watching a video or enrolling in a course, every action should be clear and concise throughout the website.",
    },
    {
      id: 3,
      image: "images/services/responsive.gif",
      icon: "images/services/responsive.png",
      name: "Responsive Design",
      description:
        "Having a responsive layout means that your website fluidly resizes for optimal viewing regardless of the screen size or device (desktop computer, laptop, tablet or smart phone). This ensures ease of use and a better audience experience without the need for panning, scrolling or resizing",
    },
    {
      id: 4,
      image: "images/services/database.gif",
      icon: "images/services/database.png",
      name: "Database",
      description:
        "I basicly use NOSQL database (MongoDB, Mongoose). NoSQL tends to be a better option for modern applications that have more complex, constantly changing data sets, requiring a flexible data model that doesn't need to be immediately defined.",
    },
    {
      id: 5,
      image: "images/services/deployment.gif",
      icon: "images/services/deployment.png",
      name: "Deployment",
      description:
        "I prefer Netlify, Vercel for front-end part and Heroku for server side. Ease of use and Simple pricing- Netlify is known for its remarkable ease of use. It saves a lot of time for users who require fast custom website hosting. Heroku ensures an optimal level of security for servers, application code and prevents any possible issues",
    },
  ],

  projects: [
    {
      _id: 1,
      name: "Chat App",
      image: "images/projects/chat_app.JPG",

      category: "React",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      githubURL: "https://github.com/Shukhratmamadaliev9797/chat-app",
      projectURL: "https://shukhrat-chat-app.netlify.app/",
    },
    {
      _id: 2,
      name: "Calculator",
      image: "images/projects/calculator.JPG",

      category: "Javascript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      githubURL: "https://github.com/Shukhratmamadaliev9797/calculator.io",
      projectURL: "https://shukhratmamadaliev9797.github.io/calculator.io/",
    },
    {
      _id: 3,
      name: "Dice Game",
      image: "images/projects/dice_game.JPG",
      category: "Javascript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      githubURL: "https://github.com/Shukhratmamadaliev9797/dice_game-app",
      projectURL: "https://shukhratmamadaliev9797.github.io/dice_game-app/",
    },
    {
      _id: 4,
      name: "Bankist App",
      image: "images/projects/bankist_app.JPG",
      category: "Javascript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      githubURL: "https://github.com/Shukhratmamadaliev9797/bankist-app",
      projectURL: "https://shukhratmamadaliev9797.github.io/bankist-app/",
    },
    {
      _id: 5,
      name: "Type and Speak app",
      image: "images/projects/type-and-speak.JPG",
      category: "Javascript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      githubURL: "https://github.com/Shukhratmamadaliev9797/type-n-speak.io",
      projectURL: "https://shukhratmamadaliev9797.github.io/type-n-speak.io/",
    },
    {
      _id: 6,
      name: "Weather app",
      image: "images/projects/weather.JPG",
      category: "Javascript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      githubURL: "https://github.com/Shukhratmamadaliev9797/weather.io",
      projectURL: "https://shukhratmamadaliev9797.github.io/weather.io/",
    },
    {
      _id: 7,
      name: "Bankist App",
      image: "images/projects/bankist_app.JPG",
      category: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      githubURL: "https://github.com/Shukhratmamadaliev9797/bankist-app",
      projectURL: "https://shukhratmamadaliev9797.github.io/bankist-app/",
    },
  ],
};

export default data;
