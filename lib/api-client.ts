/**
 * Helper konfigurasi URL API dan Base Path untuk BroMan
 * Memastikan semua fetch request mengarah ke sub-path /broman saat berjalan di Apache / Next.js
 */

export const BASE_PATH = "/broman";

export function apiUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath.startsWith(BASE_PATH)) {
    return cleanPath;
  }
  return `${BASE_PATH}${cleanPath}`;
}
