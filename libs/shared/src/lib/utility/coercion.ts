export function toBool(value: any): boolean {
  return value != null && `${value}` !== 'false';
}
