export function calculateVolume(tinNumber: number, tinDiameter: number, tinHeight: number): number {
    return tinNumber * (Math.PI* (tinDiameter/2)**2 * tinHeight);
}

export function calculateMinTinVolume(batterAmount: number, tinDiameter: number, tinHeight: number): number {
    if (!batterAmount) {
        return 0;
    }
    const totalVolume = calculateVolume(1, tinDiameter, tinHeight);
    const tinNumber = Math.floor(batterAmount/totalVolume)

    if (!tinNumber) {
        return 0;
    }

    return Math.floor(totalVolume/tinNumber)

}