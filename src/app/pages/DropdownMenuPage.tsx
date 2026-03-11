import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel,
  DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ChevronDown, User, Settings, LogOut, Mail, MessageSquare, PlusCircle } from 'lucide-react'

export function DropdownMenuPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Dropdown Menu</h2>
        <p className="text-muted-foreground mt-1">Displays a menu of actions triggered from a button.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Actions <ChevronDown className="ml-2 h-4 w-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Deploy</DropdownMenuItem>
            <DropdownMenuItem>Monitor</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Shutdown</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Icons</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">My Account <ChevronDown className="ml-2 h-4 w-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><User /> Profile <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuItem><Settings /> Settings <DropdownMenuShortcut>⌘S</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><LogOut /> Log out <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Submenu</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">More <ChevronDown className="ml-2 h-4 w-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem><Mail /> Email</DropdownMenuItem>
            <DropdownMenuItem><MessageSquare /> Message</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger><PlusCircle /> More...</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Option A</DropdownMenuItem>
                <DropdownMenuItem>Option B</DropdownMenuItem>
                <DropdownMenuItem>Option C</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  )
}
