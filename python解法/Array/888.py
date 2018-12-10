class Solution:
    def fairCandySwap(self, A, B):
        """
        :type A: List[int]
        :type B: List[int]
        :rtype: List[int]
        """
        sumA=sum(A)
        sumB=sum(B)
        setB = set(B)
        for x in A:
            y=int(x+(sumB-sumA)/2)

            if y in setB:
                return [x,y]







# class Solution2:
#     def fairCandySwap(self, A, B):
#         """
#         :type A: List[int]
#         :type B: List[int]
#         :rtype: List[int]
#         """
#         sumA=0
#         sumB=0
#         for i in range(0,len(A)):
#             sumA=sumA+A[i]
#         for j in range(0,len(B)):
#             sumB=sumB+B[j]
#
#
#         for x in range(0,len(A)):
#             tag=(sumB-sumA+2*A[x])/2
#             # tag=(sum+2*A[x])/2
#             tag=int(tag)
#             if tag in B:
#                 return [A[x],tag]