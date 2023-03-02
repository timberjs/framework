export function debug(message: string, ...tags: Array<string>) {
  console.log(tags.join(' '), 'debug', message)
}
