class Solution:
    def isOneBitCharacter(self, bits):
        """
        :type bits: List[int]
        :rtype: bool
        """
        L=[]
        for i in range(0,len(bits)):
            if bits[i]==0:
                L.append(i)
        if len(L)<2:
            if len(bits)%2==0:
                return False
            else:
                return True
        else:
            if (L[-1]-L[-2])%2==0:
                return False
            else:
                return True

