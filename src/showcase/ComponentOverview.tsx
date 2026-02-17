import { LogoLockup } from '../components/branding/LogoLockup'
import { Stack } from '../components/layout/Stack'
import { Text } from '../components/primitives/Text'

export default function ComponentOverview() {
  return (
    <Stack gap="md" style={{
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      opacity: 0.6,
    }}>
      <LogoLockup orientation="stacked" size="lg" subtitle />
      <Text role="caption" color="muted">Select a component from the sidebar</Text>
    </Stack>
  )
}
