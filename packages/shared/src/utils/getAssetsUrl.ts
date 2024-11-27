export const getAssetsUrl = (url: string) => {
  if (url.startsWith('http')) {
    return url;
  }
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = url.replace(/^\//, '');
  return `${baseUrl}/${path}`;
};
