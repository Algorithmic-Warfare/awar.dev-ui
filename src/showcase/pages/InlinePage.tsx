import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Badge } from '../../components/primitives/Badge'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('inline')!

export default function InlinePage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>GAP SIZES</Card.Header>
        <Card.Body>
          <Stack gap="md">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(gap => (
              <Stack key={gap} gap="xs">
                <Text role="caption" color="muted">gap="{gap}"</Text>
                <Inline gap={gap}>
                  <Badge>A</Badge>
                  <Badge>B</Badge>
                  <Badge>C</Badge>
                </Inline>
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>ALIGNMENT</Card.Header>
        <Card.Body>
          <Stack gap="md">
            {(['start', 'center', 'end', 'baseline'] as const).map(align => (
              <Stack key={align} gap="xs">
                <Text role="caption" color="muted">align="{align}"</Text>
                <Inline gap="md" align={align}>
                  <Badge style={{ padding: '4px 12px' }}>Small</Badge>
                  <Badge style={{ padding: '12px' }}>Medium</Badge>
                  <Badge style={{ padding: '20px 12px' }}>Large</Badge>
                </Inline>
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
