const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const totalBatteries = [4, 5, 3, 4, 4, 6, 5].reduce(reducer,0);

// Code your solution here