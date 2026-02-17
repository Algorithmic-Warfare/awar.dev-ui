import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Button } from '../../components/primitives/Button'
import { Dropdown } from '../../components/overlays/Dropdown'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('dropdown')!

export default function DropdownPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>MENU</Card.Header>
        <Card.Body>
          <Dropdown>
            <Dropdown.Trigger>
              <Button variant="secondary">Actions ▾</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item onSelect={() => {}}>New File</Dropdown.Item>
              <Dropdown.Item onSelect={() => {}}>Open</Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item onSelect={() => {}}>Save</Dropdown.Item>
              <Dropdown.Item disabled>Delete</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
