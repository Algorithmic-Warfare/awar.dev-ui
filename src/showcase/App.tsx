import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useShortcut } from '../hooks/useShortcut'

// Branding
import { Logo } from '../components/branding/Logo'
import { Wordmark } from '../components/branding/Wordmark'
import { LogoLockup } from '../components/branding/LogoLockup'

// Layout
import { Stack } from '../components/layout/Stack'
import { Inline } from '../components/layout/Inline'

// Primitives
import { Text } from '../components/primitives/Text'
import { Button } from '../components/primitives/Button'
import { Input } from '../components/primitives/Input'
import { Badge } from '../components/primitives/Badge'
import { Divider } from '../components/primitives/Divider'
import { Kbd } from '../components/primitives/Kbd'

// Containers
import { Card } from '../components/containers/Card'
import { Alert } from '../components/containers/Alert'
import { Table } from '../components/containers/Table'
import { ActionBar } from '../components/containers/ActionBar'
import { List } from '../components/containers/List'

// Overlays
import { Modal } from '../components/overlays/Modal'
import { Dropdown } from '../components/overlays/Dropdown'
import { Tooltip } from '../components/overlays/Tooltip'
import { Popover } from '../components/overlays/Popover'

export default function App() {
  const { mode, toggle } = useTheme()
  const [modalOpen, setModalOpen] = useState(false)

  useShortcut('ctrl+t', toggle, { global: true })

  return (
    <div style={{ padding: '32px', maxWidth: '960px', margin: '0 auto' }}>
      <Stack gap="xl">

        {/* ── Header ── */}
        <Stack gap="md">
          <LogoLockup size="lg" subtitle />
          <Inline gap="md" align="center">
            <Text role="body" color="secondary">
              Terminal-inspired design system
            </Text>
            <Button variant="ghost" size="compact" onClick={toggle}>
              <Kbd combo="ctrl+t" /> {mode === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
          </Inline>
        </Stack>

        <Divider />

        {/* ── Branding ── */}
        <Stack gap="md">
          <Text role="heading">Branding</Text>
          <Inline gap="lg" align="center">
            <Logo size="xs" />
            <Logo size="sm" />
            <Logo size="md" />
            <Logo size="lg" variant="accent" />
            <Logo size="xl" variant="brand" style={{ backgroundColor: 'var(--aw-ref-color-maroon-500)', padding: '8px' }} />
          </Inline>
          <Inline gap="lg" align="center">
            <Wordmark size="sm" />
            <Wordmark size="md" subtitle />
          </Inline>
          <LogoLockup orientation="stacked" size="md" subtitle />
        </Stack>

        <Divider />

        {/* ── Typography ── */}
        <Stack gap="md">
          <Text role="heading">Typography</Text>
          <Text role="display">DISPLAY TEXT</Text>
          <Text role="heading">HEADING TEXT</Text>
          <Text role="subheading">SUBHEADING TEXT</Text>
          <Text role="body">Body text — the default reading size at 14px.</Text>
          <Text role="label">LABEL TEXT</Text>
          <Text role="caption">Caption text for timestamps and metadata.</Text>
          <Inline gap="md">
            <Text color="brand">Brand</Text>
            <Text color="accent">Accent</Text>
            <Text color="muted">Muted</Text>
            <Text color="error">Error</Text>
            <Text color="success">Success</Text>
            <Text color="warning">Warning</Text>
            <Text color="info">Info</Text>
          </Inline>
        </Stack>

        <Divider />

        {/* ── Buttons ── */}
        <Stack gap="md">
          <Text role="heading">Buttons</Text>
          <Inline gap="md" align="center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </Inline>
          <Inline gap="md" align="center">
            <Button size="compact">Compact</Button>
            <Button size="default">Default</Button>
            <Button size="comfortable">Comfortable</Button>
            <Button size="large">Large</Button>
          </Inline>
        </Stack>

        <Divider />

        {/* ── Inputs ── */}
        <Stack gap="md">
          <Text role="heading">Input</Text>
          <div style={{ maxWidth: '320px' }}>
            <Stack gap="md">
              <Input label="Username" placeholder="Enter username..." />
              <Input label="Password" type="password" placeholder="Enter password..." />
              <Input label="Error State" error="This field is required" />
            </Stack>
          </div>
        </Stack>

        <Divider />

        {/* ── Badges ── */}
        <Stack gap="md">
          <Text role="heading">Badges</Text>
          <Inline gap="sm">
            <Badge>DEFAULT</Badge>
            <Badge variant="success">SUCCESS</Badge>
            <Badge variant="warning">WARNING</Badge>
            <Badge variant="error">ERROR</Badge>
            <Badge variant="info">INFO</Badge>
            <Badge variant="brand">BRAND</Badge>
          </Inline>
        </Stack>

        <Divider />

        {/* ── Kbd ── */}
        <Stack gap="md">
          <Text role="heading">Keyboard Shortcuts</Text>
          <Inline gap="lg">
            <Kbd combo="ctrl+s" />
            <Kbd combo="ctrl+shift+p" />
            <Kbd combo="alt+1" />
            <Kbd combo="meta" />
          </Inline>
        </Stack>

        <Divider />

        {/* ── Card ── */}
        <Stack gap="md">
          <Text role="heading">Card</Text>
          <Card>
            <Card.Header>SYSTEM STATUS</Card.Header>
            <Card.Body>
              <Stack gap="sm">
                <Text role="body">All systems operational.</Text>
                <Inline gap="sm">
                  <Badge variant="success">ONLINE</Badge>
                  <Text role="caption" color="muted">Last checked: 00:00:00</Text>
                </Inline>
              </Stack>
            </Card.Body>
            <Card.Footer>
              <Button variant="ghost" size="compact">Refresh</Button>
              <Button variant="ghost" size="compact">Details</Button>
            </Card.Footer>
          </Card>
        </Stack>

        <Divider />

        {/* ── Alerts ── */}
        <Stack gap="md">
          <Text role="heading">Alerts</Text>
          <Alert variant="info">Information: System update available.</Alert>
          <Alert variant="success">Operation completed successfully.</Alert>
          <Alert variant="warning">Warning: Disk usage above 80%.</Alert>
          <Alert variant="error">Error: Connection to server lost.</Alert>
        </Stack>

        <Divider />

        {/* ── Table ── */}
        <Stack gap="md">
          <Text role="heading">Table</Text>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell header>PID</Table.Cell>
                <Table.Cell header>PROCESS</Table.Cell>
                <Table.Cell header>STATUS</Table.Cell>
                <Table.Cell header>CPU</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1024</Table.Cell>
                <Table.Cell>node</Table.Cell>
                <Table.Cell><Badge variant="success">RUNNING</Badge></Table.Cell>
                <Table.Cell>12.4%</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2048</Table.Cell>
                <Table.Cell>postgres</Table.Cell>
                <Table.Cell><Badge variant="success">RUNNING</Badge></Table.Cell>
                <Table.Cell>3.1%</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3072</Table.Cell>
                <Table.Cell>redis</Table.Cell>
                <Table.Cell><Badge variant="warning">IDLE</Badge></Table.Cell>
                <Table.Cell>0.2%</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Stack>

        <Divider />

        {/* ── ActionBar ── */}
        <Stack gap="md">
          <Text role="heading">Action Bar</Text>
          <ActionBar>
            <ActionBar.Item><Kbd combo="ctrl+1" /> Dashboard</ActionBar.Item>
            <ActionBar.Item><Kbd combo="ctrl+2" /> Processes</ActionBar.Item>
            <ActionBar.Item><Kbd combo="ctrl+3" /> Logs</ActionBar.Item>
            <ActionBar.Item disabled>Disabled</ActionBar.Item>
          </ActionBar>
        </Stack>

        <Divider />

        {/* ── List ── */}
        <Stack gap="md">
          <Text role="heading">List</Text>
          <Inline gap="xl">
            <List bullet="arrow">
              <List.Item>Arrow bullet item</List.Item>
              <List.Item>Another item</List.Item>
              <List.Item>Third item</List.Item>
            </List>
            <List bullet="dash">
              <List.Item>Dash bullet item</List.Item>
              <List.Item>Another item</List.Item>
            </List>
            <List bullet="dot">
              <List.Item>Dot bullet item</List.Item>
              <List.Item>Another item</List.Item>
            </List>
          </Inline>
        </Stack>

        <Divider />

        {/* ── Overlays ── */}
        <Stack gap="md">
          <Text role="heading">Overlays</Text>
          <Inline gap="md" align="center">

            {/* Modal */}
            <Modal open={modalOpen} onOpenChange={setModalOpen}>
              <Modal.Trigger>
                <Button variant="secondary">Open Modal</Button>
              </Modal.Trigger>
              <Modal.Content title="CONFIRM ACTION">
                <Stack gap="md">
                  <Text role="body">Are you sure you want to proceed?</Text>
                  <Inline gap="md">
                    <Modal.Close>
                      <Button variant="primary">Confirm</Button>
                    </Modal.Close>
                    <Modal.Close>
                      <Button variant="ghost">Cancel</Button>
                    </Modal.Close>
                  </Inline>
                </Stack>
              </Modal.Content>
            </Modal>

            {/* Dropdown */}
            <Dropdown>
              <Dropdown.Trigger>
                <Button variant="secondary">Actions ▾</Button>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Item onSelect={() => {}}>New File</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Open</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item onSelect={() => {}}>Save</Dropdown.Item>
                <Dropdown.Item disabled>Delete</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>

            {/* Tooltip */}
            <Tooltip content="System information">
              <Button variant="ghost">Hover me</Button>
            </Tooltip>

            {/* Popover */}
            <Popover>
              <Popover.Trigger>
                <Button variant="secondary">Popover</Button>
              </Popover.Trigger>
              <Popover.Content>
                <Stack gap="sm">
                  <Text role="subheading">DETAILS</Text>
                  <Text role="body" color="secondary">
                    Rich content in a popover overlay.
                  </Text>
                  <Popover.Close>
                    <Button variant="ghost" size="compact">Close</Button>
                  </Popover.Close>
                </Stack>
              </Popover.Content>
            </Popover>

          </Inline>
        </Stack>

        <Divider variant="thick" />

        {/* ── Footer ── */}
        <Inline gap="md" align="center">
          <Logo size="sm" variant="mono" />
          <Text role="caption" color="muted">
            AWAR Design System v1.0.0
          </Text>
        </Inline>

      </Stack>
    </div>
  )
}
