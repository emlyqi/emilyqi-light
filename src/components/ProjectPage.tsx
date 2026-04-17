import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const ProjectPage = () => {
  const { slug } = useParams()
  const [content, setContent] = useState<string | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`/project_pages/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        return res.text()
      })
      .then(setContent)
      .catch(() => setError(true))
  }, [slug])

  if (error) return <div style={{ margin: '4rem 0' }}>page not found</div>
  if (!content) return <div style={{ margin: '4rem 0' }}>loading...</div>

  return (
    <div className="markdown" style={{ margin: '4rem 0' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem' }}>
        ← back
      </Link>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default ProjectPage
