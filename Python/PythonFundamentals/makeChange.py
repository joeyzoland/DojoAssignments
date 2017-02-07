#Note that this can use any currency type, assuming the user inputs it in the correct order and with the correct associations

import math
def change(amount, currency, value):
    emptyDict = {};
    counter = 0;
    for i in currency:
        emptyDict[i] = math.trunc(amount/value[counter])
        amount -= emptyDict[i] * value[counter]
        counter += 1
    print emptyDict

currency = ["dollar", "half-dollar", "quarter", "dime", "nickel", "penny"]
value = [100, 50, 25, 10, 5, 1]

change(157, currency, value)
