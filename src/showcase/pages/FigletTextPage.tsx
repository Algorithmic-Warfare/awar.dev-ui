import { useState } from 'react'
import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { FigletText } from '../../components/branding/FigletText'
import { Card } from '../../components/containers/Card'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Button } from '../../components/primitives/Button'
import { Grid } from '../../components/layout/Grid'
import type { FigletGradientPreset, FigletDirection, FigletFont } from '../../components/branding/FigletText'

const entry = getComponentBySlug('figlet-text')!

const FONTS: FigletFont[] = ['ansi-shadow', 'bloody', 'calvin-s']
const GRADIENTS: FigletGradientPreset[] = ['brand', 'fire', 'blood', 'mono', 'ember', 'solar']
const DIRECTIONS: FigletDirection[] = ['vertical', 'horizontal', 'diagonal']

export default function FigletTextPage() {
  const [font, setFont] = useState<FigletFont>('ansi-shadow')
  const [gradient, setGradient] = useState<FigletGradientPreset>('brand')
  const [direction, setDirection] = useState<FigletDirection>('vertical')

  return (
    <ComponentPage entry={entry}>
      {/* Interactive demo */}
      <Card>
        <Card.Header>INTERACTIVE</Card.Header>
        <Card.Body>
          <Stack gap="lg">
            <Inline gap="sm" wrap>
              <Text role="label" color="secondary" style={{ minWidth: 64 }}>FONT</Text>
              {FONTS.map(f => (
                <Button
                  key={f}
                  variant={font === f ? 'primary' : 'ghost'}
                  size="compact"
                  onClick={() => setFont(f)}
                >
                  {f}
                </Button>
              ))}
            </Inline>
            <Inline gap="sm" wrap>
              <Text role="label" color="secondary" style={{ minWidth: 64 }}>GRADIENT</Text>
              {GRADIENTS.map(g => (
                <Button
                  key={g}
                  variant={gradient === g ? 'primary' : 'ghost'}
                  size="compact"
                  onClick={() => setGradient(g)}
                >
                  {g}
                </Button>
              ))}
            </Inline>
            <Inline gap="sm" wrap>
              <Text role="label" color="secondary" style={{ minWidth: 64 }}>DIR</Text>
              {DIRECTIONS.map(d => (
                <Button
                  key={d}
                  variant={direction === d ? 'primary' : 'ghost'}
                  size="compact"
                  onClick={() => setDirection(d)}
                >
                  {d}
                </Button>
              ))}
            </Inline>
            <div style={{ overflow: 'auto' }}>
              <FigletText font={font} gradient={gradient} direction={direction} fontSize={14} />
            </div>
          </Stack>
        </Card.Body>
      </Card>

      {/* Fonts */}
      <Card>
        <Card.Header>FONTS</Card.Header>
        <Card.Body>
          <Stack gap="lg">
            {FONTS.map(f => (
              <Stack key={f} gap="xs">
                <Text role="label" color="muted">{f}</Text>
                <div style={{ overflow: 'auto' }}>
                  <FigletText font={f} gradient="brand" fontSize={12} />
                </div>
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>

      {/* Gradient presets */}
      <Card>
        <Card.Header>GRADIENT PRESETS</Card.Header>
        <Card.Body>
          <Grid columns="repeat(auto-fit, minmax(320px, 1fr))" gap="md">
            {GRADIENTS.map(g => (
              <Card key={g} variant="filled">
                <Card.Body>
                  <Stack gap="xs">
                    <Text role="label" color={g === gradient ? 'accent' : 'muted'}>{g}</Text>
                    <div style={{ overflow: 'auto', fontSize: 8, lineHeight: 1 }}>
                      <FigletText gradient={g} direction={direction} fontSize={8} />
                    </div>
                  </Stack>
                </Card.Body>
              </Card>
            ))}
          </Grid>
        </Card.Body>
      </Card>

      {/* Full wordmark */}
      <Card>
        <Card.Header>FULL WORDMARK</Card.Header>
        <Card.Body>
          <div style={{ overflow: 'auto' }}>
            <FigletText fullWordmark gradient="brand" direction="vertical" fontSize={12} />
          </div>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
