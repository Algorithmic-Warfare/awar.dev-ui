import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useAWARTheme } from '@/provider'
import { cn } from '@/lib/utils'

const NAV_SECTIONS = [
  {
    label: 'Branding',
    items: [{ id: 'branding', label: 'Branding' }],
  },
  {
    label: 'Inputs',
    items: [
      { id: 'button', label: 'Button' },
      { id: 'checkbox', label: 'Checkbox' },
      { id: 'input', label: 'Input' },
      { id: 'label', label: 'Label' },
      { id: 'radio-group', label: 'Radio Group' },
      { id: 'select', label: 'Select' },
      { id: 'slider', label: 'Slider' },
      { id: 'switch', label: 'Switch' },
      { id: 'textarea', label: 'Textarea' },
      { id: 'toggle', label: 'Toggle' },
      { id: 'toggle-group', label: 'Toggle Group' },
    ],
  },
  {
    label: 'Display',
    items: [
      { id: 'avatar', label: 'Avatar' },
      { id: 'badge', label: 'Badge' },
      { id: 'card', label: 'Card' },
      { id: 'separator', label: 'Separator' },
      { id: 'skeleton', label: 'Skeleton' },
      { id: 'table', label: 'Table' },
      { id: 'aspect-ratio', label: 'Aspect Ratio' },
    ],
  },
  {
    label: 'Feedback',
    items: [
      { id: 'alert', label: 'Alert' },
      { id: 'progress', label: 'Progress' },
      { id: 'sonner', label: 'Sonner' },
    ],
  },
  {
    label: 'Overlays',
    items: [
      { id: 'alert-dialog', label: 'Alert Dialog' },
      { id: 'dialog', label: 'Dialog' },
      { id: 'dropdown-menu', label: 'Dropdown Menu' },
      { id: 'hover-card', label: 'Hover Card' },
      { id: 'popover', label: 'Popover' },
      { id: 'sheet', label: 'Sheet' },
      { id: 'tooltip', label: 'Tooltip' },
    ],
  },
  {
    label: 'Navigation',
    items: [
      { id: 'breadcrumb', label: 'Breadcrumb' },
      { id: 'navigation-menu', label: 'Navigation Menu' },
      { id: 'tabs', label: 'Tabs' },
    ],
  },
  {
    label: 'Layout',
    items: [
      { id: 'accordion', label: 'Accordion' },
      { id: 'collapsible', label: 'Collapsible' },
      { id: 'resizable', label: 'Resizable' },
      { id: 'scroll-area', label: 'Scroll Area' },
      { id: 'command', label: 'Command' },
    ],
  },
  {
    label: 'Theme',
    items: [{ id: 'palette', label: 'Palette' }],
  },
]

interface SidebarProps {
  active: string
  onSelect: (id: string) => void
}

export function Sidebar({ active, onSelect }: SidebarProps) {
  const { theme, toggleTheme } = useAWARTheme()

  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-border bg-card">
      <div className="p-4">
        <p className="text-sm font-bold text-primary">@awar.dev/ui</p>
        <p className="text-xs text-muted-foreground">Component Explorer</p>
      </div>

      <ScrollArea className="flex-1">
        <nav className="px-2 pb-4">
          {NAV_SECTIONS.map((section) => (
            <div key={section.label} className="mb-3">
              <p className="mb-1 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {section.label}
              </p>
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className={cn(
                    'flex w-full items-center px-2 py-1 text-sm transition-colors',
                    active === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </ScrollArea>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-2">
          <Switch
            id="theme-toggle"
            checked={theme === 'light'}
            onCheckedChange={toggleTheme}
          />
          <Label htmlFor="theme-toggle" className="text-xs">
            {theme === 'light' ? 'Light' : 'Dark'}
          </Label>
        </div>
      </div>
    </aside>
  )
}
