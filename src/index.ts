// AWAR Design System — Public API
// @awar.dev/ui v2.0

// ── Styles (consumers must import "@awar.dev/ui/styles") ──
import "./styles/globals.css"

// ── Provider & Theme ──
export { AWARProvider, useAWARTheme } from "./provider"
export type { AWARProviderProps, Theme, AWARThemeContext } from "./provider"

// ── Utilities ──
export { cn } from "./lib/utils"
export { useIsMobile } from "./hooks/use-mobile"

// ── AWAR Branding ──
export {
  FigletText,
  FIGLET_ART,
  FULL_WORDMARK_ART,
  GRADIENT_PRESETS,
} from "./components/awar/figlet-text"
export type {
  FigletTextProps,
  FigletFont,
  FigletDirection,
  FigletGradientPreset,
  FigletGradientCustom,
} from "./components/awar/figlet-text"
export { Logo } from "./components/awar/logo"
export type { LogoProps } from "./components/awar/logo"
export { LogoLockup } from "./components/awar/logo-lockup"
export type { LogoLockupProps } from "./components/awar/logo-lockup"

// ── AWAR Graph ──
export {
  GraphCanvas,
  GraphEdge,
  GraphLegend,
} from "./components/awar/graph"
export type {
  GraphCanvasProps,
  GraphEdgeData,
  GraphLegendItem,
  GraphLegendProps,
} from "./components/awar/graph"
// Re-export React Flow utilities for consumers
export {
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeProps,
  type EdgeProps,
  type NodeTypes,
  type EdgeTypes,
} from "@xyflow/react"

// ── shadcn/ui Components ──
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/accordion"

export { Alert, AlertTitle, AlertDescription } from "./components/ui/alert"

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog"

export { AspectRatio } from "./components/ui/aspect-ratio"

export { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar"

export { Badge, badgeVariants } from "./components/ui/badge"

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb"

export { Button, buttonVariants } from "./components/ui/button"

export { Calendar, CalendarDayButton } from "./components/ui/calendar"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/card"

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from "./components/ui/chart"
export type { ChartConfig } from "./components/ui/chart"

export { Checkbox } from "./components/ui/checkbox"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "./components/ui/form"

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "./components/ui/input-otp"

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./components/ui/collapsible"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "./components/ui/command"

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./components/ui/dialog"

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./components/ui/dropdown-menu"

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "./components/ui/hover-card"

export { Input } from "./components/ui/input"

export { NumberInput } from "./components/ui/number-input"
export type { NumberInputProps } from "./components/ui/number-input"

export { Label } from "./components/ui/label"

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu"

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "./components/ui/popover"

export { Progress } from "./components/ui/progress"

export { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"

export {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable"

export { ScrollArea, ScrollBar } from "./components/ui/scroll-area"

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select"

export { Separator } from "./components/ui/separator"

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./components/ui/sheet"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "./components/ui/sidebar"

export { Skeleton } from "./components/ui/skeleton"

export { Slider } from "./components/ui/slider"

export { Toaster } from "./components/ui/sonner"

export { Switch } from "./components/ui/switch"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableSortHead,
  TableRow,
  TableCell,
  TableCaption,
  toggleSort,
  sortRows,
} from "./components/ui/table"
export type { SortDirection, SortState } from "./components/ui/table"

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
} from "./components/ui/tabs"

export { Textarea } from "./components/ui/textarea"

export { Toggle, toggleVariants } from "./components/ui/toggle"

export { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group"

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./components/ui/tooltip"
