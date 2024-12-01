export function calculateVolume(tinNumber: number, tinDiameter: number, tinHeight: number): number {
    return tinNumber * (Math.PI* (tinDiameter/2)**2 * tinHeight);
}

