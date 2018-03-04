# Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
#
# You may assume that the array is non-empty and the majority element always exist in the array.


class Solution:
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n=len(nums)
        for i in nums:
            sum=0
            for j in range(0,n):
                if i ==nums[j]:
                    sum=sum+1
            if sum>=int(n/2)+1:
                return i
            else:
                continue




