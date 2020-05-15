import Web from './assets/web.svg';
import Mobile from './assets/mobile.svg';
import Desktop from './assets/desktop.svg';

import InTouch from './assets/InTouch.svg';
import DressFit from './assets/DressFit.svg';
import RespondMe from './assets/RespondMe.svg';
import ScrumThis from './assets/ScrumThis.svg';
import Female from './assets/female.jpg';
import Male from './assets/male.jpg';

import NodeLogo from './assets/node.svg';
import MongoDBLogo from './assets/mongodb.svg';
import ReactLogo from './assets/react.svg';
import ElectronLogo from './assets/electron.svg';
import TypeScriptLogo from './assets/ts.svg';

import picOne from './assets/slider1.jpg';
import picTwo from './assets/slider2.jpg';
import picThree from './assets/slider3.jpg';
import picFour from './assets/slider4.jpg';
import picFive from './assets/slider5.jpg';

export const sliderPics = [picOne, picTwo, picThree, picFour, picFive];

export const services = [
    {
        id: 1,
        name: 'Web development',
        image: Web,
        description: 'We build highly scalable platforms and well-tested products that are ready to handle millions of users daily.',
        linkText: 'Develop your web app'
    },
    {
        id: 2,
        name: 'Mobile development',
        image: Mobile,
        description: 'iOS and Android apps built with React Native based on the robust Node.js backend will satisfy every end-user.',
        linkText: 'Develop your mobile app'
    },
    {
        id: 3,
        name: 'Desktop development',
        image: Desktop,
        description: 'With the use of Electron JS, we build amazing desktop apps. Let us build one of those amazing apps for you!',
        linkText: 'Develop your desktop app'
    }
]

export const projects = [
    {
        id: 1,
        name: 'InTouch',
        image: InTouch,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ab nesciunt sit, rerum facere quam ea voluptates? Possimus saepe ad reprehenderit suscipit vel dignissimos, fuga numquam unde incidunt accusantium atque, deserunt accusamus quaerat voluptate. Laudantium corporis delectus, eaque facilis at accusamus vitae quam eos perferendis perspiciatis! Aut, rerum officiis.',
        type: 'Web application',
        technologies: ['React.js', 'Node.js', 'MongoDB']
    },
    {
        id: 2,
        name: 'DressFit',
        image: DressFit,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ab nesciunt sit, rerum facere quam ea voluptates? Possimus saepe ad reprehenderit suscipit vel dignissimos, fuga numquam unde incidunt accusantium atque, deserunt accusamus quaerat voluptate. Laudantium corporis delectus, eaque facilis at accusamus vitae quam eos perferendis perspiciatis! Aut, rerum officiis.',
        type: 'Web application',
        technologies: ['React.js', 'TypeScript', 'ReactNative', 'Node.js', 'MongoDB']
    },
    {
        id: 3,
        name: 'RespondMe',
        image: RespondMe,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ab nesciunt sit, rerum facere quam ea voluptates? Possimus saepe ad reprehenderit suscipit vel dignissimos, fuga numquam unde incidunt accusantium atque, deserunt accusamus quaerat voluptate. Laudantium corporis delectus, eaque facilis at accusamus vitae quam eos perferendis perspiciatis! Aut, rerum officiis.',
        type: 'Mobile application',
        technologies: ['ReactNative', 'Node.js', 'MongoDB']
    },
    {
        id: 4,
        name: 'ScrumThis',
        image: ScrumThis,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ab nesciunt sit, rerum facere quam ea voluptates? Possimus saepe ad reprehenderit suscipit vel dignissimos, fuga numquam unde incidunt accusantium atque, deserunt accusamus quaerat voluptate. Laudantium corporis delectus, eaque facilis at accusamus vitae quam eos perferendis perspiciatis! Aut, rerum officiis.',
        type: 'Desktop application',
        technologies: ['React.js', 'Electron.js', 'Node.js', 'MongoDB']
    }
];

export const technologies = [NodeLogo, MongoDBLogo, ReactLogo, ElectronLogo, TypeScriptLogo];

