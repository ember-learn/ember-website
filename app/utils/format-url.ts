export function formatURL(url: string): string {
  if (url.includes('#')) {
    return url.replace(/([^/])#(.*)/, '$1/#$2');
  }

  if (url.includes('?')) {
    return url.replace(/\/?$/, '');
  }

  return url.replace(/\/?$/, '/');
}
