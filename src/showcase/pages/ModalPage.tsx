import { useState } from 'react'
import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Inline } from '../../components/layout/Inline'
import { Text } from '../../components/primitives/Text'
import { Button } from '../../components/primitives/Button'
import { Modal } from '../../components/overlays/Modal'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('modal')!

export default function ModalPage() {
  const [open, setOpen] = useState(false)

  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>DIALOG</Card.Header>
        <Card.Body>
          <Modal open={open} onOpenChange={setOpen}>
            <Modal.Trigger>
              <Button variant="secondary">Open Modal</Button>
            </Modal.Trigger>
            <Modal.Content title="CONFIRM ACTION">
              <Stack gap="md">
                <Text role="body">Are you sure you want to proceed?</Text>
                <Inline gap="md">
                  <Modal.Close>
                    <Button variant="primary">Confirm</Button>
                  </Modal.Close>
                  <Modal.Close>
                    <Button variant="ghost">Cancel</Button>
                  </Modal.Close>
                </Inline>
              </Stack>
            </Modal.Content>
          </Modal>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
