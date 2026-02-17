import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Alert } from '../../components/containers/Alert'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('alert')!

export default function AlertPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>VARIANTS</Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Alert variant="info">Information: System update available.</Alert>
            <Alert variant="success">Operation completed successfully.</Alert>
            <Alert variant="warning">Warning: Disk usage above 80%.</Alert>
            <Alert variant="error">Error: Connection to server lost.</Alert>
          </Stack>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
