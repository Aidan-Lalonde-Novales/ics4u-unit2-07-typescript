/**
 * This class creates a vehicle with parameters concerning the
 * license plate, color, amount of doors, speed, and max speed.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-10-23
 */

class Vehicle {
  // declares all variables
  private speed = 0
  private licensePlate: string
  private color: string
  private readonly doorCount: number
  private readonly maxSpeed: number

  // Vehicle Constructor - allows index.ts to initialize values
  constructor(
    licensePlate: string,
    color: string,
    doorCount: number,
    maxSpeed: number
  ) {
    this.licensePlate = licensePlate
    this.color = color
    this.doorCount = doorCount
    this.maxSpeed = maxSpeed
  }

  // Status method - print all variables
  status(): void {
    console.log(`
      -> Speed: ${this.speed}
      -> Max Speed: ${this.maxSpeed}
      -> Number of Doors: ${this.doorCount}
      -> License Plate: ${this.licensePlate}
      -> Color: ${this.color}
    `)
  }

  // licensePlate Getter - returns current licensePlate value
  getLicensePlate(): string {
    return this.licensePlate
  }

  // licensePlate Setter - allows user to change licensePlate
  setLicensePlate(licensePlateInput: string): void {
    this.licensePlate = licensePlateInput
  }

  // color Getter - returns current color value
  getColor(): string {
    return this.color
  }

  // color Setter - allows user to change color
  setColor(colorInput: string): void {
    this.color = colorInput
  }

  // doorCount getter - returns current doorCount value
  getDoorCount(): number {
    return this.doorCount
  }

  // doorCount getter - returns current doorCount value
  getMaxSpeed(): number {
    return this.maxSpeed
  }

  // speed getter - returns current speed value
  getSpeed(): number {
    return this.speed
  }

  // accelerate method - increases speed by power * time
  accelerate(accelPower: number, accelTime: number): void {
    this.speed += accelPower * accelTime
    if (!(this.speed < this.maxSpeed)) {
      this.speed = this.maxSpeed
    }
  }

  // break method - decreases speed by power * time
  break(accelPower: number, accelTime: number): void {
    this.speed -= accelPower * accelTime
    if (!(this.speed >= 0)) {
      this.speed = 0
    }
  }
}

export = Vehicle
