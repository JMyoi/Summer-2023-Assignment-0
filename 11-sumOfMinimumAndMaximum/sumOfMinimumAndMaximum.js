function sumOfMinimumAndMaximum(nums) {
  var max = nums.at(0), min = nums.at(0);
for(let i = 1; i<nums.length; i++){
  if(max<nums[i]){
    max = nums[i];
  }
  if(min>nums[i]){
    min = nums[i];
  }
}
return min+max;

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;