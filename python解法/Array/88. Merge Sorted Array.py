# Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
#
# Note:
# You may assume that nums1 has enough space (size that is greater or equal to m + n)
# to hold additional elements from nums2.
# The number of elements initialized in nums1 and nums2 are m and n respectively.

class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
        L=[]
        if m!=0:
            for i in range(m):
                L.append(nums1[i])
        if n!=0:
            for i in range(n):
                L.append(nums2[i])
        for i in range(len(nums1)):
            nums1.pop()
        L=sorted(L)
        for i in range(len(L)):
            nums1.append(L[i])
        # print(nums1)
        # nums1=sorted(nums1)
        # print(nums2)
        # print(nums1)

Solution.merge(Solution,[2,0],1,[1],1)