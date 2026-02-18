import { useState } from 'react'
import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Inline } from '../../components/layout/Inline'
import { Stack } from '../../components/layout/Stack'
import { Text } from '../../components/primitives/Text'
import { Badge } from '../../components/primitives/Badge'
import { Card } from '../../components/containers/Card'
import TreeView, { type TreeNode } from '../TreeView'

const entry = getComponentBySlug('tree-view')!

/* ── Data for each demo ── */

const fileTree: TreeNode[] = [
  {
    key: 'src',
    label: 'SRC',
    children: [
      {
        key: 'components',
        label: 'COMPONENTS',
        children: [
          {
            key: 'primitives',
            label: 'PRIMITIVES',
            children: [
              { key: 'button', label: 'Button.tsx' },
              { key: 'text', label: 'Text.tsx' },
              { key: 'input', label: 'Input.tsx' },
            ],
          },
          {
            key: 'containers',
            label: 'CONTAINERS',
            children: [
              { key: 'card', label: 'Card.tsx' },
              { key: 'alert', label: 'Alert.tsx' },
            ],
          },
          {
            key: 'overlays',
            label: 'OVERLAYS',
            children: [
              { key: 'modal', label: 'Modal.tsx' },
              { key: 'dropdown', label: 'Dropdown.tsx' },
            ],
          },
        ],
      },
      {
        key: 'hooks',
        label: 'HOOKS',
        children: [
          { key: 'useTheme', label: 'useTheme.ts' },
          { key: 'useShortcut', label: 'useShortcut.ts' },
        ],
      },
      { key: 'index', label: 'index.ts' },
      { key: 'main', label: 'main.tsx' },
    ],
  },
  {
    key: 'config',
    label: 'CONFIG',
    children: [
      { key: 'tsconfig', label: 'tsconfig.json' },
      { key: 'vite', label: 'vite.config.ts' },
      { key: 'package', label: 'package.json' },
    ],
  },
]

const orgChart: TreeNode[] = [
  {
    key: 'hq',
    label: 'HEADQUARTERS',
    children: [
      {
        key: 'engineering',
        label: 'ENGINEERING',
        children: [
          {
            key: 'frontend',
            label: 'FRONTEND',
            children: [
              { key: 'alice', label: 'Alice' },
              { key: 'bob', label: 'Bob' },
            ],
          },
          {
            key: 'backend',
            label: 'BACKEND',
            children: [
              { key: 'charlie', label: 'Charlie' },
            ],
          },
          {
            key: 'infra',
            label: 'INFRASTRUCTURE',
            children: [
              { key: 'diana', label: 'Diana' },
              { key: 'eve', label: 'Eve' },
              { key: 'frank', label: 'Frank' },
            ],
          },
        ],
      },
      {
        key: 'design',
        label: 'DESIGN',
        children: [
          { key: 'grace', label: 'Grace' },
          { key: 'hank', label: 'Hank' },
        ],
      },
    ],
  },
]

const singleLevel: TreeNode[] = [
  {
    key: 'nav',
    label: 'NAVIGATION',
    children: [
      { key: 'home', label: 'Home', href: '#' },
      { key: 'about', label: 'About', href: '#' },
      { key: 'contact', label: 'Contact', href: '#' },
    ],
  },
]

const collapsedNodes: TreeNode[] = [
  {
    key: 'open',
    label: 'EXPANDED GROUP',
    children: [
      { key: 'a', label: 'Item A' },
      { key: 'b', label: 'Item B' },
    ],
  },
  {
    key: 'closed',
    label: 'COLLAPSED GROUP',
    children: [
      { key: 'c', label: 'Item C' },
      { key: 'd', label: 'Item D' },
    ],
  },
  {
    key: 'also-closed',
    label: 'ALSO COLLAPSED',
    children: [
      { key: 'e', label: 'Item E' },
    ],
  },
]

const statusMap: Record<string, { variant: 'success' | 'error' | 'warning' | 'info'; status: string }> = {
  api: { variant: 'success', status: 'ONLINE' },
  db: { variant: 'success', status: 'ONLINE' },
  cache: { variant: 'warning', status: 'DEGRADED' },
  queue: { variant: 'error', status: 'DOWN' },
  cdn: { variant: 'success', status: 'ONLINE' },
  logs: { variant: 'info', status: 'DRAINING' },
}

