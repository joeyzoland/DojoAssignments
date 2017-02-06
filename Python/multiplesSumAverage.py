#Multiples
for x in range (1, 1001):
    print x

for x in range (5, 1000001, 5):
    print x

#Sum
def sumList(myList):
    sum = 0
    for x in myList:
        sum += x
    print sum

sumList([1, 2, 5, 10, 255, 3])

#Average
def averageList(myList):
    sum = 0
    for x in myList:
        sum += x
    average = sum / len(myList)
    print average

a = [1, 2, 5, 10, 255, 3]
averageList(a)
