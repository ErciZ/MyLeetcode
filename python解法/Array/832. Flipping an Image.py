# Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
#
# To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
#
# To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].


class Solution:
    def flipAndInvertImage(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        # print(A)
        B=[]
        D=[]
        for i in A:
            C=[]
            for j in i:
                C.insert(0,j)
            B.append(C)

        # print(B)

        for i in B:
            # print(i)
            C=[]
            for j in i:
                j=abs(1-j)
                # print(j)
                C.append(j)
            # print(C)
            D.append(C)
        # print(D)
        return D



# print(Solution.flipAndInvertImage(Solution,[[1,1,0],[1,0,1],[0,0,0]]))