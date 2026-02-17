import { useState } from 'react'
import { useAWARTheme } from '../hooks/useAWARTheme'
import { primitives } from '../tokens/primitives'

// ── Use primitives as ref (source of truth) ──
const ref = {
  color: primitives.color,
  fontSize: Object.fromEntries(
    Object.entries(primitives.font.size).map(([k, v]) => [k, parseInt(v)])
  ) as Record<keyof typeof primitives.font.size, number>,
  lineHeight: Object.fromEntries(
    Object.entries(primitives['line-height']).map(([k, v]) => [k, parseInt(v)])
  ) as Record<keyof typeof primitives['line-height'], number>,
  space: Object.values(primitives.space).map(v => parseInt(v)),
}

// ── Semantic mappings ──
const dark = {
  bgRoot: ref.color.neutral[950],
  bgSurface: ref.color.neutral[900],
  bgRaised: ref.color.neutral[800],
  bgOverlay: ref.color.neutral[700],
  bgBrand: ref.color.maroon[500],
  bgBrandSubtle: ref.color.maroon[800],
  textPrimary: ref.color.neutral[100],
  textSecondary: ref.color.neutral[400],
  textMuted: ref.color.neutral[500],
  textAccent: ref.color.amber[500],
  textBrand: ref.color.maroon[300],
  interactive: ref.color.amber[500],
  interactiveHover: ref.color.amber[400],
  interactiveActive: ref.color.amber[600],
  interactiveMuted: ref.color.amber[800],
  borderDefault: ref.color.neutral[700],
  borderStrong: ref.color.neutral[500],
  borderInteractive: ref.color.amber[500],
  borderBrand: ref.color.maroon[400],
  selectionBg: ref.color.amber[900],
  focusRing: ref.color.amber[500],
}

const light = {
  bgRoot: ref.color.neutral[50],
  bgSurface: ref.color.neutral[0],
  bgRaised: ref.color.neutral[100],
  bgOverlay: ref.color.neutral[200],
  bgBrand: ref.color.maroon[500],
  bgBrandSubtle: ref.color.maroon[100],
  textPrimary: ref.color.neutral[900],
  textSecondary: ref.color.neutral[600],
  textMuted: ref.color.neutral[400],
  textAccent: ref.color.amber[700],
  textBrand: ref.color.maroon[600],
  interactive: ref.color.amber[700],
  interactiveHover: ref.color.amber[600],
  interactiveActive: ref.color.amber[800],
  interactiveMuted: ref.color.amber[100],
  borderDefault: ref.color.neutral[200],
  borderStrong: ref.color.neutral[400],
  borderInteractive: ref.color.amber[700],
  borderBrand: ref.color.maroon[400],
  selectionBg: ref.color.amber[100],
  focusRing: ref.color.amber[600],
}

type Theme = typeof dark

const FONT = primitives.font.mono

// ── Utility ──
const Divider = ({ t }: { t: Theme }) => (
  <div style={{ color: t.textMuted, fontSize: 11, fontFamily: FONT, userSelect: 'none', padding: '2px 0' }}>
    {'─'.repeat(80)}
  </div>
)

const SectionHeader = ({ title, t }: { title: string; t: Theme }) => (
  <div style={{ marginTop: 32, marginBottom: 8 }}>
    <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: t.textAccent, textTransform: 'uppercase' }}>
      ▾ {title}
    </div>
    <Divider t={t} />
  </div>
)

