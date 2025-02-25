/**
 * Extracts the domain from a URL string
 * @param url The URL to extract the domain from
 * @returns The domain without protocol and path
 */
export function getDomain(url: string): string {
  try {
    // Remove protocol if present
    const cleanUrl = url.replace(/^(https?:\/\/)/, '');
    // Get domain part (everything before the first slash or end of string)
    return cleanUrl.split('/')[0];
  } catch (error) {
    return url;
  }
} 