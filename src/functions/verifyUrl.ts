export function verifyUrl(url: string) {
  if (typeof url !== 'string' || url.search('^ws://') === -1) {
    throw new Error('Invalid URL');
  }
  return url;
}
