export function getBaseUrl(): string {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
}
