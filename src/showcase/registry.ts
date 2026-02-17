export interface PropInfo {
  name: string
  type: string
  default?: string
  description: string
}

export interface SubcomponentInfo {
  name: string
  props: PropInfo[]
}

export interface ComponentEntry {
  slug: string
  name: string
  category: string
  description: string
  props: PropInfo[]
  subcomponents?: SubcomponentInfo[]
  usage: string
}

export interface Category {
  name: string
  slug: string
}

export const categories: Category[] = [
  { name: 'BRANDING', slug: 'branding' },
  { name: 'LAYOUT', slug: 'layout' },
  { name: 'PRIMITIVES', slug: 'primitives' },
  { name: 'CONTAINERS', slug: 'containers' },
  { name: 'OVERLAYS', slug: 'overlays' },
]

export const registry: ComponentEntry[] = [
  // ── Branding ──
  {
    slug: 'logo',
    name: 'Logo',
    category: 'branding',
    description: 'SVG logo mark with size and color variants.',
    props: [
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", default: "'md'", description: 'Logo dimensions' },
      { name: 'variant', type: "'default' | 'brand' | 'accent' | 'mono' | 'inverse'", default: "'default'", description: 'Color scheme' },
    ],
    usage: `<Logo size="lg" variant="accent" />`,
  },
  {
    slug: 'wordmark',
    name: 'Wordmark',
    category: 'branding',
    description: 'Text-based brand name with optional subtitle.',
    props: [
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", default: "'md'", description: 'Wordmark scale' },
      { name: 'subtitle', type: 'boolean', default: 'false', description: 'Show subtitle text' },
    ],
    usage: `<Wordmark size="md" subtitle />`,
  },
  {
    slug: 'logo-lockup',
    name: 'LogoLockup',
    category: 'branding',
    description: 'Combined logo and wordmark with layout options.',
    props: [
      { name: 'orientation', type: "'horizontal' | 'stacked'", default: "'horizontal'", description: 'Layout direction' },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", default: "'md'", description: 'Overall scale' },
      { name: 'variant', type: "'default' | 'brand' | 'accent' | 'mono' | 'inverse'", default: "'default'", description: 'Color scheme' },
      { name: 'subtitle', type: 'boolean', default: 'false', description: 'Show subtitle text' },
    ],
    usage: `<LogoLockup orientation="stacked" size="lg" subtitle />`,
  },

  // ── Layout ──
  {
    slug: 'stack',
    name: 'Stack',
    category: 'layout',
    description: 'Vertical flex layout with consistent gap spacing.',
    props: [
      { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Space between children' },
      { name: 'as', type: 'ElementType', default: "'div'", description: 'Rendered HTML element' },
    ],
    usage: `<Stack gap="lg">
  <Text>First</Text>
  <Text>Second</Text>
</Stack>`,
  },
  {
    slug: 'inline',
    name: 'Inline',
    category: 'layout',
    description: 'Horizontal flex layout with alignment and wrapping.',
    props: [
      { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Space between children' },
      { name: 'wrap', type: 'boolean', default: 'false', description: 'Allow wrapping to next line' },
      { name: 'align', type: "'start' | 'center' | 'end' | 'baseline'", default: "'start'", description: 'Cross-axis alignment' },
      { name: 'as', type: 'ElementType', default: "'div'", description: 'Rendered HTML element' },
    ],
    usage: `<Inline gap="md" align="center">
  <Button>One</Button>
  <Button>Two</Button>
</Inline>`,
  },
  {
    slug: 'grid',
    name: 'Grid',
    category: 'layout',
    description: 'CSS grid layout with column and gap control.',
    props: [
      { name: 'columns', type: 'number | string', default: '3', description: 'Number of columns or CSS grid-template-columns value' },
      { name: 'gap', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Space between grid items' },
      { name: 'as', type: 'ElementType', default: "'div'", description: 'Rendered HTML element' },
    ],
    usage: `<Grid columns={3} gap="md">
  <Card>A</Card>
  <Card>B</Card>
  <Card>C</Card>
</Grid>`,
  },

  // ── Primitives ──
  {
    slug: 'text',
    name: 'Text',
    category: 'primitives',
    description: 'Semantic typography with role-based sizing and color options.',
    props: [
      { name: 'role', type: "'display' | 'heading' | 'subheading' | 'body' | 'label' | 'caption'", default: "'body'", description: 'Typographic role controlling size and weight' },
      { name: 'color', type: "'primary' | 'secondary' | 'muted' | 'inverse' | 'brand' | 'accent' | 'error' | 'success' | 'warning' | 'info'", default: "'primary'", description: 'Text color' },
      { name: 'as', type: 'ElementType', default: 'auto', description: 'Override rendered HTML element' },
    ],
    usage: `<Text role="heading" color="accent">Title</Text>`,
  },
  {
    slug: 'button',
    name: 'Button',
    category: 'primitives',
    description: 'Action trigger with variant styles and size options.',
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'danger' | 'ghost'", default: "'primary'", description: 'Visual style' },
      { name: 'size', type: "'compact' | 'default' | 'comfortable' | 'large'", default: "'default'", description: 'Button dimensions' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable interaction' },
    ],
    usage: `<Button variant="primary" size="default">Click</Button>`,
  },
  {
    slug: 'input',
    name: 'Input',
    category: 'primitives',
    description: 'Form text input with label and error display.',
    props: [
      { name: 'label', type: 'string', description: 'Label text above the input' },
      { name: 'error', type: 'string', description: 'Error message below the input' },
      { name: 'prefix', type: 'string', description: 'Prefix text inside the input' },
    ],
    usage: `<Input label="Email" placeholder="you@example.com" />`,
  },
  {
    slug: 'badge',
    name: 'Badge',
    category: 'primitives',
    description: 'Status indicator label with semantic color variants.',
    props: [
      { name: 'variant', type: "'default' | 'success' | 'warning' | 'error' | 'info' | 'brand'", default: "'default'", description: 'Color scheme' },
    ],
    usage: `<Badge variant="success">ACTIVE</Badge>`,
  },
  {
    slug: 'divider',
    name: 'Divider',
    category: 'primitives',
    description: 'Visual separator line between content sections.',
    props: [
      { name: 'variant', type: "'thin' | 'thick'", default: "'thin'", description: 'Line thickness' },
    ],
    usage: `<Divider variant="thin" />`,
  },
  {
    slug: 'kbd',
    name: 'Kbd',
    category: 'primitives',
    description: 'Keyboard shortcut display with platform-aware symbols.',
    props: [
      { name: 'combo', type: 'string', description: "Key combination string (e.g. 'ctrl+s')" },
      { name: 'platform', type: "'mac' | 'win' | 'auto'", default: "'auto'", description: 'Platform for symbol rendering' },
    ],
    usage: `<Kbd combo="ctrl+shift+p" />`,
  },

  // ── Containers ──
  {
    slug: 'card',
    name: 'Card',
    category: 'containers',
    description: 'Content container with optional header and footer sections.',
    props: [
      { name: 'variant', type: "'default' | 'filled'", default: "'default'", description: 'Card background style' },
    ],
    subcomponents: [
      { name: 'Card.Header', props: [{ name: 'children', type: 'ReactNode', description: 'Header content' }] },
      { name: 'Card.Body', props: [{ name: 'children', type: 'ReactNode', description: 'Body content' }] },
      { name: 'Card.Footer', props: [{ name: 'children', type: 'ReactNode', description: 'Footer content' }] },
    ],
    usage: `<Card variant="default">
  <Card.Header>TITLE</Card.Header>
  <Card.Body>Content here</Card.Body>
  <Card.Footer>
    <Button variant="ghost">Action</Button>
  </Card.Footer>
</Card>`,
  },
  {
    slug: 'alert',
    name: 'Alert',
    category: 'containers',
    description: 'Contextual feedback message with semantic variants.',
    props: [
      { name: 'variant', type: "'error' | 'warning' | 'success' | 'info'", default: "'info'", description: 'Alert type and color' },
    ],
    usage: `<Alert variant="success">Operation completed.</Alert>`,
  },
  {
    slug: 'table',
    name: 'Table',
    category: 'containers',
    description: 'Data table with header, body, and cell components.',
    props: [],
    subcomponents: [
      { name: 'Table.Head', props: [{ name: 'children', type: 'ReactNode', description: 'Header rows' }] },
      { name: 'Table.Body', props: [{ name: 'children', type: 'ReactNode', description: 'Body rows' }] },
      { name: 'Table.Row', props: [{ name: 'children', type: 'ReactNode', description: 'Row cells' }] },
      { name: 'Table.Cell', props: [
        { name: 'header', type: 'boolean', default: 'false', description: 'Render as header cell (th)' },
        { name: 'children', type: 'ReactNode', description: 'Cell content' },
      ]},
    ],
    usage: `<Table>
  <Table.Head>
    <Table.Row>
      <Table.Cell header>NAME</Table.Cell>
      <Table.Cell header>VALUE</Table.Cell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Alpha</Table.Cell>
      <Table.Cell>100</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`,
  },
  {
    slug: 'action-bar',
    name: 'ActionBar',
    category: 'containers',
    description: 'Horizontal bar of action items with keyboard shortcut support.',
    props: [],
    subcomponents: [
      { name: 'ActionBar.Item', props: [
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the action' },
        { name: 'children', type: 'ReactNode', description: 'Item content (text, Kbd, etc.)' },
      ]},
    ],
    usage: `<ActionBar>
  <ActionBar.Item>
    <Kbd combo="ctrl+1" /> Dashboard
  </ActionBar.Item>
  <ActionBar.Item>
    <Kbd combo="ctrl+2" /> Settings
  </ActionBar.Item>
</ActionBar>`,
  },
  {
    slug: 'list',
    name: 'List',
    category: 'containers',
    description: 'Bullet list with configurable marker styles.',
    props: [
      { name: 'bullet', type: "'none' | 'dash' | 'arrow' | 'dot'", default: "'arrow'", description: 'Bullet character style' },
    ],
    subcomponents: [
      { name: 'List.Item', props: [{ name: 'children', type: 'ReactNode', description: 'Item content' }] },
    ],
    usage: `<List bullet="arrow">
  <List.Item>First item</List.Item>
  <List.Item>Second item</List.Item>
</List>`,
  },

  // ── Overlays ──
  {
    slug: 'modal',
    name: 'Modal',
    category: 'overlays',
    description: 'Dialog overlay with trigger, content, and close controls.',
    props: [
      { name: 'open', type: 'boolean', description: 'Controlled open state' },
      { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Callback when open state changes' },
    ],
    subcomponents: [
      { name: 'Modal.Trigger', props: [
        { name: 'children', type: 'ReactNode', description: 'Trigger element' },
        { name: 'asChild', type: 'boolean', default: 'false', description: 'Merge props onto child element' },
      ]},
      { name: 'Modal.Content', props: [
        { name: 'title', type: 'string', description: 'Dialog title' },
        { name: 'description', type: 'string', description: 'Dialog description' },
        { name: 'children', type: 'ReactNode', description: 'Dialog body content' },
      ]},
      { name: 'Modal.Close', props: [
        { name: 'children', type: 'ReactNode', description: 'Close trigger element' },
        { name: 'asChild', type: 'boolean', default: 'false', description: 'Merge props onto child element' },
      ]},
    ],
    usage: `<Modal>
  <Modal.Trigger>
    <Button>Open</Button>
  </Modal.Trigger>
  <Modal.Content title="CONFIRM">
    <Text>Are you sure?</Text>
    <Modal.Close>
      <Button>Close</Button>
    </Modal.Close>
  </Modal.Content>
</Modal>`,
  },
  {
    slug: 'dropdown',
    name: 'Dropdown',
    category: 'overlays',
    description: 'Menu overlay triggered by a button with selectable items.',
    props: [],
    subcomponents: [
      { name: 'Dropdown.Trigger', props: [
        { name: 'children', type: 'ReactNode', description: 'Trigger element' },
        { name: 'asChild', type: 'boolean', default: 'false', description: 'Merge props onto child element' },
      ]},
      { name: 'Dropdown.Content', props: [
        { name: 'align', type: "'start' | 'center' | 'end'", default: "'start'", description: 'Horizontal alignment' },
        { name: 'sideOffset', type: 'number', default: '4', description: 'Gap from trigger in px' },
      ]},
      { name: 'Dropdown.Item', props: [
        { name: 'onSelect', type: '() => void', description: 'Selection callback' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the item' },
      ]},
      { name: 'Dropdown.Separator', props: [] },
    ],
    usage: `<Dropdown>
  <Dropdown.Trigger>
    <Button>Menu</Button>
  </Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item onSelect={() => {}}>Option A</Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item onSelect={() => {}}>Option B</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>`,
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    category: 'overlays',
    description: 'Hover-activated overlay showing brief helper text.',
    props: [
      { name: 'content', type: 'ReactNode', description: 'Tooltip text or content' },
      { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'top'", description: 'Preferred placement' },
      { name: 'sideOffset', type: 'number', default: '4', description: 'Gap from trigger in px' },
      { name: 'delayDuration', type: 'number', default: '200', description: 'Hover delay in ms' },
    ],
    usage: `<Tooltip content="Save changes" side="bottom">
  <Button>Save</Button>
</Tooltip>`,
  },
  {
    slug: 'popover',
    name: 'Popover',
    category: 'overlays',
    description: 'Click-activated overlay for rich content display.',
    props: [
      { name: 'open', type: 'boolean', description: 'Controlled open state' },
      { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Callback when open state changes' },
    ],
    subcomponents: [
      { name: 'Popover.Trigger', props: [
        { name: 'children', type: 'ReactNode', description: 'Trigger element' },
        { name: 'asChild', type: 'boolean', default: 'false', description: 'Merge props onto child element' },
      ]},
      { name: 'Popover.Content', props: [
        { name: 'align', type: "'start' | 'center' | 'end'", default: "'center'", description: 'Horizontal alignment' },
        { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'bottom'", description: 'Preferred placement' },
        { name: 'sideOffset', type: 'number', default: '4', description: 'Gap from trigger in px' },
      ]},
      { name: 'Popover.Close', props: [
        { name: 'children', type: 'ReactNode', description: 'Close trigger element' },
        { name: 'asChild', type: 'boolean', default: 'false', description: 'Merge props onto child element' },
      ]},
    ],
    usage: `<Popover>
  <Popover.Trigger>
    <Button>Details</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Text>Popover content here</Text>
    <Popover.Close>
      <Button variant="ghost" size="compact">Close</Button>
    </Popover.Close>
  </Popover.Content>
</Popover>`,
  },
]

export function getComponentsByCategory(categorySlug: string): ComponentEntry[] {
  return registry.filter(c => c.category === categorySlug)
}

export function getComponentBySlug(slug: string): ComponentEntry | undefined {
  return registry.find(c => c.slug === slug)
}
