class Solution:
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        a=len(nums)
        set_nums=set(nums)
        b=len(set_nums)
        if a!=b:
            return True
        else:
            return False
