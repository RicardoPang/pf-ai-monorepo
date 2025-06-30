const data = 'libs 🌹🌹🌹';
export default data;

export function formatAddress(addr: string): string {
  if (!addr) return '';
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}