const Label = ({ children, t }: { children: React.ReactNode; t: Theme }) => (
  <span style={{ fontFamily: FONT, fontSize: 11, color: t.textMuted, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
    {children}
  </span>
)

// ── Color Swatch Row ──
const SwatchRow = ({ name, colors, t }: { name: string; colors: Record<string | number, string>; t: Theme }) => (
  <div style={{ marginBottom: 12 }}>
    <div style={{ fontFamily: FONT, fontSize: 11, color: t.textSecondary, marginBottom: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{name}</div>
    <div style={{ display: 'flex', gap: 0 }}>
      {Object.entries(colors).map(([step, hex]) => (
        <div key={step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            width: 52, height: 40,
            backgroundColor: hex,
            border: `1px solid ${t.borderDefault}`,
          }} />
          <div style={{ fontFamily: FONT, fontSize: 10, color: t.textMuted, marginTop: 2, textAlign: 'center' }}>{step}</div>
          <div style={{ fontFamily: FONT, fontSize: 9, color: t.textMuted, opacity: 0.7, textAlign: 'center' }}>{hex}</div>
        </div>
      ))}
    </div>
  </div>
)

// ── Typography Sample ──
const TypeSample = ({ role, size, lh, weight, tracking, transform, t }: {
  role: string; size: number; lh: number; weight: number; tracking: string; transform?: string; t: Theme
}) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8, borderBottom: `1px solid ${t.borderDefault}`, paddingBottom: 8 }}>
    <div style={{ width: 100, flexShrink: 0 }}>
      <Label t={t}>{role}</Label>
    </div>
    <div style={{
      fontFamily: FONT, fontSize: size, lineHeight: `${lh}px`, fontWeight: weight,
      letterSpacing: tracking, textTransform: (transform || 'none') as React.CSSProperties['textTransform'], color: t.textPrimary, flex: 1,
    }}>
      {transform === 'uppercase' ? 'THE QUICK BROWN FOX' : 'The quick brown fox jumps over the lazy dog'}
    </div>
    <div style={{ fontFamily: FONT, fontSize: 10, color: t.textMuted, flexShrink: 0, width: 120, textAlign: 'right' }}>
      {size}px / {lh}px / {weight}
    </div>
  </div>
)

// ── Spacing Viz ──
const SpaceViz = ({ t }: { t: Theme }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    {ref.space.map((val, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ fontFamily: FONT, fontSize: 10, color: t.textMuted, width: 60, textAlign: 'right' }}>
          space-{i} ({val}px)
        </div>
        <div style={{
          width: val, height: 12, minWidth: val === 0 ? 1 : val,
          backgroundColor: t.interactive, opacity: 0.8,
        }} />
      </div>
    ))}
  </div>
)

// ── Elevation Viz ──
const ElevationViz = ({ t }: { t: Theme }) => {
  const levels = [
    { name: 'Flat', bg: t.bgSurface, desc: 'bg-surface · cards, panels' },
    { name: 'Raised', bg: t.bgRaised, desc: 'bg-surface-raised · dropdowns' },
    { name: 'Overlay', bg: t.bgOverlay, desc: 'bg-surface-overlay · modals' },
  ]
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {levels.map(({ name, bg, desc }) => (
        <div key={name} style={{
          flex: 1, padding: 16, backgroundColor: bg, border: `1px solid ${t.borderDefault}`,
        }}>
          <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, color: t.textPrimary, marginBottom: 4 }}>{name}</div>
          <div style={{ fontFamily: FONT, fontSize: 10, color: t.textMuted }}>{desc}</div>
          <div style={{ fontFamily: FONT, fontSize: 10, color: t.textMuted, marginTop: 8 }}>bg: {bg}</div>
        </div>
      ))}
    </div>
  )
}

// ── Component Previews ──
const ButtonPreview = ({ t, isDark }: { t: Theme; isDark: boolean }) => {
  const [hovered, setHovered] = useState<string | null>(null)
  const buttons = [
    { label: '⌘+S SAVE', variant: 'primary', bg: t.interactive, hoverBg: t.interactiveHover, text: isDark ? ref.color.neutral[950] : ref.color.neutral[0] },
    { label: 'CANCEL', variant: 'secondary', bg: 'transparent', hoverBg: t.interactiveMuted, text: t.textPrimary, border: true },
    { label: 'DELETE', variant: 'danger', bg: 'transparent', hoverBg: 'transparent', text: ref.color.red[isDark ? 300 : 500], border: true, borderColor: ref.color.red[isDark ? 300 : 500] },
  ]
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {buttons.map(b => (
        <button
          key={b.variant}
          onMouseEnter={() => setHovered(b.variant)}
          onMouseLeave={() => setHovered(null)}
          style={{
            fontFamily: FONT, fontSize: 12, fontWeight: 500, letterSpacing: '0.1em',
            padding: '4px 12px', height: 28, cursor: 'pointer',
            backgroundColor: hovered === b.variant ? b.hoverBg : b.bg,
            color: b.text, border: b.border ? `1px solid ${b.borderColor || t.borderStrong}` : '1px solid transparent',
            borderRadius: 0, textTransform: 'uppercase',
            transition: 'background-color 0.1s',
          }}
        >
          {b.label}
        </button>
      ))}
      <button
        disabled
        style={{
          fontFamily: FONT, fontSize: 12, fontWeight: 500, letterSpacing: '0.1em',
          padding: '4px 12px', height: 28, cursor: 'not-allowed',
          backgroundColor: t.bgRaised, color: t.textMuted, border: `1px solid ${t.borderDefault}`,
          borderRadius: 0, textTransform: 'uppercase', opacity: 0.38,
        }}
      >
        DISABLED
      </button>
    </div>
  )
}

