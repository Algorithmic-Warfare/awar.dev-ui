import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Frame } from '../../components/containers/Frame'
import { Card } from '../../components/containers/Card'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Grid } from '../../components/layout/Grid'
import { Text } from '../../components/primitives/Text'
import { Badge } from '../../components/primitives/Badge'
import type { FrameVariant, FrameAccent } from '../../components/containers/Frame'

const entry = getComponentBySlug('frame')!

const VARIANTS: FrameVariant[] = ['grid', 'stack', 'inline']
const ACCENTS: FrameAccent[] = ['default', 'brand', 'interactive', 'error', 'success', 'warning', 'info']

export default function FramePage() {
  return (
    <ComponentPage entry={entry}>
      {/* Variants */}
      <Card>
        <Card.Header>VARIANTS</Card.Header>
        <Card.Body>
          <Grid columns={3} gap="lg">
            {VARIANTS.map(v => (
              <Frame key={v} variant={v} style={{ minHeight: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text role="label" color="muted">{v.toUpperCase()}</Text>
              </Frame>
            ))}
          </Grid>
        </Card.Body>
      </Card>

      {/* Accents */}
      <Card>
        <Card.Header>ACCENTS</Card.Header>
        <Card.Body>
          <Grid columns="repeat(auto-fit, minmax(160px, 1fr))" gap="md">
            {ACCENTS.map(a => (
              <Frame key={a} variant="grid" accent={a} style={{ minHeight: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text role="caption" color="muted">{a}</Text>
              </Frame>
            ))}
          </Grid>
        </Card.Body>
      </Card>

      {/* Titled frames */}
      <Card>
        <Card.Header>TITLED FRAMES</Card.Header>
        <Card.Body>
          <Stack gap="xl">
            <Frame variant="grid" title="SYSTEM STATUS" accent="interactive">
              <Stack gap="sm" style={{ paddingTop: 4 }}>
                <Text role="body">CPU: 42%</Text>
                <Text role="body">MEM: 2.1 GB / 8 GB</Text>
                <Text role="body">UPTIME: 14d 6h 32m</Text>
              </Stack>
            </Frame>

            <Frame variant="stack" title="PROCESS LOG" accent="info">
              <Stack gap="xs" style={{ paddingTop: 4 }}>
                <Text role="caption" color="muted">14:32:01  [INFO]  Service started on :8080</Text>
                <Text role="caption" color="muted">14:32:02  [INFO]  Connected to database</Text>
                <Text role="caption" color="success">14:32:03  [OK]    Health check passed</Text>
              </Stack>
            </Frame>

            <Frame variant="grid" title="CONFIGURATION" label="v2.4.1" accent="brand">
              <Stack gap="sm" style={{ paddingTop: 4 }}>
                <Inline gap="md">
                  <Text role="label" color="secondary" style={{ minWidth: 80 }}>ENV</Text>
                  <Text role="body">production</Text>
                </Inline>
                <Inline gap="md">
                  <Text role="label" color="secondary" style={{ minWidth: 80 }}>REGION</Text>
                  <Text role="body">us-east-1</Text>
                </Inline>
              </Stack>
            </Frame>
          </Stack>
        </Card.Body>
      </Card>

      {/* Composition with layout */}
      <Card>
        <Card.Header>COMPOSITION</Card.Header>
        <Card.Body>
          <Stack gap="lg">
            <Text role="label" color="muted">FRAME + STACK</Text>
            <Frame variant="stack" accent="brand">
              <Stack gap="sm">
                <Text role="body">Line one</Text>
                <Text role="body">Line two</Text>
                <Text role="body">Line three</Text>
              </Stack>
            </Frame>

            <Text role="label" color="muted">FRAME + INLINE</Text>
            <Frame variant="inline" accent="interactive">
              <Inline gap="sm" wrap>
                <Badge variant="success">ACTIVE</Badge>
                <Badge variant="default">NODE-01</Badge>
                <Badge variant="default">NODE-02</Badge>
                <Badge variant="warning">NODE-03</Badge>
              </Inline>
            </Frame>

            <Text role="label" color="muted">FRAME + GRID</Text>
            <Frame variant="grid" accent="default">
              <Grid columns={3} gap="sm">
                <Frame variant="stack" accent="success" style={{ padding: 8, textAlign: 'center' as const }}>
                  <Text role="caption" color="muted">REQUESTS</Text>
                  <Text role="heading" color="accent">1,247</Text>
                </Frame>
                <Frame variant="stack" accent="warning" style={{ padding: 8, textAlign: 'center' as const }}>
                  <Text role="caption" color="muted">LATENCY</Text>
                  <Text role="heading" color="accent">42ms</Text>
                </Frame>
                <Frame variant="stack" accent="error" style={{ padding: 8, textAlign: 'center' as const }}>
                  <Text role="caption" color="muted">ERRORS</Text>
                  <Text role="heading" color="accent">3</Text>
                </Frame>
              </Grid>
            </Frame>
          </Stack>
        </Card.Body>
      </Card>

      {/* Nesting */}
      <Card>
        <Card.Header>NESTING</Card.Header>
        <Card.Body>
          <Frame variant="grid" title="OUTER" accent="brand">
            <Grid columns={2} gap="md" style={{ paddingTop: 4 }}>
              <Frame variant="inline" accent="interactive">
                <Stack gap="xs">
                  <Text role="label" color="muted">SECTION A</Text>
                  <Text role="body">Content within an inline frame nested inside a grid frame.</Text>
                </Stack>
              </Frame>
              <Frame variant="stack" accent="info">
                <Stack gap="xs">
                  <Text role="label" color="muted">SECTION B</Text>
                  <Text role="body">Content within a stack frame nested inside a grid frame.</Text>
                </Stack>
              </Frame>
            </Grid>
          </Frame>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
