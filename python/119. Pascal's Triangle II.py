# Given an index k, return the kth row of the Pascal's triangle.
#
# For example, given k = 3,
# Return [1,3,3,1].



class Solution:
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        L = []
        for i in range(0,rowIndex+1):
            L.append([])
            for j in range(0,i+1):
                L[i].append([])
        if rowIndex==0:
            L[0] = [1]
        else:
            L[0]=[1]
            L[1]=[1,1]


        for i in range(2,rowIndex+1):
            for j in range(0,i+1):
                if j==0 or j==i:
                    L[i][j]=1
                else:
                    # print(i,j)
                    L[i][j]=L[i-1][j-1]+L[i-1][j]
                    # print(L[i][j])
        # print(L)
        return L[rowIndex]




# print(Solution.getRow(Solution,3))