import { ReactNode } from 'react'
import type { ComponentEntry } from './registry'
import { Text } from '../components/primitives/Text'
import { Divider } from '../components/primitives/Divider'
import { Badge } from '../components/primitives/Badge'
import { Stack } from '../components/layout/Stack'
import { Inline } from '../components/layout/Inline'
import { Table } from '../components/containers/Table'
import { Card } from '../components/containers/Card'
import type { PropInfo, SubcomponentInfo } from './registry'

function PropsTable({ props, title }: { props: PropInfo[]; title?: string }) {
  if (props.length === 0) return null
  return (
    <Stack gap="sm">
      {title && <Text role="label" color="secondary">{title}</Text>}
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell header>PROP</Table.Cell>
            <Table.Cell header>TYPE</Table.Cell>
            <Table.Cell header>DEFAULT</Table.Cell>
            <Table.Cell header>DESCRIPTION</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {props.map(p => (
            <Table.Row key={p.name}>
              <Table.Cell>
                <Text role="caption" color="accent">{p.name}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text role="caption" color="secondary">{p.type}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text role="caption" color="muted">{p.default ?? '—'}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text role="caption">{p.description}</Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Stack>
  )
}

function SubcomponentProps({ subcomponents }: { subcomponents: SubcomponentInfo[] }) {
  return (
    <>
      {subcomponents.map(sub => (
        <PropsTable key={sub.name} props={sub.props} title={sub.name} />
      ))}
    </>
  )
}

export default function ComponentPage({
  entry,
  children,
  usage,
}: {
  entry: ComponentEntry
  children: ReactNode
  usage?: string
}) {
  const usageCode = usage ?? entry.usage
  return (
    <Stack gap="xl" style={{ padding: 32, maxWidth: 960, margin: '0 auto' }}>
      {/* Header */}
      <Stack gap="sm">
        <Inline gap="md" align="center">
          <Text role="heading">{entry.name.toUpperCase()}</Text>
          <Badge>{entry.category}</Badge>
        </Inline>
        <Text role="body" color="secondary">{entry.description}</Text>
      </Stack>

      <Divider />

      {/* Examples */}
      <Stack gap="md">
        <Text role="subheading">EXAMPLES</Text>
        {children}
      </Stack>

      <Divider />

      {/* Props */}
      <Stack gap="md">
        <Text role="subheading">PROPS</Text>
        <PropsTable props={entry.props} />
        {entry.subcomponents && <SubcomponentProps subcomponents={entry.subcomponents} />}
        {entry.props.length === 0 && !entry.subcomponents && (
          <Text role="body" color="muted">No custom props — uses standard HTML attributes.</Text>
        )}
      </Stack>

      <Divider />

      {/* Usage */}
      <Stack gap="md">
        <Text role="subheading">USAGE</Text>
        <Card variant="filled">
          <Card.Body>
            <Text role="caption" as="pre" style={{ margin: 0, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
              {usageCode}
            </Text>
          </Card.Body>
        </Card>
      </Stack>
    </Stack>
  )
}
