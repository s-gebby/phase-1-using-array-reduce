const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function batteryReducer(totalBatteries, currentBatch) {
  return totalBatteries + currentBatch;
}

const totalBatteries = batteryBatches.reduce(batteryReducer, 0);
