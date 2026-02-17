import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Grid } from '../../components/layout/Grid'
import { Text } from '../../components/primitives/Text'
import { Badge } from '../../components/primitives/Badge'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('grid')!

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
                    <Badge key={i} style={{ display: 'block', textAlign: 'center' }}>{i + 1}</Badge>
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
                  <Badge style={{ display: 'block', textAlign: 'center' }}>A</Badge>
                  <Badge style={{ display: 'block', textAlign: 'center' }}>B</Badge>
                  <Badge style={{ display: 'block', textAlign: 'center' }}>C</Badge>
                </Grid>
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
