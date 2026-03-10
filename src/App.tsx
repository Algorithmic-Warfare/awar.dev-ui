import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { AlertCircle, Terminal, ChevronDown } from 'lucide-react'

function App() {
  const [mode, setMode] = useState<'dark' | 'light'>('dark')
  const [progress, setProgress] = useState(42)

  const toggle = () => {
    const next = mode === 'dark' ? 'light' : 'dark'
    setMode(next)
    document.documentElement.classList.toggle('light', next === 'light')
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-wide uppercase">
            AWAR Design System
          </h1>
          <p className="text-muted-foreground text-sm">
            v2.0 — shadcn/ui + Tailwind v4 — Component Preview
          </p>
        </header>

        <Separator />

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <Label htmlFor="theme" className="text-sm uppercase tracking-wider">Theme</Label>
          <Switch id="theme" checked={mode === 'light'} onCheckedChange={toggle} />
          <span className="text-sm text-muted-foreground">{mode}</span>
        </div>

        <Separator />

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <Separator />

        {/* Badges */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        <Separator />

        {/* Cards */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Card
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>All subsystems operational</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>CPU Load</span>
                  <span className="text-primary">{progress}%</span>
                </div>
                <Progress value={progress} />
                <Slider
                  value={[progress]}
                  onValueChange={(v) => setProgress(v[0] ?? 42)}
                  max={100}
                  step={1}
                  className="mt-2"
                />
              </div>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              Last updated: 2026-03-10T05:00:00Z
            </CardFooter>
          </Card>
        </section>

        <Separator />

        {/* Alerts */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Alerts
          </h2>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Terminal</AlertTitle>
            <AlertDescription>Default alert with neutral styling.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Destructive alert for critical issues.</AlertDescription>
          </Alert>
        </section>

        <Separator />

        {/* Form Inputs */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Forms
          </h2>
          <div className="grid gap-4 max-w-sm">
            <div className="space-y-2">
              <Label htmlFor="callsign">Callsign</Label>
              <Input id="callsign" placeholder="Enter callsign..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Mission notes..." />
            </div>
            <div className="space-y-2">
              <Label>Priority</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="confirm" />
              <Label htmlFor="confirm" className="text-sm">Confirm operation</Label>
            </div>
          </div>
        </section>

        <Separator />

        {/* Tabs */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Tabs
          </h2>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="logs">Logs</TabsTrigger>
              <TabsTrigger value="config">Config</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="p-4 border border-border">
              <p className="text-sm">System overview panel content.</p>
            </TabsContent>
            <TabsContent value="logs" className="p-4 border border-border">
              <p className="text-sm text-muted-foreground">[2026-03-10 05:00:00] System initialized</p>
            </TabsContent>
            <TabsContent value="config" className="p-4 border border-border">
              <p className="text-sm text-muted-foreground">Configuration settings here.</p>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        {/* Accordion */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Accordion
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Network Configuration</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">Primary: 10.0.0.1/24 — Gateway: 10.0.0.254</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Security Policies</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">Firewall: active — IDS: monitoring — Encryption: AES-256</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Separator />

        {/* Table */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Table
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Callsign</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead className="text-right">Uptime</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">ALPHA-1</TableCell>
                <TableCell><Badge>Online</Badge></TableCell>
                <TableCell>North</TableCell>
                <TableCell className="text-right">99.7%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">BRAVO-2</TableCell>
                <TableCell><Badge variant="destructive">Offline</Badge></TableCell>
                <TableCell>East</TableCell>
                <TableCell className="text-right">43.2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">CHARLIE-3</TableCell>
                <TableCell><Badge variant="secondary">Standby</Badge></TableCell>
                <TableCell>West</TableCell>
                <TableCell className="text-right">87.1%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <Separator />

        {/* Overlays */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Overlays
          </h2>
          <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Operation</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. Proceed with caution.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button>Confirm</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Actions <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Deploy</DropdownMenuItem>
                <DropdownMenuItem>Monitor</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Shutdown</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        <Separator />

        {/* Palette */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Palette
          </h2>
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-primary border border-border" title="primary" />
            <div className="w-12 h-12 bg-accent border border-border" title="accent" />
            <div className="w-12 h-12 bg-secondary border border-border" title="secondary" />
            <div className="w-12 h-12 bg-muted border border-border" title="muted" />
            <div className="w-12 h-12 bg-destructive border border-border" title="destructive" />
            <div className="w-12 h-12 bg-card border border-border" title="card" />
            <div className="w-12 h-12 bg-popover border border-border" title="popover" />
          </div>
        </section>

        <Separator />

        {/* Surfaces */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Surfaces (tone-based elevation)
          </h2>
          <div className="flex gap-4">
            <div className="bg-background border border-border p-4 flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Root</p>
            </div>
            <div className="bg-card border border-border p-4 flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Card</p>
            </div>
            <div className="bg-secondary border border-border p-4 flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Raised</p>
            </div>
            <div className="bg-popover border border-border p-4 flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Overlay</p>
            </div>
          </div>
        </section>

        <footer className="text-xs text-muted-foreground uppercase tracking-wider pt-4 border-t border-border">
          AWAR — Algorithmic Warfare
        </footer>
      </div>
    </div>
  )
}

export default App
