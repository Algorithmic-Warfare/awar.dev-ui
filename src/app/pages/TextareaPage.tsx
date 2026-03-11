import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function TextareaPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Textarea</h2>
        <p className="text-muted-foreground mt-1">A multi-line text input field.</p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <div className="max-w-sm">
          <Textarea placeholder="Type your message here..." />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Label</h3>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself..." />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Disabled</h3>
        <div className="max-w-sm">
          <Textarea disabled placeholder="Disabled textarea" />
        </div>
      </div>
    </section>
  )
}
