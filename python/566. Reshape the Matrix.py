class Solution:
    def matrixReshape(self, nums, r, c):
        """
        :type nums: List[List[int]]
        :type r: int
        :type c: int
        :rtype: List[List[int]]
        """
        M=len(nums)
        N=len(nums[0])
        sum1=M*N
        if sum1!=r*c:
            return nums
        else:
            L=[]
            for i in range(M):
                for j in range(N):
                    L.append(nums[i][j])
            P=[]
            for i in range(r):
                P.append([])
            for i in range(r):
                if c*(i+1)<=len(L):
                    P[i]=L[c*i:c*(i+1)]

            return P

print(Solution.matrixReshape(Solution, [[1,2],[3,4]],4,1))