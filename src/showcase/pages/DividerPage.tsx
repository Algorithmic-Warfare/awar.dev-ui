import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Text } from '../../components/primitives/Text'
import { Divider } from '../../components/primitives/Divider'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('divider')!

export default function DividerPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>VARIANTS</Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Text role="caption" color="muted">thin (default)</Text>
            <Divider />
            <Text role="caption" color="muted">thick</Text>
            <Divider variant="thick" />
          </Stack>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
