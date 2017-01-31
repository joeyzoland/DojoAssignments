var students = [
     {first_name : 'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

function StudentList(list){
  for(var i = 0; i < list.length; i++){
    console.log(list[i].first_name, list[i].last_name)
  }
}

StudentList(students)
