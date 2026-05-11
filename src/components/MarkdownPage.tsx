import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

type Props = {
  folder: string
  backTo?: string
}

const MarkdownPage = ({ folder, backTo = '/' }: Props) => {
  const { slug } = useParams()
  const [content, setContent] = useState<string | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setContent(null)
    setError(false)
    fetch(`/${folder}/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        const contentType = res.headers.get('content-type') || ''
        if (contentType.includes('text/html')) throw new Error('Not found')
        return res.text()
      })
      .then(setContent)
      .catch(() => setError(true))
  }, [folder, slug])

  if (error) return <div style={{ margin: '4rem 0' }}><p>404 this page doesn't exist — <Link to="/" style={{ textDecoration: 'underline' }}>take me home!</Link></p></div>
  if (!content) return <div style={{ margin: '4rem 0' }}>loading...</div>

  return (
    <div className="markdown" style={{ margin: '4rem 0' }}>
      <Link to={backTo} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem' }}>
        ← back
      </Link>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownPage
