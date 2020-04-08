var teachingRating = undefined;
var netingRating = undefined;

function teachOne(){
   teachingRating = 1;
   console.log(teachingRating);
   document.getElementById("teaching-display").innerHTML = (teachingRating+" out of 10 stars");
}
function teachTwo(){
   teachingRating = 2;
   console.log(teachingRating);
   document.getElementById("teaching-display").innerHTML = (teachingRating+" out of 10 stars");

}
function teachThree(){
   teachingRating = 3;
   console.log(teachingRating);
   document.getElementById("teaching-display").innerHTML = (teachingRating+" out of 10 stars");

}

function teachFour(){
 teachingRating = 4;
 console.log(teachingRating);
 document.getElementById("teaching-display").innerHTML = (teachingRating+" out of 10 stars");

}

function teachFive(){
 teachingRating = 5;
 console.log(teachingRating);
 document.getElementById("teaching-display").innerHTML = (teachingRating+" out of 10 stars");

}

function teachSix(){
 teachingRating = 6;
 console.log(teachingRating);
 document.getElementById("teaching-display").innerHTML = (teachingRating+" out of 10 stars");

}

function teachSeven(){
 teachingRating = 7;
 console.log(teachingRating);
 document.getElementById("teaching-display").innerHTML = (teachingRating+" out of 10 stars");

}

function teachEight(){
teachingRating = 8;
 console.log(teachingRating);
 document.getElementById("teaching-display").innerHTML = (teachingRating+" out of 10 stars");

}

function teachNine(){
teachingRating = 9;
 console.log(teachingRating);
 document.getElementById("teaching-display").innerHTML = (teachingRating+" out of 10 stars");

}

function teachTen(){
 teachingRating = 10;
 console.log(teachingRating);
 document.getElementById("teaching-display").innerHTML = (teachingRating+" out of 10 stars");

}


function netOne(){
    netingRating = 1;
    console.log(netingRating);
    document.getElementById("neting-display").innerHTML = (netingRating+" out of 10 stars");
 }
 function netTwo(){
    netingRating = 2;
    console.log(netingRating);
    document.getElementById("neting-display").innerHTML = (netingRating+" out of 10 stars");
 
 }
 function netThree(){
    netingRating = 3;
    console.log(netingRating);
    document.getElementById("neting-display").innerHTML = (netingRating+" out of 10 stars");
 
 }
 
 function netFour(){
  netingRating = 4;
  console.log(netingRating);
  document.getElementById("neting-display").innerHTML = (netingRating+" out of 10 stars");
 
 }
 
 function netFive(){
  netingRating = 5;
  console.log(netingRating);
  document.getElementById("neting-display").innerHTML = (netingRating+" out of 10 stars");
 
 }
 
 function netSix(){
  netingRating = 6;
  console.log(netingRating);
  document.getElementById("neting-display").innerHTML = (netingRating+" out of 10 stars");
 
 }
 
 function netSeven(){
  netingRating = 7;
  console.log(netingRating);
  document.getElementById("neting-display").innerHTML = (netingRating+" out of 10 stars");
 
 }
 
 function netEight(){
 netingRating = 8;
  console.log(netingRating);
  document.getElementById("neting-display").innerHTML = (netingRating+" out of 10 stars");
 
 }
 
 function netNine(){
 netingRating = 9;
  console.log(netingRating);
  document.getElementById("neting-display").innerHTML = (netingRating+" out of 10 stars");
 
 }
 
 function netTen(){
  netingRating = 10;
  console.log(netingRating);
  document.getElementById("neting-display").innerHTML = (netingRating+" out of 10 stars");
 
 }

    function submit(){
    var name = document.getElementById("name").value;
    var btn = document.getElementById("btn");
    var database = firebase.database();
    if(!name || !teachingRating || !netingRating){
    alert("Fill in all the values");
    }
    else{
    btn.addEventListener('click',(e) =>{
        e.preventDefault();
        database.ref('/users/'+name).set({
            first_name : name,
            teaching_review: teachingRating,
            connectivity_review: netingRating
        });
    });
    }
    }