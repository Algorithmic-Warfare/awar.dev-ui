import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function HoverCardPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Hover Card</h2>
        <p className="text-muted-foreground mt-1">A card that appears on hover for additional context.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@awar.dev</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-72">
            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>AW</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@awar.dev</h4>
                <p className="text-sm text-muted-foreground">Algorithmic Warfare — terminal-inspired design system.</p>
                <p className="text-xs text-muted-foreground">Joined March 2026</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </section>
  )
}
