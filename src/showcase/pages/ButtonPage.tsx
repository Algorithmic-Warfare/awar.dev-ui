import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Button } from '../../components/primitives/Button'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('button')!

export default function ButtonPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>VARIANTS</Card.Header>
        <Card.Body>
          <Inline gap="md" align="center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </Inline>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>SIZES</Card.Header>
        <Card.Body>
          <Inline gap="md" align="center">
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Button size="compact">Compact</Button>
              <Text role="caption" color="muted">compact</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Button size="default">Default</Button>
              <Text role="caption" color="muted">default</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Button size="comfortable">Comfortable</Button>
              <Text role="caption" color="muted">comfortable</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Button size="large">Large</Button>
              <Text role="caption" color="muted">large</Text>
            </Stack>
          </Inline>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
