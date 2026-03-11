import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut } from '@/components/ui/command'
import { Calculator, Calendar, Settings, User, Search } from 'lucide-react'

export function CommandPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Command</h2>
        <p className="text-muted-foreground mt-1">A searchable command palette for quick actions.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <Command className="max-w-md border border-border">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem><Calendar /> Calendar</CommandItem>
              <CommandItem><Search /> Search</CommandItem>
              <CommandItem><Calculator /> Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem><User /> Profile <CommandShortcut>⌘P</CommandShortcut></CommandItem>
              <CommandItem><Settings /> Settings <CommandShortcut>⌘S</CommandShortcut></CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </section>
  )
}
