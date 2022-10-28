/**
 * This is a child class of Vehicle.ts, which contains
 * fields and methods related to a truck.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-10-27
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  // declare new field
  private licensePlate = ''

  // status method - prints all fields applied to truck object
  status(): void {
    console.log(`
      -> Speed: ${super.getSpeed()}
      -> Max Speed: ${super.getMaxSpeed()}
      -> Color: ${super.getColor()}
      -> License Plate: ${this.licensePlate}
    `)
  }

  // setLicensePlate method - licensePlate setter
  setLicensePlate(licensePlateInput: string): void {
    this.licensePlate = licensePlateInput
  }

  // getLicensePlate method - licensePlate getter
  getLicensePlate(): string {
    return this.licensePlate
  }

  // airPressure method - add air pressure and reduces speed
  airPressure(airProvided: number): void {
    super.setSpeed(super.getSpeed() - airProvided / 2)
    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }
}

export = Truck
