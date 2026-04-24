import { useState, useMemo } from 'react'
import SkillFilter from '../components/SkillFilter'
import Project from '../components/Project'
import ProjectsList from '../data/ProjectsList'


const Projects = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const allTags = useMemo(() => {
        const tags = new Set<string>()
        ProjectsList.forEach(p => (p.tags || []).forEach(t => tags.add(t)))
        return [...tags].sort()
    }, [])

    const allSkills = useMemo(() => {
        const skills = new Set<string>()
        ProjectsList.forEach(p => p.skills.forEach(s => skills.add(s)))
        return [...skills].sort()
    }, [])

    const tagToSkills: Record<string, string[]> = {
        ml: ['python', 'pytorch', 'scikit-learn', 'numpy', 'hugging face', 'openai', 'sentence-transformers', 'weights & biases', 'onnx', 'pandas', 'matplotlib'],
        cv: ['opencv', 'ultralytics yolo'],
        rl: ['deep rl'],
        robotics: ['ros 2', 'gazebo', 'foxglove'],
        fullstack: ['django', 'react', 'fastapi', 'node.js', 'supabase', 'vercel', 'vite', 'typescript', 'tailwind css', 'framer motion'],
        whimsy: ['project management'],
    }

    const toggle = (item: string) => {
        if (allTags.includes(item)) {
            setSelected(prev => {
                const relatedSkills = tagToSkills[item] || []
                if (prev.includes(item)) {
                    const otherSelectedTags = prev.filter(s => allTags.includes(s) && s !== item)
                    const otherTagSkills = new Set(otherSelectedTags.flatMap(t => tagToSkills[t] || []))
                    return prev.filter(s => s !== item && (otherTagSkills.has(s) || !relatedSkills.includes(s)))
                } else {
                    const toAdd = [item, ...relatedSkills].filter(s => !prev.includes(s))
                    return [...prev, ...toAdd]
                }
            })
        } else {
            setSelected(prev =>
                prev.includes(item) ? prev.filter(s => s !== item) : [...prev, item]
            )
        }
    }

    const filtered = ProjectsList
        .filter((project) => {
            if (selected.length === 0) return true
            const matchesSkill = selected.some(s => project.skills.includes(s))
            const matchesTag = selected.some(t => (project.tags || []).includes(t))
            return matchesSkill || matchesTag
        })

    return (
        <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', columnGap: '2rem', rowGap: '0.5rem', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <h1>Projects</h1>
                <SkillFilter
                    tags={allTags}
                    skills={allSkills}
                    selected={selected}
                    tagToSkills={tagToSkills}
                    onToggle={toggle}
                    onClear={() => setSelected([])}
                />
            </div>
            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem 2rem', marginTop: '0.5rem' }}>
                {filtered.map((project, index) => (
                    <Project
                        key={index}
                        bullet={project.type === 'whimsy' ? '✭' : '♠'}
                        title={project.title}
                        link={project.link}
                        skills={project.skills}
                        description={project.description}
                        image={project.image}
                        projectPage={project.projectPage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects
