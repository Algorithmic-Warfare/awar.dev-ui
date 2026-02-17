import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Stack } from '../../components/layout/Stack'
import { Kbd } from '../../components/primitives/Kbd'
import { ActionBar } from '../../components/containers/ActionBar'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('action-bar')!

export default function ActionBarPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>WITH KEYBOARD SHORTCUTS</Card.Header>
        <Card.Body>
          <Stack gap="md">
            <ActionBar>
              <ActionBar.Item><Kbd combo="ctrl+1" /> Dashboard</ActionBar.Item>
              <ActionBar.Item><Kbd combo="ctrl+2" /> Processes</ActionBar.Item>
              <ActionBar.Item><Kbd combo="ctrl+3" /> Logs</ActionBar.Item>
              <ActionBar.Item disabled>Disabled</ActionBar.Item>
            </ActionBar>
          </Stack>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
