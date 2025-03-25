import {
  mobile,
  backend,
  chatlogo,
  doclogo,
  reslogo4,
  web,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.png",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/tech/mongodb.png",
  },
  {
    name: "git",
    icon: "/tech/git.png",
  },
  {
    name: "MySql",
    icon: "/tech/mysql.png",
  },
  {
    name: "Bootstrap",
    icon: "/tech/bootstrap.png"
  },
  {
    name: "cpp",
    icon: "/tech/cpp.png"
  },
  {
    name: "python",
    icon: "/tech/python.png"
  },
  {
    name: "java",
    icon: "/tech/java.png"
  }
];

const experiences = [
  {
    title: "Syncronous Chat Application",
    color: "pink-text-gradient",
    icon: chatlogo,
    iconBg: "#383E56",
    type: "Individual project",
    techStack: "MongoDB Express.js React.js Node.js",
    sourcelink: "https://github.com/HimagiriNandan/Syncronous-chat-app",
    points: [
      "Designed a dynamic front-end with react, ensuring a seamless user experience across different device.",
      "Used Tailwind CSS and ShadCN components for a sleek, responsive, and customizable user interface.",
      "Users can engage in private or group conversations with seamless real-time communication.",
      "Integrated MongoDB for storing user data, chat history, real-time updates.",
    ],
  },
  {
    title: "IdentiDocx",
    color: "text-sky-500",
    icon: doclogo,
    iconBg: "#E6DEDD",
    type: "Group project",
    techStack: "React.js Bootstrap RestAPI's",
    sourcelink: "https://github.com/theN94/webapp",
    points: [
      "Developed a responsive and user-friendly interface for IdentiDocx using React.js and Bootstrap, enhancing overall user experience.",
      "Collaborated with backend teams to ensure seamless integration of API endpoints and optimized data flow.",
      "Implemented features to identify and alert users of embedded government-issued personally identifiable information (PII) in uploaded documents, ensuring compliance with data protection and privacy regulations.",
    ],
  },
  {
    title: "Khojo college",
    color: "text-orange-600",
    icon: reslogo4,
    iconBg: "#383E56",
    type: "Team project",
    techStack: "react.js Node.js Express.js MongoDB",
    sourcelink: "https://github.com/HimagiriNandan/College_Khojo",
    points: [
      "Engineered a college recommendation system based on JEE scores, board marks, and category filters, improving student decision-making by 85%.",
      "Developed mock tests, study materials, and entrance exam listings, enhancing student preparation efficiency by 70%.",
      "Designed a career exploration module, enabling users to explore diverse paths and relevant exams, boosting career awareness by 60%.",
      "Integrated an interactive performance tracking graph for test result visualization, improving test analysis by 80%."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had a fantastic experience collaborating with Tuduru Himagiri Nandan. His exceptional frontend skills greatly enhanced out project, and I was able to improve my Python and Flask skills throughout the hackathon. Looking forward to more opportunities to learn and grow together!",
    name: "Naga Srinath",
    image: "https://randomuser.me/api/portraits/women/4.jpg", // I should change image of his here...
  },
];


export { services, technologies, experiences, testimonials };