import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Inline } from '../../components/layout/Inline'
import { Stack } from '../../components/layout/Stack'
import { Text } from '../../components/primitives/Text'
import { Kbd } from '../../components/primitives/Kbd'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('kbd')!

export default function KbdPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>KEY COMBINATIONS</Card.Header>
        <Card.Body>
          <Inline gap="lg" wrap>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Kbd combo="ctrl+s" />
              <Text role="caption" color="muted">ctrl+s</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Kbd combo="ctrl+shift+p" />
              <Text role="caption" color="muted">ctrl+shift+p</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Kbd combo="alt+1" />
              <Text role="caption" color="muted">alt+1</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Kbd combo="meta" />
              <Text role="caption" color="muted">meta</Text>
            </Stack>
          </Inline>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
