const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rjshkhr.github.io/cleanfolio',
  // title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dilshan Ukwattage',
  role: 'Software Engineer | Angular Specialist | Tech Enthusiast',
  picture: '50502_Dilshan_Ukwattage.jpg',

  description:
    'I’m an experienced Software Engineer with over 4 years of hands-on experience in developing and optimizing robust applications using Angular, TypeScript, C# .NET, Java, Python, MySQL, and Microservices architecture. I specialize in building scalable, high-performance systems and delivering clean, maintainable code that meets both technical and business needs. With a strong grasp of Agile methodologies, CI/CD pipelines, Git, and Jenkins, I thrive in collaborative environments and enjoy solving complex challenges. My passion lies in creating efficient solutions that enhance user experience, streamline operations, and drive innovation. I’m always eager to contribute to dynamic teams where I can continue to grow and make a meaningful impact through technology.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/dilshan-ukwattage-11133217a/',
    github: 'https://github.com/Dilshanushara',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS/SCSS',
  'JavaScript',
  'TypeScript',
  'Angular',
  'RxJs',
  '.Net Core',
  'Git',
  'Jenkins',
  'Bitbucket',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'dilshanushara16@gmail.com',
}

export { header, about, projects, skills, contact }
