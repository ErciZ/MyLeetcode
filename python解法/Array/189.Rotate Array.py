# Rotate an array of n elements to the right by k steps.
# For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
#
# Note:
# Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
#
# [show hint]
#
# Related problem: Reverse Words in a String II
#
# Credits:
# Special thanks to @Freezen for adding this problem and creating all test cases.



class Solution(object):


    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        self.List=nums
        self.H = []
        for i in range(len(self.List)):
            self.H.append(-1)
        for i in range(len(self.List)):
            self.H[i]=self.List[i]
        for _ in range(k):
            Solution.change(self,self.H)
        Solution.result(self,nums)
    def change(self,H):
        H=[]
        for i in range(len(self.List)):
            if i !=0:
                H.append(self.H[i-1])
            else:
                H.append(self.H[len(self.H)-1])
        self.H=H

    def result(self,nums):
        for i in range(len(self.H)):
            nums[i]=self.H[i]
        print(nums)

# Solution.rotate(Solution,[1,2],1)
