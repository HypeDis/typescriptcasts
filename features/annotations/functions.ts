// strict typing of the output of the function allows typescript to check for return errors
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// rare case
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};
