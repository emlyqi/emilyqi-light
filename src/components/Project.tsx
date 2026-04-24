import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    bullet: string;
    title: string;
    link?: string;
    skills: string[];
    description: React.ReactNode;
    image?: string;
    projectPage?: string;
}

const ExpandIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8V3h5" />
        <line x1="3" y1="3" x2="9" y2="9" />
        <path d="M16 3h5v5" />
        <line x1="21" y1="3" x2="15" y2="9" />
        <path d="M21 16v5h-5" />
        <line x1="21" y1="21" x2="15" y2="15" />
        <path d="M8 21H3v-5" />
        <line x1="3" y1="21" x2="9" y2="15" />
    </svg>
)

const ExternalLinkIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
)

const Project = (props: Props) => {
    const navigate = useNavigate()
    const [expanded, setExpanded] = useState(false)
    const [imgHovered, setImgHovered] = useState(false)

    const hoverStyle = props.projectPage
    ? {
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        backgroundColor: 'rgba(20, 22, 25, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transform: 'scale(1.02)',
    } : {
        cursor: 'normal'
    }

    return (
        <>
            <li
                style={{
                    listStyle: 'none',
                    marginBottom: '0.25rem',
                    borderRadius: '18px',
                    padding: '0.5rem 1rem 2rem',
                }}
                onClick={() => {
                    if (props.projectPage) navigate(props.projectPage)
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
                        {/* {props.bullet} */}
                    </p>
                    <div>
                        <h2 style={{ marginBottom: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                            {props.title}
                            {props.link && (
                                <a href={props.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLinkIcon />
                                </a>
                            )}
                        </h2>
                        <p className="subtext" style={{ margin: 0 }}>{props.skills.map(skill => skill).join(' - ')}</p>
                        <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>{props.description}</p>
                        {props.image &&
                            <div
                                style={{ marginTop: '1.5rem', marginBottom: '0.25rem', borderRadius: '10px', outline: 'solid 1px #e2e2e2', overflow: 'hidden', aspectRatio: '16 / 9', width: '75%', position: 'relative', cursor: 'pointer' }}
                                onMouseEnter={() => setImgHovered(true)}
                                onMouseLeave={() => setImgHovered(false)}
                                onClick={(e) => { e.stopPropagation(); setExpanded(true) }}
                            >
                                <img src={props.image} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '0.5rem',
                                    right: '0.5rem',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    borderRadius: '6px',
                                    width: '28px',
                                    height: '28px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: imgHovered ? 1 : 0,
                                    transition: 'opacity 0.2s ease',
                                }}>
                                    <ExpandIcon />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </li>

            {expanded && (
                <div
                    onClick={() => setExpanded(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0, 0, 0, 0.75)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2000,
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src={props.image}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '80vw',
                            maxHeight: '80vh',
                            borderRadius: '12px',
                            objectFit: 'contain',
                            cursor: 'default',
                        }}
                    />
                </div>
            )}
        </>
    )
}

export default Project
