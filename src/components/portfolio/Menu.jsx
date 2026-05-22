import Work1 from "../../assets/portfolio.png";
import Work2 from "../../assets/Invitacion.png";
import Work3 from "../../assets/Residencial.png";
import Work4 from "../../assets/Intranet.png";
import Work5 from "../../assets/Clinica.png";
import Work6 from "../../assets/work-6.svg";
import Residencial from "../../assets/Residencial.mp4";
import Intranet from "../../assets/Intranet.mp4";
import Clinica from "../../assets/Clinica.mp4";


const Menu = [
    {
        id: 1,
        image: Work1,
        title: "Portfolio Website",
        category: "Frontend",
        url: 'https://alexandra-portfolio-cf21c.web.app/#home',
        description: 'Personal porfolio website made with react to showcase my projects and skills as a developer.',
        technologies: ['ReactJS', 'CSS', 'JavaScript', 'Firebase']
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
    {
        id: 4,
        image: Work4,
        title: "Intranet Dashboard",
        category: "Fullstack",
        url: Intranet,
        description: 'Application for user management, permissions and data visualization, as well as for customer applications for loans and savings funds.',
        technologies: ['ReactJS', 'CSS', 'Nodejs', 'SQLServer']
    },
    {
        id: 5,
        image: Work5,
        title: "Clinica Management System",
        category: "Fullstack",
        url: Clinica,
        description: 'Clinic products, including inventory management, sales tracking and reporting. It also includes an hotel module for managing room reservations and hotel reports.',
        technologies: ['ReactJS', 'CSS', 'Nodejs', 'SQLServer']
    },
    // {
    //     id: 6,
    //     image: Work6,
    //     title: "Game Store App Concept",
    //     category: "Art",
    //     url: 'https://alexandra-portfolio-cf21c.web.app/#home'
    // },
];

export default Menu;