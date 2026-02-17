import { getComponentBySlug } from '../registry'
import ComponentPage from '../ComponentPage'
import { Badge } from '../../components/primitives/Badge'
import { Table } from '../../components/containers/Table'
import { Card } from '../../components/containers/Card'

const entry = getComponentBySlug('table')!

export default function TablePage() {
  return (
    <ComponentPage entry={entry}>
      <Card>
        <Card.Header>PROCESS TABLE</Card.Header>
        <Card.Body>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell header>PID</Table.Cell>
                <Table.Cell header>PROCESS</Table.Cell>
                <Table.Cell header>STATUS</Table.Cell>
                <Table.Cell header>CPU</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1024</Table.Cell>
                <Table.Cell>node</Table.Cell>
                <Table.Cell><Badge variant="success">RUNNING</Badge></Table.Cell>
                <Table.Cell>12.4%</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2048</Table.Cell>
                <Table.Cell>postgres</Table.Cell>
                <Table.Cell><Badge variant="success">RUNNING</Badge></Table.Cell>
                <Table.Cell>3.1%</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3072</Table.Cell>
                <Table.Cell>redis</Table.Cell>
                <Table.Cell><Badge variant="warning">IDLE</Badge></Table.Cell>
                <Table.Cell>0.2%</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Body>
      </Card>
    </ComponentPage>
  )
}
