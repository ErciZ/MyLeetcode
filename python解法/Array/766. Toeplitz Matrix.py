# A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.
# Now given an M x N matrix, return True if and only if the matrix is Toeplitz.


class Solution:
    def isToeplitzMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: bool
        """
        flag = 0
        tag = 0
        M = len(matrix)
        N = len(matrix[0])
        # print(M, N)
        L = []

        for i in range(M):
            for j in range(N):
                tag = matrix[i][j]
                L.append(tag)
                # print("tag=", tag)
                # print("i,j=", i, j)
                for n in range(M):
                    # print("n", n)
                    try:
                        if matrix[i + n][j + n] != tag:
                            flag = 1
                    except:
                        pass

        if flag == 0:
            return True
        else:
            return False


# print(Solution.isToeplitzMatrix(Solution, [[41, 45], [81, 41], [73, 81], [47, 73], [0, 47], [79, 76]]))
