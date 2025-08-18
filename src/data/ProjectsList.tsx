import ConvergencePath from '../assets/projects/convergence.jpg'

const ProjectsList = [
    {
        type: 'software',
        title: 'Market-Matching Robo-Advisor',
        link: 'https://github.com/emlyqi/roboadvisor',
        skills: ['python', 'pandas', 'matplotlib', 'numpy', 'yfinance'],
        description: 'chooses 16 stocks to build portfolio mirroring returns of TSX 60 and S&P 500',
    },
    {
        type: 'software',
        title: '\'visionPrep',
        link: 'https://github.com/emlyqi/visionPrep',
        skills: ['react', 'material ui', 'figma', 'firebase', 'project management'],
        description: 'automates high school VP’s supervision schedule generation process',
        // projectPage: '../project_pages/Convergence'
    },
    {
        type: 'whimsy',
        title: 'Convergence',
        link: 'https://x.com/emlyqi/status/1954728432451121337',
        skills: ['project management', 'figma'],
        description: '50-person game of tag played on uWaterloo campus and in downtown Toronto',
        image: ConvergencePath,
        // projectPage: '../project_pages/Convergence'
    }
];

export default ProjectsList;