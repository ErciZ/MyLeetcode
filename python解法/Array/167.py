class Solution:
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        result={}
        for i in range(len(numbers)):
            if numbers[i] in result:
                return result[numbers[i]]+1,i+1
            else:
                result[target-numbers[i]]=i