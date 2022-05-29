function updateLight(current) {
    let lights ={
      "green":1
      ,"yellow":2,
      "red":3
  }
   let result = Object.entries(lights)
  let number = ((lights[current])+ 1) % 4
  if(number == 0){
    return "green"
  }
  let light = result.filter((x,i)=> x[1] == number? x[0] : false ).join("").split(",")[0]
  return light
  }



  /*

  8kyu-Thinkful - Logic Drills: Traffic light



  You're writing code to control your town's traffic lights. You need a function to handle each change from green, 
  to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state
 of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.

Note: Use "" instead of '' in C++.

https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

BEST SOLUTİONS

-----------------------------------------------
const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current]

-----------------------------------------------

function updateLight(current) {
  const states = ['green', 'yellow', 'red'];
  let nextStateIndex = (states.indexOf(current) + 1) % states.length;
  return states[nextStateIndex];
}

-----------------------------------------------

