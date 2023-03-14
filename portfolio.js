import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
 
  homepage: 'https://github.com/MatheusMoura2000/hw20/',
  title: 'JS.',
}

const about = {
  photo:aboutpic,
  
  name: 'matheus',
  role: 'developer',
  description:
    'GT Boot camp student Matheus.',
  resume: '
    linkedin: ' do not have',
    github: 'https://github.com/MatheusMoura2000/hw20',
  },
}

const projects = [
  
  {
    name: 'Password Generator',
    description:
      'Generates reliable passowrds for you to use',
    sourceCode: 'https://github.com/MatheusMoura2000/password-generator-Hw3',
    
  },
  {
    name: 'Event Planner',
    description:
      'Helps you create a schedule',
    sourceCode: 'https://github.com/MatheusMoura2000/schedule-organizer-Hw5',
  
  },
  {
    name: 'Work-generator',
    description:
      'allows user to interact and gain information on employees',
    sourceCode: 'https://github.com/MatheusMoura2000/work-generator-hw10',
  },
  {
    name: 'Note-Taker',
    description:
      'allows user to take notes',
    sourceCode: 'https://github.com/MatheusMoura2000/Note-Taker-Hw11',
    
  },
  {
    name: 'Weather-app',
    description:
      'You can check the weather anywhere you want ',
    sourceCode: 'https://github.com/MatheusMoura2000/weather-app-Hw6',

  },
]

const skills = [
  
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
  'Java 8',
  'Java Spring Boot',
  'Microservices',
  'Docker',
  'Heroku'
]

const contact = {
  
  email: 'Matheusmoura0917@gmail.com',
}

export { header, about, projects, skills, contact }
