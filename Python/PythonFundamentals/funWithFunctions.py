#Odd/even
def odd_even():
    for x in range(1, 2001):
        if (x % 2 == 1):
            div = "odd"
        elif (x % 2 == 0):
            div = "even"
        print "Number is " + str(x) + ".  This is an " + div + " number."
odd_even()

#Multiply
def multiply(myList, multiplier):
    counter = 0
    while counter < len(myList):
        myList[counter] *= multiplier
        counter += 1
    return myList

a = [2,4,10,16]
print(multiply(a, 5))

#Hacker Challenge
def hacker(bigList):
    masterList = []
    for x in bigList:
        currentList = []
        while x > 0:
            currentList.append(1)
            x -= 1
        masterList.append(currentList)
    print masterList

hacker(multiply(a, 5))
