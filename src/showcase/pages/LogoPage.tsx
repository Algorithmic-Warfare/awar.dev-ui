import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Logo } from '../../components/branding/Logo'
import { Inline } from '../../components/layout/Inline'
import { Stack } from '../../components/layout/Stack'
import { Text } from '../../components/primitives/Text'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('logo')!

export default function LogoPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>SIZES</Card.Header>
        <Card.Body>
          <Inline gap="lg" align="center">
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Logo size="xs" />
              <Text role="caption" color="muted">xs</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Logo size="sm" />
              <Text role="caption" color="muted">sm</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Logo size="md" />
              <Text role="caption" color="muted">md</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Logo size="lg" />
              <Text role="caption" color="muted">lg</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Logo size="xl" />
              <Text role="caption" color="muted">xl</Text>
            </Stack>
          </Inline>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>VARIANTS</Card.Header>
        <Card.Body>
          <Inline gap="lg" align="center">
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Logo size="md" variant="default" />
              <Text role="caption" color="muted">default</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Logo size="md" variant="accent" />
              <Text role="caption" color="muted">accent</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Logo size="md" variant="brand" />
              <Text role="caption" color="muted">brand</Text>
            </Stack>
            <Stack gap="xs" style={{ alignItems: 'center' }}>
              <Logo size="md" variant="mono" />
              <Text role="caption" color="muted">mono</Text>
            </Stack>
            <Card variant="filled" style={{ padding: 8 }}>
              <Stack gap="xs" style={{ alignItems: 'center' }}>
                <Logo size="md" variant="inverse" />
                <Text role="caption" color="muted">inverse</Text>
              </Stack>
            </Card>
          </Inline>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
