#Find and replace
def monkeyFinder():
    myStr = "If monkeys like bananas, then I must be a monkey!"
    myList = []
    for x in myStr:
        if myStr.find("monkey") == -1:
            break
        capture = myStr.find("monkey")
        myList.append(capture)
        myStr = myStr[capture+1:]
    print myList

monkeyFinder()

copiedStr = "If monkeys like bananas, then I must be a monkey!"
copiedStr = copiedStr.replace("monkey", "alligator")
print copiedStr

#Min and max
x = [2,54,-2,7,12,98]
print (min(x))
print (max(x))

#First and last
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[-1]

newList = []
newList.append(x[0])
newList.append(x[-1])
print newList

#New list
oldList = [19,2,54,-2,7,12,98,32,10,-3,6]
newList = []
oldList.sort()
counter = 0
while counter < len(oldList):
    if oldList[counter] < 0:
        temp = oldList.pop(counter)
        newList.append(temp)
        counter = counter - 1
    counter = counter + 1
oldList.insert(0, newList)
print oldList
