import random
def coinTosses():
    heads = 0
    tails = 0
    print ("Starting the program...")
    for x in range(1, 5001):
        currentToss = random.random()
        if (currentToss < 0.5):
            result = "tail"
            tails += 1
        elif (currentToss >= 0.5):
            result = "head"
            heads += 1
        print ("Attempt #" + str(x) + "; Throwing a coin... It's a " + result + "! ... Got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far")
    print ("Ending the program, thank you!")
coinTosses()
