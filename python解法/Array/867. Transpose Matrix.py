# Given a matrix A, return the transpose of A.
# The transpose of a matrix is the matrix flipped over it's main diagonal,
#  switching the row and column indices of the matrix.


class Solution:
    def transpose(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        print(A)
        M=len(A)
        N=len(A[0])
        # print(M,N)
        L=[]
        for i in range(N):
            L.append([])
        for i in range(N):
            for j in range(M):
                L[i].append(0)
        # print(L)

        for i in range(M):
            for j in range(N):
                # print(A[i][j])
                L[j][i]=A[i][j]
        # print(L)
        return L




# print(Solution.transpose(Solution, [[1,2,3],[4,5,6],[7,8,9]]))