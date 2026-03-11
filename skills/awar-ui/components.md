# AWAR Component Reference

Complete reference for all `@awar.dev/ui` components with props and usage patterns.

## Provider & Theme

### AWARProvider
Wraps your app, manages dark/light theme via class on `<html>`.

```tsx
import { AWARProvider } from '@awar.dev/ui'

<AWARProvider defaultTheme="dark">
  {children}
</AWARProvider>
```

### useAWARTheme
Hook to read and toggle theme.

```tsx
const { theme, setTheme, toggleTheme } = useAWARTheme()
// theme: "dark" | "light"
```

---

## Inputs

### Button
6 variants x 4 sizes + icon sizes.

```tsx
import { Button } from '@awar.dev/ui'

<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes: "default" (h-7), "xs" (h-5), "sm" (h-6), "lg" (h-9)
// Icon sizes: "icon" (7x7), "icon-xs" (5x5), "icon-sm" (6x6), "icon-lg" (9x9)
<Button size="icon"><PlusIcon /></Button>
```

### Input
Text input with styled native controls (number spinners hidden, search X styled).

```tsx
import { Input } from '@awar.dev/ui'

<Input type="text" placeholder="Text" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />
<Input type="search" placeholder="Search..." />
<Input disabled placeholder="Disabled" />
```

### NumberInput
Stepper input with `[-] VALUE [+]` format.

```tsx
import { NumberInput } from '@awar.dev/ui'

// Controlled
const [qty, setQty] = useState(1)
<NumberInput value={qty} onChange={setQty} min={0} max={100} />

// With unit (right-aligned by default)
<NumberInput value={0.5} onChange={setAmt} min={0} step={0.1} unit="SUI" />

// Unit on the left
<NumberInput defaultValue={25} min={0} step={1} unit="$" unitPosition="left" />

// Percentage
<NumberInput defaultValue={0.5} min={0} max={100} step={0.1} unit="%" />

// Disabled
<NumberInput value={5} unit="ETH" disabled />
```

**Props:** `value`, `defaultValue`, `onChange: (value: number) => void`, `min`, `max`, `step`, `unit`, `unitPosition: "left" | "right"`, `disabled`

### Textarea
Auto-height text area.

```tsx
import { Textarea } from '@awar.dev/ui'

<Textarea placeholder="Enter description..." />
```

### Select
Single-value dropdown.

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@awar.dev/ui'

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>
```

### Checkbox
Square checkbox (no rounded corners).

```tsx
import { Checkbox } from '@awar.dev/ui'

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>
```

### RadioGroup
Square radio indicators.

```tsx
import { RadioGroup, RadioGroupItem } from '@awar.dev/ui'

<RadioGroup defaultValue="a">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="a" id="a" />
    <Label htmlFor="a">Option A</Label>
  </div>
</RadioGroup>
```

### Switch
Toggle switch.

```tsx
import { Switch } from '@awar.dev/ui'

<Switch />
```

### Slider
Range slider with amber thumb.

```tsx
import { Slider } from '@awar.dev/ui'

<Slider defaultValue={[50]} max={100} step={1} />
```

### Toggle / ToggleGroup
Pressable toggle buttons.

```tsx
import { Toggle } from '@awar.dev/ui'
import { ToggleGroup, ToggleGroupItem } from '@awar.dev/ui'

<Toggle>Bold</Toggle>

<ToggleGroup type="single">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
</ToggleGroup>
```

### Calendar
Date picker — single, range, or popover.

```tsx
import { Calendar } from '@awar.dev/ui'

<Calendar mode="single" selected={date} onSelect={setDate} />
<Calendar mode="range" selected={range} onSelect={setRange} />
```

### InputOTP
One-time password input.

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@awar.dev/ui'

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

### Form
react-hook-form + zod validation integration.

```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@awar.dev/ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const form = useForm({ resolver: zodResolver(schema) })

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField control={form.control} name="email" render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl><Input {...field} /></FormControl>
        <FormMessage />
      </FormItem>
    )} />
  </form>
</Form>
```

---

## Display

### Card
Container with sub-components.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@awar.dev/ui'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Body</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Table (with Sorting)
Sortable columns with auto-detect numeric sort.

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableSortHead, TableCell, toggleSort, sortRows } from '@awar.dev/ui'
import type { SortState } from '@awar.dev/ui'

const [sort, setSort] = useState<SortState>({ column: null, direction: null })
const sorted = sortRows(data, sort)

<Table>
  <TableHeader>  {/* bg-secondary background */}
    <TableRow>
      <TableSortHead column="name" sort={sort} onSort={(col) => setSort(toggleSort(sort, col))}>
        Name
      </TableSortHead>
      <TableSortHead column="value" sort={sort} onSort={(col) => setSort(toggleSort(sort, col))}>
        Value
      </TableSortHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {sorted.map(row => (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.value}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

`sortRows()` auto-detects numeric values (strips `%`, `$`) vs string comparison.
`toggleSort()` cycles: null → asc → desc → null.

### Badge
Status labels.

```tsx
import { Badge } from '@awar.dev/ui'

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@awar.dev/ui'