const statusTree: TreeNode[] = [
  {
    key: 'services',
    label: 'SERVICES',
    children: Object.keys(statusMap).map(k => ({
      key: k,
      label: k.toUpperCase(),
    })),
  },
]

export default function TreeViewPage() {
  const [activeFile, setActiveFile] = useState('button')
  const [activeService, setActiveService] = useState('cache')

  return (
    <ComponentPage entry={entry}>
      {/* Deep nesting */}
      <Card>
        <Card.Header>NESTED FILE EXPLORER</Card.Header>
        <Card.Body>
          <Text role="caption" color="muted" style={{ marginBottom: 8 }}>
            Deeply nested tree — branches inside branches, mixing folders and files at any level.
          </Text>
          <div style={{ fontSize: 12, fontFamily: 'var(--aw-ref-font-mono)' }}>
            <TreeView
              nodes={fileTree}
              activeKey={activeFile}
              renderItem={(node: TreeNode, active: boolean) => (
                <span
                  onClick={() => setActiveFile(node.key)}
                  style={{
                    cursor: 'pointer',
                    color: active ? 'var(--aw-sys-color-text-accent)' : 'var(--aw-sys-color-text-primary)',
                    borderBottom: active ? '1px solid var(--aw-sys-color-text-accent)' : '1px solid transparent',
                  }}
                >
                  {node.label}
                </span>
              )}
            />
          </div>
        </Card.Body>
      </Card>

      {/* Org chart — 3 levels deep */}
      <Card>
        <Card.Header>ORG CHART — 4 LEVELS DEEP</Card.Header>
        <Card.Body>
          <Text role="caption" color="muted" style={{ marginBottom: 8 }}>
            Recursive nesting with multiple sibling branches at each level.
          </Text>
          <div style={{ fontSize: 12, fontFamily: 'var(--aw-ref-font-mono)' }}>
            <TreeView nodes={orgChart} activeKey="diana" />
          </div>
        </Card.Body>
      </Card>

      <Inline gap="lg" align="start">
        {/* Flat / single group */}
        <Card style={{ flex: 1 }}>
          <Card.Header>SINGLE GROUP (FLAT)</Card.Header>
          <Card.Body>
            <Text role="caption" color="muted" style={{ marginBottom: 8 }}>
              One level of nesting — still works as a simple nav.
            </Text>
            <div style={{ fontSize: 12, fontFamily: 'var(--aw-ref-font-mono)' }}>
              <TreeView nodes={singleLevel} activeKey="home" />
            </div>
          </Card.Body>
        </Card>

        {/* Default collapsed */}
        <Card style={{ flex: 1 }}>
          <Card.Header>DEFAULT COLLAPSED</Card.Header>
          <Card.Body>
            <Text role="caption" color="muted" style={{ marginBottom: 8 }}>
              Groups can start collapsed via defaultCollapsed.
            </Text>
            <div style={{ fontSize: 12, fontFamily: 'var(--aw-ref-font-mono)' }}>
              <TreeView
                nodes={collapsedNodes}
                defaultCollapsed={{ closed: true, 'also-closed': true }}
              />
            </div>
          </Card.Body>
        </Card>
      </Inline>

      {/* Custom renderItem */}
      <Card>
        <Card.Header>CUSTOM RENDER — STATUS DASHBOARD</Card.Header>
        <Card.Body>
          <Text role="caption" color="muted" style={{ marginBottom: 8 }}>
            Using renderItem to add badges and custom click behavior.
          </Text>
          <div style={{ fontSize: 12, fontFamily: 'var(--aw-ref-font-mono)' }}>
            <TreeView
              nodes={statusTree}
              activeKey={activeService}
              renderItem={(node: TreeNode, active: boolean) => {
                const info = statusMap[node.key]
                return (
                  <span
                    onClick={() => setActiveService(node.key)}
                    style={{
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      color: active ? 'var(--aw-sys-color-text-accent)' : 'var(--aw-sys-color-text-primary)',
                    }}
                  >
                    {node.label}
                    {info && <Badge variant={info.variant}>{info.status}</Badge>}
                  </span>
                )
              }}
            />
          </div>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
