"use client"
import React, { useEffect } from 'react'

function Question3 (props) {
  const twoSum = (numbers, target) => {
    let index1 = 0;
    let index2 = numbers.length - 1;
    while (index1 < index2) {
      const sum = numbers[index1] + numbers[index2];
      if (sum === target) {
        return [index1 + 1, index2 + 1];
      } else if (sum < target) {
        index1++;
      } else {
        index2--;
      }
    }
    return [];
  }
  useEffect(() => {
    console.log(twoSum([4, 11, 17, 25], 21));
    console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
    console.log(twoSum([-1, 0], -1));
  }, [])
  return (
    <div>This is for Question 3</div>
  )
}

export default Question3;