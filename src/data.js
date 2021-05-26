const data = {
  skills: [
    {
      _id: 1,
      name: "HTML",
      percent: 90,
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      picture: "images/skills/html.png",
      hadCertificate: true,
      certificate: "certificate/webDevelopment.pdf",
    },
    {
      _id: 2,
      name: "CSS",
      picture: "images/skills/css.png",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      percent: 90,
      hadCertificate: true,
      certificate: "cssSass.pdf",
    },
    {
      _id: 3,
      name: "JavaScript",
      picture: "images/skills/js.png",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      percent: 80,
      hadCertificate: true,
      certificate: "certificate/JavaScript.pdf",
    },
    {
      _id: 4,
      name: "React",
      picture: "images/skills/react.png",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      percent: 68,
      hadCertificate: true,
      certificate: "certificate/webDevelopment.pdf",
    },
    {
      _id: 5,
      name: "Redux",
      picture: "images/skills/redux.png",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      percent: 70,
      hadCertificate: true,
      certificate: "certificate/webDevelopment.pdf",
    },
    {
      _id: 6,
      name: "Sass",
      picture: "images/skills/sass.png",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      percent: 80,
      hadCertificate: true,
      certificate: "certificate/cssSass.pdf",
    },
    {
      _id: 7,
      name: "Bootstrap",
      picture: "images/skills/bootstrap.png",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      percent: 60,
      hadCertificate: false,
    },
    {
      _id: 8,
      name: "NodeJs",
      picture: "images/skills/nodejs.png",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      percent: 55,
      hadCertificate: false,
    },
    {
      _id: 9,
      name: "MongoDB",
      picture: "images/skills/mongodb.png",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      percent: 50,
      hadCertificate: false,
    },
  ],
  services: [
    {
      id: 1,
      image: "images/services/development.gif",
      icon: "far fa-file-code",
      name: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 2,
      image: "images/services/design.gif",
      icon: "fab fa-css3-alt",
      name: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 3,
      image: "images/services/responsive.gif",
      icon: "fas fa-desktop",
      name: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 4,
      image: "images/services/database.gif",
      icon: "fas fa-server",
      name: "Database",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
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
