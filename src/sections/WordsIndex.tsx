import { Link } from 'react-router-dom'

const words = [
  { slug: 'consume', title: 'to consume' },
]

const WordsIndex = () => {
  return (
    <div style={{ margin: '4rem 0' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem' }}>
        ← back
      </Link>
      <h1>Words</h1>
      <ul style={{ marginTop: '1.5rem', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
        {words.map(({ slug, title }) => (
          <li key={slug} style={{ marginBottom: '0.5rem' }}>
            <Link to={`/w/${slug}`} style={{ textDecoration: 'underline' }}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WordsIndex
