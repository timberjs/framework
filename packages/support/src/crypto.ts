export function short() {
  return Array.from(crypto.getRandomValues(new Uint8Array(2)))
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('')
}
