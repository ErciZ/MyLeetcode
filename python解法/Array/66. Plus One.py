# Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
#
# You may assume the integer do not contain any leading zero, except the number 0 itself.
#
# The digits are stored such that the most significant digit is at the head of the list.


class Solution:
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        a=""
        for i in digits:
            a=a+str(i)
        print(a)
        print(type(a))
        b=int(a)
        print(b)
        c=b+1
        print(c)
        d=str(c)
        e=[]
        for i in range(len(d)):
            e.append(int(d[i]))

        print(e)
        return e











print(Solution.plusOne(Solution,[1,2,2,3,9]))