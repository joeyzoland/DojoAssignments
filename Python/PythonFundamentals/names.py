#Part 1

students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def dictReader (students):
    for i in students:
        print i["first_name"],
        print i["last_name"]

dictReader(students)

#Part 2

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def dictReader2 (users):
    for i in users:
        print i
        counter = 1
        for x in users[i]:
            length = len(x["first_name"]) + len(x["last_name"])
            print (str(counter) + " - " + x["first_name"] + " " + x["last_name"] + " - " + str(length))
            counter += 1

dictReader2(users)
