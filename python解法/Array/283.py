class Solution:
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        sum=0
        while 0 in nums:
            sum=sum+1
            nums.pop(0)
        for i in range(0,sum):
            nums.append(0)