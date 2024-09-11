# Sliding Window

The sliding window algorithim is a pattern used to solve problems asking for contigious subarrays or sublists

Example:

[1, 15, 1, 2, 6, 12, 5 ,7] We may have a subarray that could be [1,15,1,2]

We can also slide one element forward: [15,1,2,6]

A subarray is just a small array aport of a bigger array.

A contigious subaray is an array that follows elements one after another, i.e elements that aren't disjointed.

This pattern is great when working with grouped iterable items like:

- Strings
- Arrays
- Linked Lists

and trying to find if we need to calculate:

- min
- max
- longest
- shortest
- contained

# Question Variants:

-- Fixed Variant
Given a fixed length find max sum subarray of size k

-- Dynamic Variant Finding smallest sum greater than or equal to a value S. Finding a window to the value of S.

--Dynamic Variant W/ Data Structure Find longest substring with no more than K distinct characters.

Between all of these are are common ideas.

- Everything is grouped sequentially
- Longest / Smallest / Contains / Max / Min

Fixate the window around the minimzation or maximization, etc.

# Average of Contigiuous Subarray

If we're tasked with finding the average of a contigious subarray of size 5 meaning the average of all elements in a subarray of size 5 we would do this:

1. If we have array `[1, 3, 2, 6, -1, 4, 1, 8, 2]` we need to find our first window. That being `[1,3,2,6,-1] ` when we take the average `1+3+2+6+-1 / 5` we get 2.2.

2. Now our second window is `[3, 2, 6, -1, 4]` when we take the average `3+2+6+-1+4/5` and we get 5 and so on.

# Implementation:

Find the maximum subarray of size k.

```
var subArrayOfK (nums, size){
    let maxValue = 0;
    let currentSum = 0;

    for(int i = 0; i < nums.length; i++ ){
        if(i >= k=1){
            maxValue = Math.Max(maxValue, currentSum)
            currentSum -= arr[i - (k-1)]
        }
    }

}
```

This can be a bit confusing so I'll go line by line. The major thing about the sliding window algorithm is that we treat the window in this context of a sum tracked by the current sum. Since we only want to know the maxSum we can get from three elements, we have a conition which checks if the current iteration has reached that window threshhold, if so then we want to set a new Max for the current window and them since we're going to calculate a new window we remove the very first index in relation to the window by simply removing it's sum in the currentRunning sum.
