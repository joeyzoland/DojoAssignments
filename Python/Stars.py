# Contributors:
# Jonathan Lee
# Joseph "Joey" Zoland

def draw_stars(numberList):
    for x in numberList:
        currentStr = ""
        if (type(x)) == int:
            for y in range(x):
                currentStr += "*"
            print currentStr
        elif (type(x)) == str:
            for y in range(len(x)):
                currentStr += x[0].lower()
            print currentStr
y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars(y)
