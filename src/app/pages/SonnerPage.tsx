import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

export function SonnerPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Sonner</h2>
        <p className="text-muted-foreground mt-1">
          Lightweight toast notifications via sonner.
        </p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => toast('Default toast')}>
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success('Operation completed')}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error('Something went wrong')}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.info('Informational message')}
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.warning('Proceed with caution')}
          >
            Warning
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Description</h3>
        <Button
          variant="outline"
          onClick={() =>
            toast('Event created', {
              description: 'Monday, January 3rd at 6:00 PM',
            })
          }
        >
          Show Toast
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Action</h3>
        <Button
          variant="outline"
          onClick={() =>
            toast('File deleted', {
              action: {
                label: 'Undo',
                onClick: () => toast('Restored'),
              },
            })
          }
        >
          Deletable
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Promise</h3>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(
              new Promise((resolve) => setTimeout(resolve, 2000)),
              {
                loading: 'Loading...',
                success: 'Done!',
                error: 'Failed',
              }
            )
          }
        >
          Promise Toast
        </Button>
      </div>
    </section>
  )
}
