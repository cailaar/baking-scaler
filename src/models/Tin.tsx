export class Tin {
    private radius: number
    private height: number
    private fill: number

    public constructor(radius: number, height: number = 3, fill: number = 2/3) {
        this.height = height
        this.radius = radius
        this.fill = fill
    }

    public calculateBakingVolume(): number {
        return this.fill * Math.PI*this.radius**2*this.height;
    }

}