import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Inline } from '../../components/layout/Inline'
import { Button } from '../../components/primitives/Button'
import { Tooltip } from '../../components/overlays/Tooltip'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('tooltip')!

export default function TooltipPage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>PLACEMENT</Card.Header>
        <Card.Body>
          <Inline gap="md" align="center">
            <Tooltip content="Top tooltip" side="top">
              <Button variant="ghost">Top</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" side="right">
              <Button variant="ghost">Right</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" side="bottom">
              <Button variant="ghost">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" side="left">
              <Button variant="ghost">Left</Button>
            </Tooltip>
          </Inline>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>DEFAULT</Card.Header>
        <Card.Body>
          <Tooltip content="System information">
            <Button variant="secondary">Hover me</Button>
          </Tooltip>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
