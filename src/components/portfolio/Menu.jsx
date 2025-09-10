import Work1 from "../../assets/portfolio.png";
import Work2 from "../../assets/Invitacion.png";
import Work3 from "../../assets/Residencial.png";
import Work4 from "../../assets/work-4.svg";
import Work5 from "../../assets/work-5.svg";
import Work6 from "../../assets/work-6.svg";
import Residencial from "../../assets/Residencial.mp4";


const Menu = [
    {
        id: 1,
        image: Work1,
        title: "Portfolio Website",
        category: "Frontend",
        url: 'https://alexandra-portfolio-cf21c.web.app/#home',
        description: 'Personal porfolio website made with react to showcase my projects and skills as a developer.',
        technologies: ['ReactJS', 'CSS', 'JavaScript']
    },
    {
        id: 2,
        image: Work2,
        title: "Wedding Invitation",
        category: "Frontend",
        url: 'https://alexandra-hael-invitacion.web.app/',
        description: 'Weeding invitation website with RSVP functionality to manage guest responses.',
        technologies: ['ReactJS', 'SASS', 'JavaScript', 'Vite']
    },
    {
        id: 3,
        image: Work3,
        title: "Residencial Access",
        category: "Fullstack",
        url: Residencial,
        description: 'Application for managing residential access control, including user authentication and visitor logging.',
        technologies: ['ReactJS', 'SASS', 'Nodejs', 'MySQL' ]
    },
    // {
    //     id: 4,
    //     image: Work4,
    //     title: "Onboarding Motivation",
    //     category: "Design",
    //     url: 'https://alexandra-portfolio-cf21c.web.app/#home'
    // },
    // {
    //     id: 5,
    //     image: Work5,
    //     title: "iMac Mockup Design",
    //     category: "Creative",
    //     url: 'https://alexandra-portfolio-cf21c.web.app/#home'
    // },
    // {
    //     id: 6,
    //     image: Work6,
    //     title: "Game Store App Concept",
    //     category: "Art",
    //     url: 'https://alexandra-portfolio-cf21c.web.app/#home'
    // },
];

export default Menu;