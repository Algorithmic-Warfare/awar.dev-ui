import { FigletText } from '@/components/awar/figlet-text'
import { Logo } from '@/components/awar/logo'
import { LogoLockup } from '@/components/awar/logo-lockup'

export function BrandingPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Branding</h2>
        <p className="text-muted-foreground mt-1">
          AWAR identity components — FigletText, Logo, and LogoLockup.
        </p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">FigletText — ansi-shadow</h3>
        <FigletText font="ansi-shadow" />
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">FigletText — calvin-s</h3>
        <FigletText font="calvin-s" />
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">FigletText — calvin-s + ember gradient</h3>
        <FigletText font="calvin-s" gradient="ember" direction="horizontal" />
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">FigletText — full wordmark</h3>
        <FigletText font="calvin-s" fullWordmark gradient="fire" fontSize={12} />
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Logo</h3>
        <div className="flex items-center gap-4">
          <Logo size={24} className="text-primary" />
          <Logo size={32} className="text-primary" />
          <Logo size={48} className="text-primary" />
          <Logo size={64} className="text-foreground" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">LogoLockup</h3>
        <div className="flex items-center gap-8">
          <LogoLockup />
          <LogoLockup subtitle="Algorithmic Warfare" />
        </div>
      </div>
    </section>
  )
}
