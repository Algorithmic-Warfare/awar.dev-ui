import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('inline')!

const boxStyle = {
  padding: '8px 16px',
  border: '1px solid var(--aw-sys-color-border-default)',
  backgroundColor: 'var(--aw-sys-color-surface-raised)',
  fontFamily: 'var(--aw-sys-type-font-mono)',
  fontSize: 12,
  color: 'var(--aw-sys-color-text-secondary)',
}

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
                  <div style={boxStyle}>A</div>
                  <div style={boxStyle}>B</div>
                  <div style={boxStyle}>C</div>
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
                  <div style={{ ...boxStyle, padding: '4px 16px' }}>Small</div>
                  <div style={{ ...boxStyle, padding: '16px' }}>Medium</div>
                  <div style={{ ...boxStyle, padding: '24px 16px' }}>Large</div>
                </Inline>
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
