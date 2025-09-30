import { useEffect, useState } from 'react'
import GitHubIcon from '../assets/sm-icons/github.svg'
import XIcon from '../assets/sm-icons/x.svg'
import LinkedInIcon from '../assets/sm-icons/linkedin.svg'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: 0 }}>
                        <h1 style={{ margin: 0 }}>emily qi</h1>
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                            <a href="https://github.com/emlyqi/" target="_blank" rel="noopener noreferrer" style={{ margin: 0, width: '2.3rem', lineHeight: 0 }}>
                                <img src={GitHubIcon} alt="GitHub" />
                            </a>
                            <a href="https://x.com/emlyqi/" target="_blank" rel="noopener noreferrer" style={{ margin: 0, width: '2.5rem',  lineHeight: 0 }}>
                                <img src={XIcon} alt="X" />
                            </a>
                            <a href="https://linkedin.com/in/emily-q/" target="_blank" rel="noopener noreferrer" style={{ margin: 0, width: '2.5rem', lineHeight: 0 }}>
                                <img src={LinkedInIcon} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                    <a href="mailto:emily.qi@uwaterloo.ca" className="subtext" style={{ margin: 0 }}>emily.qi@uwaterloo.ca</a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1.5rem', alignItems: 'center' }}>
                    <a href="https://emilyqi.pages.dev/" target="_blank" rel="noopener noreferrer">
                        <p>old</p>
                    </a>
                    <a href="/Emily Qi Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <p>resume</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar