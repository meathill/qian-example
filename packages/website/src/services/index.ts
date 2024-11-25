export function fetchStrapi(
  path: string,
  params?: Record<string, string>,
  noCache = false
): Promise<Response> {
  const url = new URL(`${process.env.STRIPE_API_URL}/api/${path}`);
  if (params) {
    url.search = new URLSearchParams(params).toString();
  }
  return fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.STRIPE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    ...noCache && { cache: 'no-store' },
  });
}
