// Skip husky install in CI or when not in a git repo
try {
  const husky = (await import('husky')).default
  husky()
} catch (e) {
  if (e.code !== 'ERR_MODULE_NOT_FOUND') console.warn('husky install skipped:', e.message)
}
