export function useVariable(name: string) {
  return `var(--timber-${name})`
}
