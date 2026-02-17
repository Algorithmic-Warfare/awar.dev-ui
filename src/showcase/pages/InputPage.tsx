import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Input } from '../../components/primitives/Input'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('input')!

export default function InputPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>STATES</Card.Header>
        <Card.Body>
          <div style={{ maxWidth: 320 }}>
            <Stack gap="md">
              <Input label="Username" placeholder="Enter username..." />
              <Input label="Password" type="password" placeholder="Enter password..." />
              <Input label="Error State" error="This field is required" />
            </Stack>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>WITH PREFIX</Card.Header>
        <Card.Body>
          <div style={{ maxWidth: 320 }}>
            <Stack gap="md">
              <Input label="Domain" prefix="https://" placeholder="example.com" />
              <Input label="Amount" prefix="$" placeholder="0.00" />
            </Stack>
          </div>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
