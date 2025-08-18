import { useState } from 'react'
import Dropdown from '../components/Dropdown'
import Project from '../components/Project'
import ProjectsList from '../data/ProjectsList'


const Projects = () => {
    const [filter, setFilter] = useState('all');

    return (
        <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <h1>Projects</h1>
                <Dropdown 
                    options={['all', 'software', 'whimsy']}
                    onSelect={(value) => setFilter(value)}
                />
            </div>
            <ul style={{ marginTop: 0 }}>
                {ProjectsList
                    .filter((project) => filter === 'all' || project.type === filter)
                    .map((project, index) => (
                        <Project
                            key={index}
                            bullet={project.type == 'software' ? '♠' : '✭'}
                            title={project.title}
                            link={project.link}
                            skills={project.skills}
                            description={project.description}
                            image={project.image}
                            // projectPage={project.projectPage}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default Projects