import { useState, useEffect } from 'react'
import { useAWARTheme } from '../hooks/useAWARTheme'
import { useShortcut } from '../hooks/useShortcut'
import TokenGallery from './TokenGallery'
import Sidebar from './Sidebar'
import ComponentOverview from './ComponentOverview'
import { pages } from './pages'

type Route =
  | { tab: 'tokens' }
  | { tab: 'components'; slug?: string }

function parseRoute(): Route {
  const hash = location.hash || '#/components'
  if (hash === '#/tokens') return { tab: 'tokens' }
  const match = hash.match(/^#\/components\/(.+)$/)
  if (match) return { tab: 'components', slug: match[1] }
  return { tab: 'components' }
}

function NavBar({ tab }: { tab: 'components' | 'tokens' }) {
  const links: { label: string; hash: string; key: string }[] = [
    { label: 'COMPONENTS', hash: '#/components', key: 'components' },
    { label: 'TOKENS', hash: '#/tokens', key: 'tokens' },
  ]
  return (
    <nav style={{
      display: 'flex', gap: 0,
      fontFamily: 'var(--aw-sys-type-font-mono)',
      fontSize: 12, letterSpacing: '0.1em',
      borderBottom: '1px solid var(--aw-sys-color-border-default)',
    }}>
      {links.map(link => (
        <a
          key={link.key}
          href={link.hash}
          style={{
            padding: '8px 16px',
            color: tab === link.key ? 'var(--aw-sys-color-text-accent)' : 'var(--aw-sys-color-text-secondary)',
            textDecoration: 'none',
            borderBottom: tab === link.key ? '2px solid var(--aw-sys-color-text-accent)' : '2px solid transparent',
            textTransform: 'uppercase',
            fontWeight: tab === link.key ? 700 : 400,
            transition: 'color 0.1s, border-color 0.1s',
          }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default function App() {
  const [route, setRoute] = useState<Route>(parseRoute)
  const { toggle } = useAWARTheme()

  useShortcut('ctrl+t', toggle, { global: true })

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route.tab === 'tokens') {
    return (
      <>
        <NavBar tab="tokens" />
        <TokenGallery />
      </>
    )
  }

  const slug = route.slug
  const Page = slug ? pages[slug] : undefined

  return (
    <>
      <NavBar tab="components" />
      <div style={{ display: 'flex', height: 'calc(100vh - 35px)' }}>
        <Sidebar activeSlug={slug} />
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {Page ? <Page /> : <ComponentOverview />}
        </div>
      </div>
    </>
  )
}
