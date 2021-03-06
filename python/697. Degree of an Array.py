# Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
#
# Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
#
# Example 1:
# Input: [1, 2, 2, 3, 1]
# Output: 2
# Explanation:
# The input array has a degree of 2 because both elements 1 and 2 appear twice.
# Of the subarrays that have the same degree:
# [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
# The shortest length is 2. So return 2.
# Example 2:
# Input: [1,2,2,3,1,4,2]
# Output: 6
# Note:
#
# nums.length will be between 1 and 50,000.
# nums[i] will be an integer between 0 and 49,999.


class Solution(object):
    def findShortestSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        dic={}
        for i in range(len(nums)):
            dic[i]=[]



        for i in nums:
            L=[]
            for j in range(len(nums)):
                if nums[j]==i:
                    L.append(j)
            dic[i]=L
        # print(dic)
        temp=0
        for i in range(len(dic)):
            if len(dic[i])>temp:
                temp=len(dic[i])
        # print('temp',temp)
        H=[]
        for i in range(len(dic)):
            if len(dic[i])==temp:
                H.append(i)
        # print('H',H)
        M=[]
        for i in H:
            M.append((i,dic[i][-1]-dic[i][0]))
        # print(M)
        result=len(nums)
        for i in M:
            if i[1]<=len(nums):
                result=i[1]
        return result+1





print(Solution.findShortestSubArray(Solution,[1,2,2,3,1,4,2]))