import { useState } from 'react'
import { Sidebar } from '@/app/Sidebar'
import {
  BrandingPage,
  ButtonPage,
  CheckboxPage,
  InputPage,
  LabelPage,
  RadioGroupPage,
  SelectPage,
  SliderPage,
  SwitchPage,
  TextareaPage,
  TogglePage,
  ToggleGroupPage,
  AvatarPage,
  BadgePage,
  CardPage,
  SeparatorPage,
  SkeletonPage,
  TablePage,
  AspectRatioPage,
  AlertPage,
  ProgressPage,
  AlertDialogPage,
  DialogPage,
  DropdownMenuPage,
  HoverCardPage,
  PopoverPage,
  SheetPage,
  TooltipPage,
  BreadcrumbPage,
  NavigationMenuPage,
  TabsPage,
  AccordionPage,
  CollapsiblePage,
  ResizablePage,
  ScrollAreaPage,
  CommandPage,
  SonnerPage,
  PalettePage,
  GraphPage,
  ChartPage,
  CalendarPage,
  FormPage,
  InputOTPPage,
} from '@/app/pages'
import { Toaster } from '@/components/ui/sonner'

const PAGE_MAP: Record<string, React.ReactNode> = {
  branding: <BrandingPage />,
  button: <ButtonPage />,
  checkbox: <CheckboxPage />,
  input: <InputPage />,
  label: <LabelPage />,
  'radio-group': <RadioGroupPage />,
  select: <SelectPage />,
  slider: <SliderPage />,
  switch: <SwitchPage />,
  textarea: <TextareaPage />,
  toggle: <TogglePage />,
  'toggle-group': <ToggleGroupPage />,
  avatar: <AvatarPage />,
  badge: <BadgePage />,
  card: <CardPage />,
  separator: <SeparatorPage />,
  skeleton: <SkeletonPage />,
  table: <TablePage />,
  'aspect-ratio': <AspectRatioPage />,
  alert: <AlertPage />,
  progress: <ProgressPage />,
  'alert-dialog': <AlertDialogPage />,
  dialog: <DialogPage />,
  'dropdown-menu': <DropdownMenuPage />,
  'hover-card': <HoverCardPage />,
  popover: <PopoverPage />,
  sheet: <SheetPage />,
  tooltip: <TooltipPage />,
  breadcrumb: <BreadcrumbPage />,
  'navigation-menu': <NavigationMenuPage />,
  tabs: <TabsPage />,
  accordion: <AccordionPage />,
  collapsible: <CollapsiblePage />,
  resizable: <ResizablePage />,
  'scroll-area': <ScrollAreaPage />,
  command: <CommandPage />,
  sonner: <SonnerPage />,
  palette: <PalettePage />,
  graph: <GraphPage />,
  chart: <ChartPage />,
  calendar: <CalendarPage />,
  form: <FormPage />,
  'input-otp': <InputOTPPage />,
}

function App() {
  const [active, setActive] = useState('branding')

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <Sidebar active={active} onSelect={setActive} />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-8 py-10">
          {PAGE_MAP[active]}
        </div>
      </main>
      <Toaster />
    </div>
  )
}

export default App
