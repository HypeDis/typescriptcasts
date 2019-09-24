// string[]
const carMakers = ['ford', 'toyota', 'chevy'];
// Date[]
const dates = [new Date(), new Date(), new Date()];

// sting[][]
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting  values
// redline is because car is declared in variables.ts already
const car = carMakers[0];
const mycar = carMakers.pop();

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
