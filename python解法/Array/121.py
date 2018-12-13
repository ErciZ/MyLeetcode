class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        # method 1
        # if len(prices)==0:
        #     return 0
        # else:
        #     D=[]
        #     for i in range(0,len(prices)):
        #         D.append([])
        #     for i in range(0,len(D)):
        #         for j in range(i,len(prices)):
        #             D[i].append(prices[j]-prices[i])
        #         D[i].sort(reverse=True)
        #     print(D)
        #     R=[]
        #     for i in range(0,len(D)):
        #         R.append(D[i][0])
        #     R.sort(reverse=True)
        #     print(R)
        #     if R[0]<=0:
        #         return 0
        #     else:
        #         return R[0]

        # method 2
        # if len(prices)==0:
        #     return 0
        # else:
        #     tag=0
        #     for i in range(0,len(prices)):
        #         for j in range(i,len(prices)):
        #             if prices[j]-prices[i]>=tag:
        #                 tag=prices[j]-prices[i]
        #
        #     return tag

        # method 3
        min_price = float("inf")
        max_price=0
        for i in prices:
            min_price=min(i,min_price)
            profit=i-min_price
            max_price=max(max_price,profit)
        return max_price