export const employees = [
    {
        id: 1,
        name: 'Luke',
        position: 'CEO',
        gender: 'male',
    },
    {
        id: 2,
        name: 'Kate',
        position: 'COO',
        gender: 'female',
    },
    {
        id: 3,
        name: 'John',
        position: 'CTO',
        gender: 'male',
    },
    {
        id: 4,
        name: 'Mark',
        position: 'Product Owner',
        gender: 'male',
    },
    {
        id: 5,
        name: 'Joanne',
        position: 'Project Manager',
        gender: 'female',
    },
    {
        id: 6,
        name: 'Ashley',
        position: 'UX Designer',
        gender: 'female',
    },
    {
        id: 7,
        name: 'Brad',
        position: 'JS Developer',
        gender: 'male',
    },
    {
        id: 8,
        name: 'Sandra',
        position: 'UI Designer',
        gender: 'female',
    }
];

export const categories = ['all', 'business', 'development'];

export const posts = [
    {
        id: 1,
        title: 'RespondMe as best mobile app',
        image: RespondMe,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a cumque saepe rem quia nisi molestias doloribus, reiciendis tempore fugit aliquid ad deserunt voluptate voluptatibus...',
        author: 'Kate',
        avatar: Female,
        date: '10/05/2020',
        category: 'business'
    },
    {
        id: 2,
        title: 'InTouch better than Messenger?',
        image: InTouch,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a cumque saepe rem quia nisi molestias doloribus, reiciendis tempore fugit aliquid ad deserunt voluptate voluptatibus...',
        author: 'Luke',
        avatar: Male,
        date: '29/04/2020',
        category: 'development'
    },
    {
        id: 3,
        title: 'DressFit growing ranges',
        image: DressFit,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a cumque saepe rem quia nisi molestias doloribus, reiciendis tempore fugit aliquid ad deserunt voluptate voluptatibus...',
        author: 'Chris',
        avatar: Male,
        date: '16/04/2020',
        category: 'business'
    },
    {
        id: 4,
        title: 'Agile software development',
        image: ScrumThis,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a cumque saepe rem quia nisi molestias doloribus, reiciendis tempore fugit aliquid ad deserunt voluptate voluptatibus...',
        author: 'Joanne',
        avatar: Female,
        date: '08/04/2020',
        category: 'development'
    },
    {
        id: 5,
        title: 'Another post about RespondMe',
        image: RespondMe,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a cumque saepe rem quia nisi molestias doloribus, reiciendis tempore fugit aliquid ad deserunt voluptate voluptatibus...',
        author: 'Kate',
        avatar: Female,
        date: '02/04/2020',
        category: 'business'
    },
    {
        id: 6,
        title: 'Another post about InTouch',
        image: InTouch,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a cumque saepe rem quia nisi molestias doloribus, reiciendis tempore fugit aliquid ad deserunt voluptate voluptatibus...',
        author: 'Luke',
        avatar: Male,
        date: '27/03/2020',
        category: 'development'
    },
    {
        id: 7,
        title: 'Another post about DressFit',
        image: DressFit,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a cumque saepe rem quia nisi molestias doloribus, reiciendis tempore fugit aliquid ad deserunt voluptate voluptatibus...',
        author: 'Chris',
        avatar: Male,
        date: '21/03/2020',
        category: 'business'
    },
    {
        id: 8,
        title: 'Another post about ScrumThis',
        image: ScrumThis,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a cumque saepe rem quia nisi molestias doloribus, reiciendis tempore fugit aliquid ad deserunt voluptate voluptatibus...',
        author: 'Joanne',
        avatar: Female,
        date: '16/03/2020',
        category: 'development'
    },
];

