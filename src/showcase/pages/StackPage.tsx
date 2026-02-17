import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('stack')!

const boxStyle = {
  padding: '8px 16px',
  border: '1px solid var(--aw-sys-color-border-default)',
  backgroundColor: 'var(--aw-sys-color-surface-raised)',
  fontFamily: 'var(--aw-sys-type-font-mono)',
  fontSize: 12,
  color: 'var(--aw-sys-color-text-secondary)',
}

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
                  <div style={boxStyle}>A</div>
                  <div style={boxStyle}>B</div>
                  <div style={boxStyle}>C</div>
                </Stack>
              </Stack>
            ))}
          </Inline>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
