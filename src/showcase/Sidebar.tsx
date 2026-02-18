import { categories, getComponentsByCategory } from './registry'
import TreeView, { type TreeNode } from './TreeView'

const nodes: TreeNode[] = categories.map(cat => ({
  key: cat.slug,
  label: cat.name,
  children: getComponentsByCategory(cat.slug).map(comp => ({
    key: comp.slug,
    label: comp.name,
    href: `#/components/${comp.slug}`,
  })),
}))

export default function Sidebar({ activeSlug }: { activeSlug?: string }) {
  return (
    <nav style={{
      width: 220,
      minWidth: 220,
      borderRight: '1px solid var(--aw-sys-color-border-default)',
      overflowY: 'auto',
      fontFamily: 'var(--aw-sys-type-font-mono)',
      fontSize: 12,
      padding: '8px 0 8px 12px',
    }}>
      <TreeView nodes={nodes} activeKey={activeSlug} />
    </nav>
  )
}
