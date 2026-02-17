import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Wordmark } from '../../components/branding/Wordmark'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('wordmark')!

export default function WordmarkPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>SIZES</Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Inline gap="md" align="center">
              <Wordmark size="xs" />
              <Text role="caption" color="muted">xs</Text>
            </Inline>
            <Inline gap="md" align="center">
              <Wordmark size="sm" />
              <Text role="caption" color="muted">sm</Text>
            </Inline>
            <Inline gap="md" align="center">
              <Wordmark size="md" />
              <Text role="caption" color="muted">md</Text>
            </Inline>
            <Inline gap="md" align="center">
              <Wordmark size="lg" />
              <Text role="caption" color="muted">lg</Text>
            </Inline>
          </Stack>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>WITH SUBTITLE</Card.Header>
        <Card.Body>
          <Wordmark size="md" subtitle />
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
