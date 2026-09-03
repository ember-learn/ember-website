export function formatURL(url) {
  if (url.includes('#')) {
    return url.replace(/([^/])#(.*)/, '$1/#$2');
  }

  if (url.includes('?')) {
    return url.replace(/\/?$/, '');
  }

  return url.replace(/\/?$/, '/');
}
