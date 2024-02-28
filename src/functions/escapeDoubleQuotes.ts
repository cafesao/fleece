// Utils to help parse token output
export function escapeDoubleQuotes(platform: NodeJS.Platform, arg: string) {
  return platform.toLowerCase() === 'win32'
    ? arg.replaceAll(/"/g, '`"')
    : arg.replaceAll(/"/g, '\\"');
}
