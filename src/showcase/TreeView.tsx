import { useState, type ReactNode } from 'react'
import styles from './TreeView.module.css'

export interface TreeNode {
  key: string
  label: string
  href?: string
  children?: TreeNode[]
}

interface TreeViewProps {
  nodes: TreeNode[]
  activeKey?: string
  defaultCollapsed?: Record<string, boolean>
  renderItem?: (node: TreeNode, active: boolean) => ReactNode
}

export default function TreeView({ nodes, activeKey, defaultCollapsed = {}, renderItem }: TreeViewProps) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(defaultCollapsed)

  const toggle = (key: string) => {
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className={styles.root}>
      <NodeList
        nodes={nodes}
        depth={0}
        activeKey={activeKey}
        collapsed={collapsed}
        toggle={toggle}
        renderItem={renderItem}
      />
    </div>
  )
}

/* ── Recursive internals ── */

interface NodeListProps {
  nodes: TreeNode[]
  depth: number
  activeKey?: string
  collapsed: Record<string, boolean>
  toggle: (key: string) => void
  renderItem?: (node: TreeNode, active: boolean) => ReactNode
}

function NodeList({ nodes, depth, activeKey, collapsed, toggle, renderItem }: NodeListProps) {
  // Top-level nodes render as root branches (no connector lines)
  if (depth === 0) {
    return (
      <>
        {nodes.map(node => (
          <Branch
            key={node.key}
            node={node}
            depth={depth}
            activeKey={activeKey}
            collapsed={collapsed}
            toggle={toggle}
            renderItem={renderItem}
          />
        ))}
      </>
    )
  }

  // Nested nodes render inside a children container with connector lines
  return (
    <div className={styles.children}>
      {nodes.map((node, i) => {
        const isLast = i === nodes.length - 1
        const isBranch = node.children && node.children.length > 0

        return (
          <div key={node.key} className={isLast ? styles.itemLast : styles.item}>
            {isBranch ? (
              <Branch
                node={node}
                depth={depth}
                activeKey={activeKey}
                collapsed={collapsed}
                toggle={toggle}
                renderItem={renderItem}
              />
            ) : (
              <Leaf node={node} activeKey={activeKey} renderItem={renderItem} />
            )}
          </div>
        )
      })}
    </div>
  )
}

interface BranchProps {
  node: TreeNode
  depth: number
  activeKey?: string
  collapsed: Record<string, boolean>
  toggle: (key: string) => void
  renderItem?: (node: TreeNode, active: boolean) => ReactNode
}

function Branch({ node, depth, activeKey, collapsed, toggle, renderItem }: BranchProps) {
  const isCollapsed = collapsed[node.key] ?? false

  return (
    <div>
      <button
        className={depth === 0 ? styles.branchButton : styles.branchButtonNested}
        onClick={() => toggle(node.key)}
      >
        {isCollapsed ? '[+]' : '[-]'} {node.label}
      </button>
      {!isCollapsed && node.children && (
        <NodeList
          nodes={node.children}
          depth={depth + 1}
          activeKey={activeKey}
          collapsed={collapsed}
          toggle={toggle}
          renderItem={renderItem}
        />
      )}
    </div>
  )
}

interface LeafProps {
  node: TreeNode
  activeKey?: string
  renderItem?: (node: TreeNode, active: boolean) => ReactNode
}

function Leaf({ node, activeKey, renderItem }: LeafProps) {
  const isActive = node.key === activeKey

  if (renderItem) {
    return <>{renderItem(node, isActive)}</>
  }

  return (
    <a
      href={node.href}
      className={isActive ? styles.linkActive : styles.link}
      style={{
        color: isActive ? undefined : 'var(--aw-sys-color-text-primary)',
      }}
    >
      {node.label}
    </a>
  )
}
