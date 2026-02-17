import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Badge } from '../../components/primitives/Badge'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('stack')!

export default function StackPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>GAP SIZES</Card.Header>
        <Card.Body>
          <Inline gap="xl" align="start">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(gap => (
              <Stack key={gap} gap="xs">
                <Text role="caption" color="muted">gap="{gap}"</Text>
                <Stack gap={gap}>
                  <Badge style={{ display: 'block', textAlign: 'center' }}>A</Badge>
                  <Badge style={{ display: 'block', textAlign: 'center' }}>B</Badge>
                  <Badge style={{ display: 'block', textAlign: 'center' }}>C</Badge>
                </Stack>
              </Stack>
            ))}
          </Inline>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