const InputPreview = ({ t }: { t: Theme }) => {
  const [focused, setFocused] = useState<string | null>(null)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <div>
        <Label t={t}>Username</Label>
        <div style={{
          display: 'flex', alignItems: 'center', height: 28, marginTop: 2,
          border: `${focused === 'user' ? 2 : 1}px solid ${focused === 'user' ? t.borderInteractive : t.borderDefault}`,
          backgroundColor: t.bgSurface, padding: '0 8px',
        }}>
          <span style={{ fontFamily: FONT, fontSize: 12, color: t.textMuted, marginRight: 4 }}>▸</span>
          <input
            onFocus={() => setFocused('user')}
            onBlur={() => setFocused(null)}
            placeholder="enter username..."
            style={{
              fontFamily: FONT, fontSize: 14, color: t.textPrimary, background: 'transparent',
              border: 'none', outline: 'none', width: '100%', height: '100%',
            }}
          />
        </div>
      </div>
      <div>
        <Label t={t}>Password</Label>
        <div style={{
          display: 'flex', alignItems: 'center', height: 28, marginTop: 2,
          border: `1px solid ${ref.color.red[300]}`,
          backgroundColor: t.bgSurface, padding: '0 8px',
        }}>
          <span style={{ fontFamily: FONT, fontSize: 12, color: t.textMuted, marginRight: 4 }}>▸</span>
          <input
            type="password"
            defaultValue="short"
            style={{
              fontFamily: FONT, fontSize: 14, color: t.textPrimary, background: 'transparent',
              border: 'none', outline: 'none', width: '100%', height: '100%',
            }}
          />
        </div>
        <div style={{ fontFamily: FONT, fontSize: 11, color: ref.color.red[300], marginTop: 2 }}>
          ✕ Password must be at least 8 characters
        </div>
      </div>
    </div>
  )
}

