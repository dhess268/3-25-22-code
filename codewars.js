
// This function returns the difference between the volume of 2 cuboids given the dimensions of each
function findDifference(a, b) {
    return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b))
  }