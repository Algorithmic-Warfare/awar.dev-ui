import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Text } from '../../components/primitives/Text'
import { Button } from '../../components/primitives/Button'
import { Popover } from '../../components/overlays/Popover'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('popover')!

export default function PopoverPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>POPOVER</Card.Header>
        <Card.Body>
          <Popover>
            <Popover.Trigger>
              <Button variant="secondary">Open Popover</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Stack gap="sm">
                <Text role="subheading">DETAILS</Text>
                <Text role="body" color="secondary">
                  Rich content in a popover overlay.
                </Text>
                <Popover.Close>
                  <Button variant="ghost" size="compact">Close</Button>
                </Popover.Close>
              </Stack>
            </Popover.Content>
          </Popover>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
