import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Inline } from '../../components/layout/Inline'
import { Badge } from '../../components/primitives/Badge'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('badge')!

export default function BadgePage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>VARIANTS</Card.Header>
        <Card.Body>
          <Inline gap="sm" wrap>
            <Badge>DEFAULT</Badge>
            <Badge variant="success">SUCCESS</Badge>
            <Badge variant="warning">WARNING</Badge>
            <Badge variant="error">ERROR</Badge>
            <Badge variant="info">INFO</Badge>
            <Badge variant="brand">BRAND</Badge>
          </Inline>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
