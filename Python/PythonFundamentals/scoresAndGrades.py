import random
def grader():
    print ("Scores and Grades")
    for x in range (0, 10):
        #Note that the score needs to be between 60 and 100
        random_num = 60 + (40 * random.random())
        #Rounding the number here, as the later call to integer truncates towards 0, and a score of 100 needs to be possible (i.e., rounding up)
        random_num = round(random_num)
        if (random_num >= 90 and random_num <= 100):
            grade = "A"
        if (random_num >= 80 and random_num < 90):
            grade = "B"
        if (random_num >= 70 and random_num < 80):
            grade = "C"
        if (random_num >= 60 and random_num <= 70):
            grade = "D"
        print "Score: " + str(int(random_num)) + "; Your grade is " + grade
    print ("End of the program. Bye!")
grader()