export const careers = [
    {
        name: 'Junior JavaScript Fullstack Developer',
        responsibilities: [
            'At least 1 year of JavaScript experience in programming modern internet applications', 
            'You are proficient in React (or alternative JS frameworks)', 
            'You are happy to create a reliable backend using Node, MongoDB (noSQL)', 
            'Express and restify are not just random words for you', 
            'You jump for joy at the thought of WebSockets communication', 
            'You know HTML 5 and SASS / SCSS', 'Working with a git is no mystery for you', 
            'You run without any problems in a Unix-like environment (Linux / macOS)', 
            'You communicate freely in English', 'You have at least basic knowledge of ES6.', 
            'You are curious and passionate about programming',
        ],
        benefits: [
            'Work in modern technologies that we choose together',
            'Continuous professional development (training, workshops)',
            'English lessons with Native Speaker (100% funding)',
            'Flexible working time',
            'Fresh fruit, coffee, tea in the office, integration events',
            'Salary: 1000 - 2000 EUR'
        ],
        salary: '1000 - 2000 EUR'
    },
    {
        name: 'Mid JavaScript Fullstack Developer',
        responsibilities: [
            'At least 2 years of JavaScript experience in programming modern internet applications', 
            'You are proficient in React (or alternative JS frameworks)', 
            'You are happy to create a reliable backend using Node, MongoDB (noSQL)', 
            'Express and restify are not just random words for you', 
            'You jump for joy at the thought of WebSockets communication', 
            'You know HTML 5 and SASS / SCSS', 'Working with a git is no mystery for you', 
            'You run without any problems in a Unix-like environment (Linux / macOS)', 
            'You communicate freely in English', 
            'You are curious and passionate about programming', 
            'You have at least basic knowledge of ES6.'],
        benefits: [
            'Work in modern technologies that we choose together',
            'Continuous professional development (training, workshops)',
            'English lessons with Native Speaker (100% funding)',
            'Flexible working time',
            'Fresh fruit, coffee, tea in the office, integration events',
            'Salary: 1500 - 3000 EUR'
        ],
        salary: '1500 - 3000 EUR'
    },
    {
        name: 'Senior JavaScript Fullstack Developer',
        responsibilities: [
            'At least 3 years of JavaScript experience in programming modern internet applications', 
            'You are proficient in React (or alternative JS frameworks)', 
            'You are happy to create a reliable backend using Node, MongoDB (noSQL)', 
            'Express and restify are not just random words for you', 
            'You jump for joy at the thought of WebSockets communication', 
            'You know HTML 5 and SASS / SCSS', 'Working with a git is no mystery for you', 
            'You run without any problems in a Unix-like environment (Linux / macOS)', 
            'You communicate freely in English', 
            'You are curious and passionate about programming', 
            'You have at least basic knowledge of ES6.'],
        benefits: [
            'Work in modern technologies that we choose together',
            'Continuous professional development (training, workshops)',
            'English lessons with Native Speaker (100% funding)',
            'Flexible working time',
            'Fresh fruit, coffee, tea in the office, integration events',
            'Salary: 2500-4500 EUR'
        ],
        salary: '2500 - 4500 EUR'
    }
];

export const testimonials = [
    {
        id: 1,
        content: 'Best React developers I have ever worked with.',
        author: "Jennifer",
        avatar: Female,
        position: 'CEO',
        company: "Facebook",
        grade: 4,
        deliveredProduct: 'Web application'
    }, 
    {
        id: 2,
        content: 'Excellent JavaScript knowledge.',
        author: "John",
        avatar: Male,
        position: 'CTO',
        company: "Snapchat",
        grade: 5,
        deliveredProduct: 'Web application'
    }, 
    {
        id: 3,
        content: "They provide top-notch products. Working with something. is a pleasure.",
        author: "Joanne",
        avatar: Female,
        position: 'CTO',
        company: "Twitter",
        grade: 5,
        deliveredProduct: 'Mobile application'
    }, 
    {
        id: 4,
        content: "If you need a team that understands your needs perfectly, something. is the best choice!",
        author: "Bruce",
        avatar: Male,
        position: 'CEO',
        company: "YouTube",
        grade: 5,
        deliveredProduct: 'Web application'
    }
];

export const values = [
    {
        name: 'lorem',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ab nesciunt sit, rerum facere quam ea voluptates.'
    }, 
    {
        name: 'ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ab nesciunt sit, rerum facere quam ea voluptates.'
    },
    {
        name: 'dolor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ab nesciunt sit, rerum facere quam ea voluptates.'
    }
];