<Avatar>
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>AW</AvatarFallback>
</Avatar>
```

### Skeleton
Loading placeholder.

```tsx
import { Skeleton } from '@awar.dev/ui'

<Skeleton className="h-7 w-[200px]" />
```

---

## Feedback

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from '@awar.dev/ui'

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>Something happened.</AlertDescription>
</Alert>
```

### Progress

```tsx
import { Progress } from '@awar.dev/ui'

<Progress value={66} />
```

### Sonner (Toasts)

```tsx
import { Toaster } from '@awar.dev/ui'
import { toast } from 'sonner'

// In your layout:
<Toaster />

// Trigger:
toast("Event has been created")
toast.success("Success!")
toast.error("Something went wrong")
```

---

## Overlays

### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@awar.dev/ui'

<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>Make changes here.</DialogDescription>
    </DialogHeader>
    {/* content */}
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### AlertDialog

```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@awar.dev/ui'

<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="destructive">Delete</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### DropdownMenu

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut } from '@awar.dev/ui'

<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Options</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile <DropdownMenuShortcut>Ctrl+P</DropdownMenuShortcut></DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Popover

```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle } from '@awar.dev/ui'

<Popover>
  <PopoverTrigger asChild><Button>Info</Button></PopoverTrigger>
  <PopoverContent>
    <PopoverHeader><PopoverTitle>Details</PopoverTitle></PopoverHeader>
    <p>Content here</p>
  </PopoverContent>
</Popover>
```

### Sheet

```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@awar.dev/ui'

<Sheet>
  <SheetTrigger asChild><Button>Open Panel</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader><SheetTitle>Panel</SheetTitle></SheetHeader>
    {/* content */}
  </SheetContent>
</Sheet>
```

### Tooltip

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@awar.dev/ui'

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## Navigation

### Breadcrumb

```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@awar.dev/ui'

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@awar.dev/ui'

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

---

## Layout

### Accordion

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@awar.dev/ui'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Resizable

```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@awar.dev/ui'

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>Left</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Right</ResizablePanel>
</ResizablePanelGroup>
```

### Command (Command Palette)

```tsx
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@awar.dev/ui'

<Command>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>Search</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

---

## Visualization

### GraphCanvas (React Flow Wrapper)
AWAR-themed React Flow wrapper with pan/zoom/select.

```tsx
import { GraphCanvas, GraphLegend, type GraphEdgeData } from '@awar.dev/ui'
import { Handle, Position, useNodesState, useEdgesState, type Node, type NodeProps } from '@awar.dev/ui'

// Define custom node
function MyNode({ data }: NodeProps) {
  return (
    <div className="border border-border bg-card p-3 w-[180px]">
      <Handle type="target" position={Position.Top} />
      <div className="text-sm font-bold">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

// Use
const [nodes, , onNodesChange] = useNodesState(initialNodes)
const [edges, , onEdgesChange] = useEdgesState(initialEdges)

<GraphCanvas
  nodes={nodes} edges={edges}
  onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}
  nodeTypes={{ custom: MyNode }}
>
  <GraphLegend title="LEGEND" position="bottom-right" items={[
    { color: "var(--primary)", label: "Primary", variant: "line" },
    { color: "var(--accent)", label: "Secondary", variant: "line", dash: "6 3" },
  ]} />
</GraphCanvas>
```

**GraphCanvas Props:** `nodes`, `edges`, `onNodesChange`, `onEdgesChange`, `nodeTypes`, `edgeTypes`, `background` (boolean or config), `controls` (boolean), `colorMode`, `minZoom`, `maxZoom`, `fitView`, `children`, `className`

**GraphEdge** — custom edge type `"awar"` registered by default. Supports `stroke`, `dash`, `width`, `animated` via edge data.

### ChartContainer (Recharts Wrapper)

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@awar.dev/ui'
import type { ChartConfig } from '@awar.dev/ui'
import { AreaChart, Area, XAxis, YAxis } from 'recharts'

const config: ChartConfig = {
  value: { label: "Value", color: "var(--primary)" },
}

<ChartContainer config={config} className="h-[300px]">
  <AreaChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Area dataKey="value" fill="var(--color-value)" stroke="var(--color-value)" />
  </AreaChart>
</ChartContainer>
```

---

## Branding

### FigletText
ASCII art text with gradient support.

```tsx
import { FigletText } from '@awar.dev/ui'

<FigletText text="AWAR" gradient="amber" />
<FigletText text="Hello" font="calvin-s" gradient="maroon" />
```

**Props:** `text`, `font: "ansi-shadow" | "calvin-s"`, `gradient` (preset or custom), `direction`

### Logo / LogoLockup

```tsx
import { Logo, LogoLockup } from '@awar.dev/ui'

<Logo size="md" />
<LogoLockup layout="horizontal" />
<LogoLockup layout="stacked" />
```

---

## Utility Exports

```tsx
import { cn } from '@awar.dev/ui'              // clsx + tailwind-merge
import { useIsMobile } from '@awar.dev/ui'      // responsive hook
```
