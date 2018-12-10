class Solution:
    def isMonotonic(self, A):
        """
        :type A: List[int]
        :rtype: bool
        """
        if len(A) <= 1:
            return True
        else:
            tag = -1
            for i in range(0,len(A)-1):
                if A[i] > A[i+1]:
                    tag = 0  # decrease
                    break
                elif A[i] > A[i+1]:
                    tag = 1  # increase
                    break


            if tag == 0:
                for i in range(1, len(A)):
                    print(str(tag) + ":" + str(i))
                    if A[i - 1] < A[i]:
                        return False
            elif tag == 1:
                for i in range(1, len(A)):
                    print(str(tag) + ":" + str(i))
                    if A[i - 1] > A[i]:
                        return False

            return True