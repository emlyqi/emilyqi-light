import VisionPrepPath from '../assets/projects/visionprep.png'
import ConvergencePath from '../assets/projects/convergence.jpg'
import LunarHacksPath from '../assets/projects/lunarhacks.png'
import AgriPlantPath from '../assets/projects/agriplant.png'
import BrewPath from '../assets/projects/brew.png'
import OldSitePath from '../assets/projects/emilyqi_neu.png'

const ProjectsList = [
    {
        type: 'software',
        title: 'Brew',
        link: 'https://github.com/emlyqi/brew',
        skills: ['python', 'numpy', 'openai', 'scikit-learn', 'fastapi', 'node.js', 'axios', 'react', 'javascript'],
        description: 'semantically searches for potential people to coffee chat',
        image: BrewPath
    },
    {
        type: 'software',
        title: 'Old Personal Website',
        link: 'https://emilyqi.pages.dev/',
        skills: ['react', 'typescript', 'tailwind css', 'framer motion', 'figma'],
        description: 'i think this old one is a little more visually interesting',
        image: OldSitePath
    },
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
        image: VisionPrepPath
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
    },
    {
        type: 'software',
        title: 'WARG Autonomy Bootcamp',
        link: 'https://github.com/emlyqi/autonomy-bootcamp-2023',
        skills: ['python', 'ultralytics yolo', 'numpy'],
        description: 'detects landing pads, navigates drone to waypoints, and lands drone at destination',
        // projectPage: '../project_pages/Convergence'
    },
    {
        type: 'software',
        title: 'AgriPlant',
        link: 'https://github.com/emlyqi/AgriPlant',
        skills: ['html', 'css', 'javascript', 'firebase'],
        description: 'teaches players about sustainable agriculture practices in an engaging gameplay format',
        image: AgriPlantPath,
        // projectPage: '../project_pages/Convergence'
    },
    {
        type: 'whimsy',
        title: 'LunarHacks',
        link: 'https://lunarhacks.com/',
        skills: ['project management'],
        description: '1 kids conference, 1 trail-blazing hackathon @ CarletonU, 2 global hackathons',
        image: LunarHacksPath,
        // projectPage: '../project_pages/Convergence'
    },
];

export default ProjectsList;