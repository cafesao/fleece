// Utils to help parse token output
export function escapeNewLine(platform: NodeJS.Platform, arg: string) {
  return platform.toLowerCase() === 'win32'
    ? arg.replaceAll(/\n/g, '\\n').replaceAll(/\r/g, '\\r')
    : arg;
}
