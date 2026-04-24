import { useState, useRef, useEffect } from 'react'

type Props = {
  tags: string[]
  skills: string[]
  selected: string[]
  tagToSkills: Record<string, string[]>
  onToggle: (item: string) => void
  onClear: () => void
}

const SkillFilter = ({ tags, skills, selected, tagToSkills, onToggle, onClear }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredTags = tags.filter(s => s.toLowerCase().includes(search.toLowerCase()))
  const filteredSkills = skills.filter(s => s.toLowerCase().includes(search.toLowerCase()))

  const renderItem = (item: string, isTag: boolean) => (
    <li
      key={item}
      onClick={() => onToggle(item)}
      style={{
        padding: '0.15rem 0.5rem',
        cursor: 'pointer',
        transition: 'background 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontWeight: isTag ? 600 : 400,
        background: selected.includes(item) ? 'rgba(255,255,255,0.08)' : 'transparent',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = selected.includes(item) ? 'rgba(255,255,255,0.08)' : 'transparent')}
    >
      <span style={{ width: '1rem', textAlign: 'center' }}>{selected.includes(item) ? '✓' : ''}</span>
      {item}
    </li>
  )

  return (
    <div ref={ref} className="skill-filter" style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => { setIsOpen(!isOpen); setTimeout(() => inputRef.current?.focus(), 0) }}
        style={{ marginBottom: '0.5rem' }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', position: 'relative', top: '1px' }}>
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          {selected.length === 0 ? 'filter' : (() => {
            const selectedTags = selected.filter(s => tags.includes(s))
            const coveredByTags = new Set(selectedTags.flatMap(t => tagToSkills[t] || []))
            const extraSkills = selected.filter(s => !tags.includes(s) && !coveredByTags.has(s))
            return [...selectedTags, ...extraSkills].join(', ')
          })()}
        </span>
      </button>

      {isOpen && (
        <div className="skill-filter-dropdown" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          backgroundColor: 'rgba(20, 22, 25, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid #3A3F49',
          padding: '0.5rem',
          margin: 0,
          width: '18rem',
          maxWidth: 'calc(100vw - 2rem)',
          boxSizing: 'border-box',
          borderRadius: '10px',
          outline: '1px solid #e2e2e2',
          zIndex: 800,
        }}>
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search..."
            style={{
              width: '100%',
              boxSizing: 'border-box',
              background: 'rgba(58, 63, 73, 0.4)',
              border: '1px solid rgba(226, 226, 226, 0.3)',
              borderRadius: '6px',
              padding: '0.35rem 0.5rem',
              color: '#e2e2e2',
              marginBottom: '0.25rem',
            }}
          />
          {selected.length > 0 && (
            <div
              onClick={onClear}
              style={{
                padding: '0.35rem 0.5rem',
                cursor: 'pointer',
                color: '#e88',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              clear filters
            </div>
          )}
          {filteredTags.length > 0 && (
            <div style={{ marginBottom: '0.25rem' }}>
              <div className="subtext" style={{ padding: '0.2rem 0.5rem', color: 'rgba(226, 226, 226, 0.5)', userSelect: 'none' }}>tags</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', padding: '0 0.25rem' }}>
                {filteredTags.map(t => (
                  <span
                    key={t}
                    onClick={() => onToggle(t)}
                    style={{
                      padding: '0.2rem 0.5rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      border: selected.includes(t) ? '1px solid #e2e2e2' : '1px solid rgba(226, 226, 226, 0.3)',
                      background: selected.includes(t) ? 'rgba(255,255,255,0.12)' : 'transparent',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => { if (!selected.includes(t)) e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = '#e2e2e2' }}
                    onMouseLeave={(e) => { if (!selected.includes(t)) e.currentTarget.style.background = 'transparent'; if (!selected.includes(t)) e.currentTarget.style.borderColor = 'rgba(226, 226, 226, 0.3)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          {filteredSkills.length > 0 && (
            <div>
              <div className="subtext" style={{ padding: '0.2rem 0.5rem', color: 'rgba(226, 226, 226, 0.5)', userSelect: 'none' }}>skills</div>
              <ul style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                maxHeight: '12rem',
                overflowY: 'auto',
                overflowX: 'hidden',
              }}>
                {filteredSkills.map(s => renderItem(s, false))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SkillFilter
