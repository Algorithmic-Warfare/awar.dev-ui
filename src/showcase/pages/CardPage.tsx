import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Button } from '../../components/primitives/Button'
import { Badge } from '../../components/primitives/Badge'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('card')!

export default function CardPage() {
  return (
    <ComponentPage entry={entry}>
      <Inline gap="md" style={{ alignItems: 'stretch' }}>
        <Card style={{ flex: 1 }}>
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
        <Card variant="filled" style={{ flex: 1 }}>
          <Card.Header>BRAND IDENTITY</Card.Header>
          <Card.Body>
            <Stack gap="sm">
              <Text role="body">Algorithmic Warfare</Text>
              <Text role="caption">Terminal-inspired component library</Text>
            </Stack>
          </Card.Body>
        </Card>
      </Inline>
    </ComponentPage>
  )
}
