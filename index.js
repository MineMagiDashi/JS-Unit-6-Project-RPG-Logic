//global variables. change these to test your conditions
let name = "Flint";
let strength = 2; // 1-weak 10-strong
let speed = 5; // 1-slow 10-fast
let intelligence = 5; // 1-dumb, 10-smart
let money = 1000; //gold coins
let height = 21; //inches
let weight = 200; //pounds
let day = "wed"; //mon tue wed thu fri sat sun
let time ="day"; //day night

let module = (weight%height);
let checkSSI = 0
if (speed <= 5 && strength <= 5 && intelligence <= 5){
  checkSSI = (speed + strength + intelligence);
}

function printDetails(){
  return `Is the cave safe for:
  
  name = ${name}
  strength = ${strength}
  speed = ${speed}
  intelligence = ${intelligence}
  money = ${money}
  height = ${height}
  weight = ${weight}
  day = ${day}
  time = ${time}`;
}


function safetyCheck(){
  //You need to put the logic here according to the collected data
  if (day == "mon"){
    if (time == "day"){
      if (checkSSI >= 12){
        console.log("Due to your specific combination of speed, strength and intelligence, the cave lets you through for free.")
      }
      else if (money >= 1000000){
        console.log("Thanks to your abundant wealth, you can buy your way through the cave.")
      }
      else{
          if (intelligence > 7 || name.length < 5){
          console.log("You may pass!")
        }
        else if (money >= 100){
          console.log("With a 100 coin fee, you may pass.")
        }
        else{
          console.log("You could've passed with a 100 coin fee. Unfortunately, you seem to be a little dry my friend.")
        }
      }
    }
    else if (time == "night"){
      if (module == 0){
        console.log("Your weight is evenly divisible by your height. You get a free pass!")
      }
      else if (speed < 4 || money == 0){
        console.log("You may pass. Thank you for keeping quiet.")
      }
      else if (money > 0){
        console.log("You may not pass! Your coins are far too loud!")
      }
    }
  }
  else if (day == "tue"){ 
    if (time == "day"){
      if (checkSSI >= 12){
        console.log("Due to your specific combination of speed, strength and intelligence, the cave lets you through for free.")
      }
      else if (money >= 1000000){
        console.log("Thanks to your abundant wealth, you can buy your way through the cave.")
      }
      else if (strength >= 7 && weight >= 150 && weight <= 250){
        console.log("When travelling through the cave, you feel a strange tingle going up your spine. Turning around, you see the ghost of a giant luchador! He scares you out of the cave.")
      }
    }
    else if (time == "night"){
      if (module == 0){
        console.log("Your weight is evenly divisible by your height. You get a free pass!")
      }
      else if (strength >= 7 && weight >= 150 && weight <= 250){
        console.log("When travelling through the cave, you feel a strange tingle going up your spine. Turning around, you see the ghost of a giant luchador! He scares you out of the cave.")
      }
      else{
        if (height >= 80 && height <= 88){
          console.log("You pass through the seemingly innocent cave, until a 6 foot wall of water blocks your path. Thanks to your super specific height of 7 feet, you manage to walk through it with no problem, save for your clothes getting wet.")
        }
        else if (money >= 1000){
           console.log("You pass through the seemingly innocent cave, until a 6 foot wall of water blocks your path. Unfortunately, you're unable to fit your head between the wall of water and the roof of the cave. But, a strange luchador ghost offers you assistance through the cave for a fee of 1000 coin.")
        }
        else{
          console.log("You pass through the seemingly innocent cave, until a 6 foot wall of water blocks your path. Unfortunately, you're unable to fit your head between the wall of water and the roof of the cave.")
        }
      }
    }
  }
  else if (day == "wed"){ 
    if (time == "day" && checkSSI >= 12){
        console.log("Due to your specific combination of speed, strength and intelligence, the cave lets you through for free.")
      }
    else if (time == "day" && money >= 1000000){
      console.log("Thanks to your abundant wealth, you can buy your way through the cave.")
    }
    else if (strength >= 7 && weight >= 150 && weight <= 250){
      console.log("When travelling through the cave, you feel a strange tingle going up your spine. Turning around, you see the ghost of a giant luchador! He scares you out of the cave.")
    }
    else if (time == "day"){
      if (intelligence > 7 || name.length < 5){
        console.log("You may pass!")
      }
      else if (money >= 100){
        console.log("With a 100 coin fee, you may pass.")
      }
      else{
        console.log("You could've passed with a 100 coin fee. Unfortunately, you seem to be a little dry my friend.")
      }
    }
    else if (time == "night"){
      if (module == 0){
        console.log("Your weight is evenly divisible by your height. You get a free pass!")
      }
      else if (speed < 4 || money == 0){
        console.log("You may pass. Thank you for keeping quiet.")
      }
      else if (money > 0){
        console.log("You may not pass! Your coins are far too loud!")
      }
    }
    else{
      console.log("You travel through the cave. Nothing is wrong, apparently.")
    }
  }
  else if (day == "thu"){ 
    if (time == "day" && checkSSI >= 12){
        console.log("Due to your specific combination of speed, strength and intelligence, the cave lets you through for free.")
      }
    else if (time == "day" && money >= 1000000){
      console.log("Thanks to your abundant wealth, you can buy your way through the cave.")
    }
     if (time == "night" && module == 0){
      console.log("Your weight is evenly divisible by your height. You get a free pass!")
    }
    else if (height < 40 || weight < 160 || speed >= 7){
      console.log("You are able to pass through a narrow passage, avoiding the lava thanks to your lighter/quicker/shorter build.");
    }
    else if (strength >= 7){
      if (money >= 50){
        console.log("Thanks to your strong build and adequate coins, you are able to knock loose stalagtites, using stones, down as platforms for the flooded lava, as well as pay for water half-way (offered by the cave) to keep yourself cool.");
      }
      else{
        console.log("Your strong build allows for you to knock loose stalagtites with stones down to act as platforms, but due to your inadequate amount of coins (to buy water offered by the cave), you overheat and are unable to continue half-way through the lava pool.");
      }
    }
    else{
      console.log("Unfortunately, the cave has been filled with lava. Better luck tomorrow!");
    }
  }
  else if (day == "fri"){ 
    if (time == "day" && checkSSI >= 12){
        console.log("Due to your specific combination of speed, strength and intelligence, the cave lets you through for free.")
    }
    else if (time == "day" && money >= 1000000){
      console.log("Thanks to your abundant wealth, you can buy your way through the cave.")
    }
    else if (time == "night"){
      if (module == 0){
        console.log("Your weight is evenly divisible by your height. You get a free pass!")
      }
      else if (speed < 4 || money == 0){
        console.log("You may pass. Thank you for keeping quiet.");
      }
      else if (money > 0){
        console.log("You may not pass! Your coins are far too loud!");
      }
    }
  }
  else if (day == "sat"){ 
    if (time == "day" && money >= 1000000){
      console.log("Thanks to your abundant wealth, you can buy your way through the cave.")
    }
    else if (money == 0 && weight < 150){
      if (height > 58 && speed >= 5){
        console.log("The cave helps only the famished and poor on Saturdays, allowing you to pass through. Thanks to your speed, you are able to avoid the bats.");
      }
      else if (height < 58){
        console.log("The cave helps only the famished and poor on Saturdays, allowing you to pass through. Thanks to your shorter height, you don't have to avoid the hanging bats.")
      }
      else{
        console.log("The cave helps only the famished and poor on Saturdays, granting you permission to pass through. Unfortunately, you are too tall and too slow to avoid the hanging bats, and cannot pass.")
      }
    }
    else{
      console.log("The cave helps only the famished and poor on Saturdays, not allowing you to pass.")
    }
  }
  else if (day == "sun"){ 
    if (time == "day" && money >= 1000000){
      console.log("Thanks to your abundant wealth, you can buy your way through the cave.")
    }
    else if (speed < 5 && intelligence >= 7){
      console.log("Thanks to your patience and sharp memory, you are capable of passing through the impenetrable darkness and shifting passageways of the cave.");
    }
    else if (time = "night" && intelligence < 2){
      console.log("For some reason, your blatant stupidity and lack of spatial awareness manages to lead you through the shifting cave with absolutely no problem.");
    }
    else{
      console.log("On Sundays, the cave is covered in an impenetrable darkness, and shifts its passageways. You are unable to get a grip on the patterns of the cave, and cannot successfully pass as a result.");
    }
  }
}

function caveProgram(){
  console.log(printDetails()+"\n");
  if (intelligence != name.length){
    if (name.length > 9 && money >= 10){
      console.log("Due to the length of your name, the cave requests a 10 coin fee to enter.\n")
      money = money - 10
      console.log(safetyCheck());
    }
    else if (name.length > 9 && money < 10){
      console.log("Due to the length of your name, the cave requests a 10 coin fee to enter. You do not have an adequate amount of money.\n")
    }
    else{
      console.log(safetyCheck());
    }
  }
  else{
    console.log("Your name length is the same as your level of intelligence. YOU WILL NOT PASS!!!")
  }
}

//run the program
caveProgram();