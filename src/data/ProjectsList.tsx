// import VisionPrepPath from '../assets/projects/visionprep.png'
import ConvergencePath from '../assets/projects/convergence.jpg'
import LunarHacksPath from '../assets/projects/lunarhacks.png'
// import AgriPlantPath from '../assets/projects/agriplant.png'
import BrewPath from '../assets/projects/brew.png'
import OldSitePath from '../assets/projects/emilyqi_neu.png'
import KaryonPath from '../assets/projects/karyon.png'
import BreakoutDQNPath from '../assets/projects/breakout_dqn.png'
import SynSpeedrunPath from '../assets/projects/syn_speedrun.png'
import DepthBenchmarkPath from '../assets/projects/depth_benchmark.png'
import AutoRoboNavPath from '../assets/projects/auto_robo_nav.png'
import BiquadrisPath from '../assets/projects/biquadris.png'

const ProjectsList: { type: string; title: string; link?: string; skills: string[]; tags: string[]; description: React.ReactNode; image?: string; projectPage?: string }[] = [
    {
        type: 'software',
        title: 'Depth Estimation Benchmark',
        link: 'https://github.com/emlyqi/depth-benchmarking',
        skills: ['python', 'pytorch', 'opencv', 'hugging face', 'onnx', 'numpy'],
        tags: ['ml', 'cv'],
        description: 'benchmarked stereo vs neural depth estimation, fine-tuned dpt-large, and wrote 6000 words about it',
        image: DepthBenchmarkPath,
        projectPage: '/p/depth_benchmarking'
    },
    {
        type: 'software',
        title: 'Autonomous Robot Navigation Stack',
        link: 'https://github.com/emlyqi/auto-robot-nav',
        skills: ['c++', 'ros 2', 'gazebo', 'docker', 'foxglove'],
        tags: ['robotics'],
        description: <>maps world with lidar, plans paths with A*, and drives simulated robot to any clicked goal (for <a href="https://www.watonomous.ca/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>WATO</a> ASD)</>,
        image: AutoRoboNavPath
    },
    {
        type: 'software',
        title: 'Karyon',
        link: 'https://github.com/emlyqi/karyon',
        skills: ['django', 'react', 'openai', 'sentence-transformers', 'opencv'],
        tags: ['ml', 'fullstack'],
        description: 'ask a video anything — processes audio and visuals to answer with timestamped citations',
        image: KaryonPath
    },
    {
        type: 'software',
        title: 'Atari Breakout with DQN',
        link: 'https://github.com/emlyqi/breakout-dqn',
        skills: ['python', 'pytorch', 'deep rl', 'opencv', 'weights & biases'],
        tags: ['ml', 'rl'],
        description: 'implemented DQN, double DQN, and prioritized replay to teach an agent to play Atari Breakout',
        image: BreakoutDQNPath
    },
    {
        type: 'software',
        title: 'Synonym Speedrun',
        link: 'https://synonymspeedrun.vercel.app/',
        skills: ['react', 'vite', 'node.js', 'vercel', 'supabase'],
        tags: ['fullstack'],
        description: 'word game where you race to connect two words through their thesaurus entries',
        image: SynSpeedrunPath
    },
    {
        type: 'software',
        title: 'Brew',
        link: 'https://github.com/emlyqi/brew',
        skills: ['python', 'openai', 'scikit-learn', 'fastapi', 'node.js', 'react'],
        tags: ['ml', 'fullstack'],
        description: 'semantically matches you with people to coffee chat using embedding similarity',
        image: BrewPath
    },
    {
        type: 'whimsy',
        title: 'Convergence',
        link: 'https://www.youtube.com/watch?v=Gq2RE4Vaz28',
        skills: ['project management', 'figma'],
        tags: ['whimsy'],
        description: '50-person game of tag played on uWaterloo campus and in downtown Toronto',
        image: ConvergencePath,
        // projectPage: '../project_pages/Convergence'
    },
    {
        type: 'software',
        title: 'Biquadris',
        skills: ['c++', 'object-oriented programming', 'x11'],
        tags: [],
        description: 'two-player tetris with some twists, built with many GoF design patterns',
        image: BiquadrisPath
    },
    {
        type: 'software',
        title: 'Old Personal Website',
        link: 'https://emilyqi.pages.dev/',
        skills: ['react', 'typescript', 'tailwind css', 'framer motion', 'figma'],
        tags: ['fullstack'],
        description: 'i think this old one is a little more visually interesting but i got bored of it; a glimpse into history',
        image: OldSitePath
    },
    {
        type: 'software',
        title: 'Market-Matching Robo-Advisor',
        link: 'https://github.com/emlyqi/roboadvisor',
        skills: ['python', 'pandas', 'matplotlib', 'numpy', 'yfinance'],
        tags: ['ml'],
        description: 'chooses 16 stocks to build portfolio mirroring returns of TSX 60 and S&P 500',
    },
    // {
    //     type: 'software',
    //     title: '\'visionPrep',
    //     link: 'https://github.com/emlyqi/visionPrep',
    //     skills: ['react', 'material ui', 'figma', 'firebase'],
    //     description: 'automates high school VP’s supervision schedule generation process',
    //     image: VisionPrepPath
    //     // projectPage: '../project_pages/Convergence'
    // },
    {
        type: 'software',
        title: 'WARG Autonomy Bootcamp',
        link: 'https://github.com/emlyqi/autonomy-bootcamp-2023',
        skills: ['python', 'ultralytics yolo', 'numpy'],
        tags: ['ml', 'cv'],
        description: 'detects landing pads, navigates drone to waypoints, and lands drone at destination',
        // projectPage: '../project_pages/Convergence'
    },
    // {
    //     type: 'software',
    //     title: 'AgriPlant',
    //     link: 'https://github.com/emlyqi/AgriPlant',
    //     skills: ['html', 'css', 'javascript', 'firebase'],
    //     description: 'teaches players about sustainable agriculture practices in an engaging gameplay format',
    //     image: AgriPlantPath,
    //     // projectPage: '../project_pages/Convergence'
    // },
    {
        type: 'whimsy',
        title: 'LunarHacks',
        link: 'https://lunarhacks.com/',
        skills: ['project management'],
        tags: ['whimsy'],
        description: '1 kids conference, 1 trail-blazing hackathon @ CarletonU, 2 global hackathons',
        image: LunarHacksPath,
        // projectPage: '../project_pages/Convergence'
    },
];

export default ProjectsList;