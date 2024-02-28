export function verifyUrl(url: string) {
  if (typeof url !== 'string' || !url.search('^ws://')) {
    throw new Error('Invalid URL');
  }
  return url;
}
