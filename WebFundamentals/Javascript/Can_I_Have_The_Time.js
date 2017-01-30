  var HOUR = 7;
  var MINUTE = 30;
  var PERIOD = "AM";
  var when;

    if(PERIOD == "AM"){
      when = "morning";
        }
    if(PERIOD == "PM"){
      when = "evening";
      }
    if(MINUTE < 30){
      console.log("It's just after", HOUR,"in the", when);
    }
    else if(MINUTE > 30){
      console.log("It's almost", HOUR+1,"in the", when);
    }
    else{
      console.log("It is half past", HOUR, "in the", when);
    }
