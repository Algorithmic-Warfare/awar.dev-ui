import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Terminal, AlertCircle, Info } from 'lucide-react'

export function AlertPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Alert</h2>
        <p className="text-muted-foreground mt-1">Displays a callout for important information.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Terminal</AlertTitle>
          <AlertDescription>Default alert with neutral styling.</AlertDescription>
        </Alert>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Destructive</h3>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Destructive alert for critical issues.</AlertDescription>
        </Alert>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Icon</h3>
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>This is an informational alert to convey additional context.</AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
