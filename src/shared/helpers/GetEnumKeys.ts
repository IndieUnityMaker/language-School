export function getEnumKeys<T extends string>(e: Record<T, string>): T[] {
  return Object.keys(e) as T[];
}