const CardPreview = ({ t }: { t: Theme }) => (
  <div style={{
    border: `1px solid ${t.borderDefault}`, backgroundColor: t.bgSurface, maxWidth: 360,
  }}>
    <div style={{
      padding: '4px 8px', borderBottom: `1px solid ${t.borderDefault}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, color: t.textAccent, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        ▾ SYSTEM STATUS
      </span>
      <span style={{ fontFamily: FONT, fontSize: 10, color: t.textMuted }}>⌘+I</span>
    </div>
    <div style={{ padding: 16 }}>
      <div style={{ fontFamily: FONT, fontSize: 14, color: t.textPrimary, marginBottom: 8 }}>
        All services operational.
      </div>
      <div style={{ fontFamily: FONT, fontSize: 11, color: t.textSecondary, marginBottom: 12 }}>
        Last checked: 2026-02-16 14:32:07 UTC
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {[
          { label: 'API', color: ref.color.green[500] },
          { label: 'DB', color: ref.color.green[500] },
          { label: 'CDN', color: ref.color.yellow[500] },
        ].map(s => (
          <span key={s.label} style={{
            fontFamily: FONT, fontSize: 10, padding: '2px 6px',
            border: `1px solid ${s.color}`, color: s.color, letterSpacing: '0.05em',
          }}>
            ● {s.label}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const AlertPreview = ({ t, isDark }: { t: Theme; isDark: boolean }) => {
  const alerts = [
    { type: 'error', icon: '✕', text: 'Connection refused: ECONNREFUSED 127.0.0.1:5432', color: isDark ? ref.color.red[300] : ref.color.red[500] },
    { type: 'warning', icon: '▲', text: 'Disk usage at 87% — consider cleanup', color: isDark ? ref.color.yellow[300] : ref.color.yellow[500] },
    { type: 'success', icon: '✓', text: 'Deploy v2.4.1 completed successfully', color: isDark ? ref.color.green[300] : ref.color.green[500] },
    { type: 'info', icon: 'ℹ', text: 'Scheduled maintenance window: Sun 03:00 UTC', color: isDark ? ref.color.blue[300] : ref.color.blue[500] },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {alerts.map(a => (
        <div key={a.type} style={{
          fontFamily: FONT, fontSize: 12, padding: '4px 8px',
          borderLeft: `2px solid ${a.color}`, color: a.color,
          backgroundColor: t.bgSurface,
        }}>
          {a.icon} {a.text}
        </div>
      ))}
    </div>
  )
}

const TablePreview = ({ t }: { t: Theme }) => {
  const rows = [
    { pid: '4821', name: 'node', cpu: '12.3%', mem: '284M', status: 'running' },
    { pid: '4822', name: 'postgres', cpu: '3.1%', mem: '512M', status: 'running' },
    { pid: '4830', name: 'redis', cpu: '0.4%', mem: '64M', status: 'idle' },
    { pid: '4901', name: 'nginx', cpu: '0.0%', mem: '32M', status: 'stopped' },
  ]
  const cols = ['PID', 'NAME', 'CPU', 'MEM', 'STATUS']
  const keys = ['pid', 'name', 'cpu', 'mem', 'status'] as const
  return (
    <div style={{ border: `1px solid ${t.borderDefault}`, maxWidth: 480 }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '60px 100px 70px 70px 1fr',
        borderBottom: `1px solid ${t.borderStrong}`, backgroundColor: t.bgRaised,
      }}>
        {cols.map(c => (
          <div key={c} style={{
            fontFamily: FONT, fontSize: 10, fontWeight: 700, color: t.textAccent,
            padding: '4px 8px', letterSpacing: '0.1em',
          }}>{c}</div>
        ))}
      </div>
      {rows.map((row, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '60px 100px 70px 70px 1fr',
          borderBottom: i < rows.length - 1 ? `1px solid ${t.borderDefault}` : 'none',
        }}>
          {keys.map(k => (
            <div key={k} style={{
              fontFamily: FONT, fontSize: 12, padding: '4px 8px',
              color: k === 'status'
                ? row[k] === 'running' ? ref.color.green[300]
                : row[k] === 'stopped' ? ref.color.red[300]
                : t.textMuted
                : t.textPrimary,
            }}>{row[k]}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

const BrandPreview = ({ t }: { t: Theme }) => (
  <div style={{
    backgroundColor: t.bgBrand, padding: 24,
    border: `1px solid ${t.borderBrand}`,
  }}>
    <div style={{ fontFamily: FONT, fontSize: 28, fontWeight: 700, color: ref.color.neutral[100], letterSpacing: '0.05em', marginBottom: 4 }}>
      AWAR
    </div>
    <div style={{ fontFamily: FONT, fontSize: 12, color: ref.color.neutral[300], letterSpacing: '0.05em', textTransform: 'uppercase' }}>
      Algorithmic Warfare · Design System
    </div>
    <div style={{ fontFamily: FONT, fontSize: 11, color: ref.color.amber[500], marginTop: 12, letterSpacing: '0.05em' }}>
      #773333 × #FF9944 · Monospace · 0-radius · No shadows
    </div>
  </div>
)

const SizingPreview = ({ t }: { t: Theme }) => {
  const sizes = [
    { name: 'compact', h: 24, desc: '2+20+2' },
    { name: 'default', h: 28, desc: '4+20+4' },
    { name: 'comfortable', h: 36, desc: '8+20+8' },
    { name: 'large', h: 44, desc: '12+20+12' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {sizes.map(s => (
        <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontFamily: FONT, fontSize: 10, color: t.textMuted, width: 100, textAlign: 'right', textTransform: 'uppercase' }}>
            {s.name} ({s.h}px)
          </div>
          <div style={{
            height: s.h, display: 'flex', alignItems: 'center', padding: '0 12px',
            border: `1px solid ${t.borderDefault}`, backgroundColor: t.bgSurface,
            fontFamily: FONT, fontSize: 12, color: t.textPrimary,
          }}>
            BUTTON · {s.desc}
          </div>
        </div>
      ))}
    </div>
  )
}

const AsciiPreview = ({ t }: { t: Theme }) => (
  <div style={{ fontFamily: FONT, fontSize: 12, lineHeight: '16px', color: t.textSecondary }}>
    <div style={{ color: t.textMuted, fontSize: 10, marginBottom: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Box Drawing</div>
    <div>{'┌──────────────────────────┐'}</div>
    <div>{'│'} <span style={{ color: t.textPrimary }}>Single-line box</span>{'            │'}</div>
    <div>{'├──────────────────────────┤'}</div>
    <div>{'│'} <span style={{ color: t.textAccent }}>Accent text inside</span>{'       │'}</div>
    <div>{'└──────────────────────────┘'}</div>
    <div style={{ height: 8 }} />
    <div>{'╔══════════════════════════╗'}</div>
    <div>{'║'} <span style={{ color: t.textPrimary }}>Double-line box</span>{'            ║'}</div>
    <div>{'╠══════════════════════════╣'}</div>
    <div>{'║'} <span style={{ color: t.textBrand }}>Brand text inside</span>{'         ║'}</div>
    <div>{'╚══════════════════════════╝'}</div>
    <div style={{ height: 8 }} />
    <div style={{ color: t.textMuted, fontSize: 10, marginBottom: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Block Fills & Progress</div>
    <div>{'████████████░░░░░░░░'} <span style={{ color: t.textMuted }}>60%</span></div>
    <div>{'▓▓▓▓▒▒▒▒░░░░'} <span style={{ color: t.textMuted }}>density grades</span></div>
    <div style={{ height: 8 }} />
    <div style={{ color: t.textMuted, fontSize: 10, marginBottom: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Controls</div>
    <div>{'[x] Option enabled    [ ] Option disabled    [~] Indeterminate'}</div>
    <div>{'▸ Collapsed item      ▾ Expanded item'}</div>
  </div>
)

// ── MAIN ──
export default function TokenGallery() {
  const { mode, toggle } = useAWARTheme()
  const isDark = mode === 'dark'
  const t = isDark ? dark : light

  return (
    <div style={{
      backgroundColor: t.bgRoot, color: t.textPrimary, fontFamily: FONT,
      minHeight: '100vh', padding: '24px 32px', fontSize: 14, lineHeight: '20px',
      transition: 'background-color 0.15s, color 0.15s',
    }}>
      {/* ── Header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div>
          <div style={{ fontSize: 11, color: t.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Design System Token Gallery</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: t.textAccent, letterSpacing: '0.05em' }}>AWAR</div>
        </div>
        <button
          onClick={toggle}
          style={{
            fontFamily: FONT, fontSize: 11, padding: '4px 8px', cursor: 'pointer',
            backgroundColor: 'transparent', color: t.interactive,
            border: `1px solid ${t.borderDefault}`, letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          ⌃+T {isDark ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
      </div>
      <Divider t={t} />
      <div style={{ fontSize: 12, color: t.textSecondary, marginTop: 4, marginBottom: 16 }}>
        Terminal-inspired · ASCII aesthetic · #773333 × #FF9944 · Monospace-only · 0-radius · No shadows
      </div>

      {/* ── Brand Identity ── */}
      <SectionHeader title="Brand Identity" t={t} />
      <BrandPreview t={t} />

      {/* ── Colors ── */}
      <SectionHeader title="Color Primitives" t={t} />
      <SwatchRow name="Maroon (brand)" colors={ref.color.maroon} t={t} />
      <SwatchRow name="Amber (accent)" colors={ref.color.amber} t={t} />
      <SwatchRow name="Neutral (warm-tinted)" colors={ref.color.neutral} t={t} />
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <SwatchRow name="Red (error)" colors={ref.color.red} t={t} />
        <SwatchRow name="Green (success)" colors={ref.color.green} t={t} />
        <SwatchRow name="Yellow (warning)" colors={ref.color.yellow} t={t} />
        <SwatchRow name="Blue (info)" colors={ref.color.blue} t={t} />
      </div>

      {/* ── Semantic Color Roles ── */}
      <SectionHeader title={`Semantic Roles — ${mode} mode`} t={t} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 4 }}>
        {Object.entries(t).map(([name, hex]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '3px 0' }}>
            <div style={{ width: 20, height: 20, flexShrink: 0, backgroundColor: hex, border: `1px solid ${t.borderDefault}` }} />
            <div>
              <div style={{ fontSize: 10, color: t.textSecondary }}>{name}</div>
              <div style={{ fontSize: 9, color: t.textMuted }}>{hex}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Typography ── */}
      <SectionHeader title="Typography Scale" t={t} />
      <TypeSample role="Display" size={ref.fontSize['3xl']} lh={ref.lineHeight['3xl']} weight={700} tracking="0em" transform="uppercase" t={t} />
      <TypeSample role="Heading" size={ref.fontSize.lg} lh={ref.lineHeight.lg} weight={700} tracking="0.05em" transform="uppercase" t={t} />
      <TypeSample role="Subheading" size={ref.fontSize.md} lh={ref.lineHeight.md} weight={500} tracking="0.05em" transform="uppercase" t={t} />
      <TypeSample role="Body" size={ref.fontSize.md} lh={ref.lineHeight.md} weight={400} tracking="0em" t={t} />
      <TypeSample role="Label" size={ref.fontSize.sm} lh={ref.lineHeight.sm} weight={500} tracking="0.1em" transform="uppercase" t={t} />
      <TypeSample role="Caption" size={ref.fontSize.xs} lh={ref.lineHeight.xs} weight={400} tracking="0em" t={t} />

      {/* ── Spacing ── */}
      <SectionHeader title="Spacing Scale" t={t} />
      <SpaceViz t={t} />

      {/* ── Component Sizing ── */}
      <SectionHeader title="Component Sizing (Density)" t={t} />
      <SizingPreview t={t} />

      {/* ── Elevation ── */}
      <SectionHeader title="Elevation (Tone-based)" t={t} />
      <ElevationViz t={t} />

      {/* ── ASCII Box Drawing ── */}
      <SectionHeader title="ASCII Characters & Box Drawing" t={t} />
      <AsciiPreview t={t} />

      {/* ── Component Previews ── */}
      <SectionHeader title="Component Previews" t={t} />

      <div style={{ fontSize: 11, color: t.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Buttons</div>
      <ButtonPreview t={t} isDark={isDark} />

      <div style={{ fontSize: 11, color: t.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 24, marginBottom: 8 }}>Inputs</div>
      <InputPreview t={t} />

      <div style={{ fontSize: 11, color: t.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 24, marginBottom: 8 }}>Card</div>
      <CardPreview t={t} />

      <div style={{ fontSize: 11, color: t.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 24, marginBottom: 8 }}>Alerts / Feedback</div>
      <AlertPreview t={t} isDark={isDark} />

      <div style={{ fontSize: 11, color: t.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 24, marginBottom: 8 }}>Table</div>
      <TablePreview t={t} />

      {/* ── Footer ── */}
      <div style={{ marginTop: 48, paddingTop: 8, borderTop: `1px solid ${t.borderDefault}` }}>
        <div style={{ fontSize: 10, color: t.textMuted, letterSpacing: '0.05em' }}>
          AWAR DESIGN SYSTEM · 77 PRIMITIVE TOKENS · 119 SEMANTIC TOKENS · 12 SEED DECISIONS
        </div>
      </div>
    </div>
  )
}
