type Props = {
    bullet: string;
    title: string;
    link?: string;
    skills: string[];
    description: string;
    image?: string;
    projectPage?: string;
}

const Project = (props: Props) => {
    const hoverStyle = props.projectPage
    ? {
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        backgroundColor: 'rgba(58, 63, 73, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transform: 'scale(1.02)',
    } : {
        cursor: 'normal'
    }

    return (
        <li
            style={{
                listStyle: 'none',
                marginBottom: '0.25rem',
                borderRadius: '18px',
                padding: '0.5rem 1.5rem 2rem',
                width: '55%'
            }}
            onClick={() => {
                if (props.projectPage) window.open(props.projectPage, '_blank')
            }}
            onMouseEnter={(e) => {
                if (props.projectPage) Object.assign(e.currentTarget.style, hoverStyle)
            }}
            onMouseLeave={(e) => {
                if (props.projectPage)
                Object.assign(e.currentTarget.style, { transform: 'scale(1)', backgroundColor: 'transparent', backdropFilter: 'none' })
            }}
        >
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <p>
                    {props.bullet}
                </p>
                <div>
                    {props.link ? (
                        <a 
                            href={props.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                        >
                        <h2 style={{ marginBottom: 0 }}>{props.title}</h2>
                        </a>
                    ) : (
                        <h2 style={{ marginBottom: 0 }}>{props.title}</h2>
                    )}
                    <p className="subtext" style={{ margin: 0 }}>{props.skills.map(skill => skill).join(' - ')}</p>
                    <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>{props.description}</p>
                    {props.image && 
                        <div style={{ marginTop: '1.5rem', marginBottom: '0.25rem', borderRadius: '10px', outline: 'solid 1px #e2e2e2', width: '55%', maxHeight: '14rem', overflow: 'hidden' }}>
                            <img src={props.image} style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                        </div>
                    }
                </div>
            </div>
        </li>
    )
}

export default Project