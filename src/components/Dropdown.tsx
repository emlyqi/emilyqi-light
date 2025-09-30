import React, { useState, useRef, useEffect } from 'react';

type DropdownProps = {
    options: string[];
    defaultOption?: string;
    onSelect: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption = 'all', onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultOption);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option: string) => {
        setSelected(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
            <button onClick={() => setIsOpen(!isOpen)} style={{ marginBottom: '0.5rem' }}>
                ↓{"\u00A0\u00A0"}{selected} 
            </button>

            {isOpen && (
                <ul
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: 'rgba(58, 63, 73, 0.18)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        border: '1px solid #3A3F49',
                        padding: '0.25rem 0',
                        margin: 0,
                        listStyle: 'none',
                        minWidth: '100%',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        outline: '1px solid #e2e2e2',
                        zIndex: 800,
                    }}
                    >
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            style={{
                                padding: '0.45rem 1rem',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
