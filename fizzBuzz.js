let fizzBuzz = (num) => {

  for(var i = 1; i <= num; i++){
    let printString = ""
    if(i % 3 == 0){
      printString +='fizz'
    }
    if(i % 5 == 0){
      printString +='buzz'
    }
    if(printString){
      console.log(printString);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);