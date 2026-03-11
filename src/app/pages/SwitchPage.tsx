import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function SwitchPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Switch</h2>
        <p className="text-muted-foreground mt-1">A toggle control for binary states.</p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <Switch />
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Label</h3>
        <div className="flex items-center gap-2">
          <Switch id="airplane" />
          <Label htmlFor="airplane">Airplane Mode</Label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Checked by Default</h3>
        <div className="flex items-center gap-2">
          <Switch id="notifications" defaultChecked />
          <Label htmlFor="notifications">Enable Notifications</Label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Disabled</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Switch disabled />
            <Label className="opacity-50">Disabled off</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch disabled defaultChecked />
            <Label className="opacity-50">Disabled on</Label>
          </div>
        </div>
      </div>
    </section>
  )
}
