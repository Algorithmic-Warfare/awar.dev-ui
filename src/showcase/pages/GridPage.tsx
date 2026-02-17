import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Grid } from '../../components/layout/Grid'
import { Text } from '../../components/primitives/Text'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('grid')!

const boxStyle = {
  padding: '12px 16px',
  border: '1px solid var(--aw-sys-color-border-default)',
  backgroundColor: 'var(--aw-sys-color-surface-raised)',
  fontFamily: 'var(--aw-sys-type-font-mono)',
  fontSize: 12,
  color: 'var(--aw-sys-color-text-secondary)',
  textAlign: 'center' as const,
}

export default function GridPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>COLUMN COUNTS</Card.Header>
        <Card.Body>
          <Stack gap="lg">
            {[2, 3, 4].map(cols => (
              <Stack key={cols} gap="xs">
                <Text role="caption" color="muted">columns={`{${cols}}`}</Text>
                <Grid columns={cols} gap="sm">
                  {Array.from({ length: cols * 2 }, (_, i) => (
                    <div key={i} style={boxStyle}>{i + 1}</div>
                  ))}
                </Grid>
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>GAP SIZES</Card.Header>
        <Card.Body>
          <Stack gap="lg">
            {(['xs', 'sm', 'md', 'lg'] as const).map(gap => (
              <Stack key={gap} gap="xs">
                <Text role="caption" color="muted">gap="{gap}"</Text>
                <Grid columns={3} gap={gap}>
                  <div style={boxStyle}>A</div>
                  <div style={boxStyle}>B</div>
                  <div style={boxStyle}>C</div>
                </Grid>
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
