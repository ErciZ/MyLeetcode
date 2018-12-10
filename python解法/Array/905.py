class Solution:
    def sortArrayByParity(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """
        O=[]
        E=[]
        R=[]
        for i in range(0, len(A)):
            if A[i]%2==0:
                O.append(A[i])
            else:
                E.append(A[i])
        R=O+E
        return R




