/**
 * This is the main code that runs
 * with the Vehicle Class.
 *
 * By:      Aidan Lalonde-Novales (mostly Mr Coxall)
 * Version: 1.0
 * Since:   2022-10-27
 */

import Bike from './Bike'
import Truck from './Truck'

// new BMX Bike
console.log('Created BMX Bike.')
const bmxBike = new Bike(40, 'Red')

console.log('Bike Status:')
bmxBike.status()

console.log('Set the cadence to 10:')
bmxBike.setCadence(10)
bmxBike.accelerate(0)
bmxBike.status()

console.log('Accelerate by 15:')
bmxBike.accelerate(15)
bmxBike.status()

console.log('Ring Bell:')
bmxBike.ringBell()

console.log('')

// new Truck
console.log('Created Truck.')
const truck = new Truck(200, 'Grey')
truck.setLicensePlate('HGC-3456F')

console.log('Truck Status:')
truck.status()

console.log('Accelerating, 10 of power for 10 seconds.')
truck.accelerate(10, 10)
console.log(`\nNew speed (1): ${Number(truck.getSpeed())}\n`)

console.log('Braking, 10 of power for 5 sec.')
truck.braking(10, 5)
console.log(`\nNew speed (2): ${Number(truck.getSpeed())}\n`)

console.log('Applying air pressure of 10:')
truck.airPressure(10)
console.log(`\nNew speed (3): ${Number(truck.getSpeed())}\n`)

console.log('Done.')
