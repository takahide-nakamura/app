export function getBaseUrl(): string {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
}

export function getCanonicalUrl(pathname: string, site: URL): URL {
  const basePath = getBaseUrl();
  const baseDirectory = basePath.replace(/\/+$/, "");
  const routePath =
    pathname === baseDirectory || pathname === basePath
      ? ""
      : pathname.startsWith(`${baseDirectory}/`)
        ? pathname.slice(baseDirectory.length + 1)
        : pathname.replace(/^\/+/, "");

  return new URL(`${basePath}${routePath}`, site);
}
