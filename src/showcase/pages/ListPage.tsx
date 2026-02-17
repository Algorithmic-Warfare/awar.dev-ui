import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Inline } from '../../components/layout/Inline'
import { Stack } from '../../components/layout/Stack'
import { Text } from '../../components/primitives/Text'
import { List } from '../../components/containers/List'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('list')!

export default function ListPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>BULLET STYLES</Card.Header>
        <Card.Body>
          <Inline gap="xl">
            <Stack gap="xs">
              <Text role="caption" color="muted">arrow</Text>
              <List bullet="arrow">
                <List.Item>Arrow bullet item</List.Item>
                <List.Item>Another item</List.Item>
                <List.Item>Third item</List.Item>
              </List>
            </Stack>
            <Stack gap="xs">
              <Text role="caption" color="muted">dash</Text>
              <List bullet="dash">
                <List.Item>Dash bullet item</List.Item>
                <List.Item>Another item</List.Item>
              </List>
            </Stack>
            <Stack gap="xs">
              <Text role="caption" color="muted">dot</Text>
              <List bullet="dot">
                <List.Item>Dot bullet item</List.Item>
                <List.Item>Another item</List.Item>
              </List>
            </Stack>
            <Stack gap="xs">
              <Text role="caption" color="muted">none</Text>
              <List bullet="none">
                <List.Item>No bullet item</List.Item>
                <List.Item>Another item</List.Item>
              </List>
            </Stack>
          </Inline>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
