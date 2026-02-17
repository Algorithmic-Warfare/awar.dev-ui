import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('text')!

export default function TextPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>ROLES</Card.Header>
        <Card.Body>
          <Stack gap="sm">
            <Text role="display">DISPLAY TEXT</Text>
            <Text role="heading">HEADING TEXT</Text>
            <Text role="subheading">SUBHEADING TEXT</Text>
            <Text role="body">Body text — the default reading size at 14px.</Text>
            <Text role="label">LABEL TEXT</Text>
            <Text role="caption">Caption text for timestamps and metadata.</Text>
          </Stack>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>COLORS</Card.Header>
        <Card.Body>
          <Inline gap="md" wrap>
            <Text color="primary">Primary</Text>
            <Text color="secondary">Secondary</Text>
            <Text color="muted">Muted</Text>
            <Text color="brand">Brand</Text>
            <Text color="accent">Accent</Text>
            <Text color="error">Error</Text>
            <Text color="success">Success</Text>
            <Text color="warning">Warning</Text>
            <Text color="info">Info</Text>
          </Inline>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
