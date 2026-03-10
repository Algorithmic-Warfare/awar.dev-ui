// AWAR Design System — Public API
// @awar.dev/ui v2.0

// ── Styles (consumers must import "@awar.dev/ui/styles") ──
import "./styles/globals.css"

// ── Provider & Theme ──
export { AWARProvider, useAWARTheme } from "./provider"
export type { AWARProviderProps, Theme, AWARThemeContext } from "./provider"

// ── Utilities ──
export { cn } from "./lib/utils"

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

// ── shadcn/ui Components ──
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/accordion"

export { Alert, AlertTitle, AlertDescription } from "./components/ui/alert"

export { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar"

export { Badge, badgeVariants } from "./components/ui/badge"

export { Button, buttonVariants } from "./components/ui/button"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/card"

export { Checkbox } from "./components/ui/checkbox"

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

export { Input } from "./components/ui/input"

export { Label } from "./components/ui/label"

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

export { Slider } from "./components/ui/slider"

export { Switch } from "./components/ui/switch"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./components/ui/table"

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
} from "./components/ui/tabs"

export { Textarea } from "./components/ui/textarea"

export { Toggle, toggleVariants } from "./components/ui/toggle"

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./components/ui/tooltip"
