import { LogoLockup } from '../components/branding/LogoLockup'
import { Text } from '../components/primitives/Text'

export default function ComponentOverview() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      gap: 16,
      opacity: 0.6,
    }}>
      <LogoLockup orientation="stacked" size="lg" subtitle />
      <Text role="caption" color="muted">Select a component from the sidebar</Text>
    </div>
  )
}
