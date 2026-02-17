import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { LogoLockup } from '../../components/branding/LogoLockup'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('logo-lockup')!

export default function LogoLockupPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>HORIZONTAL</Card.Header>
        <Card.Body>
          <Stack gap="md">
            <LogoLockup size="sm" />
            <LogoLockup size="md" subtitle />
            <LogoLockup size="lg" variant="accent" subtitle />
          </Stack>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>STACKED</Card.Header>
        <Card.Body>
          <Inline gap="xl" align="start">
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <LogoLockup orientation="stacked" size="md" subtitle />
              <Text role="caption" color="muted">md + subtitle</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <LogoLockup orientation="stacked" size="lg" />
              <Text role="caption" color="muted">lg</Text>
            </Stack>
          </Inline>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
