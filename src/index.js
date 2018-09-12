module.exports = function getZerosCount(number) {
  let zeroCount=0;
  //0 is made of 2 and 5; if there is 5 - 2 will be present anyway
  //each 5 degree in multipliers adds 0 to result
  for (let fiveBase=5; fiveBase<=number; fiveBase*=5)
  {
    zeroCount+=Math.floor(number/fiveBase);
  } 
  return zeroCount;
}
