// Chapter 17 to 20 

// Question 1 

for(var i = 1;i<=10;i++) 
{
    console.log(i)
}

// Question 2 

for(var i = 1;i<=12;i++) 
{
    console.log("Laraib Shahzad")
}

// Question 3 

for (var i=0;i<=4;i++) 
{

}
// Corrected

// Question 4 

for(var text=1;text<=100;text++) 
{
    console.log("WELCOME TO YOU..")
}

// Question 5 

for(var i=3;i>=1;i--) 
{
    console.log("Iteration " + i)
}

// Question 6 

var arr = [1,2,3,4,5,6];

var arrlength = arr.length;

console.log(arrlength);

// Question 7 

var variableName = "flag" + " , " + true;

console.log(variableName);

// Question 8 

var pets = ["Cat","Dog","Horse","Lion","Birds"];

for(var i=0;i<pets.length;i++) 
{
    console.log(pets[i])
}

// Question 9 

for (var i = 1; i <= 10; i++) 
{
    console.log(i);
    if (i === 1) 
    {
      alert(i);
      break;
    }
}

// Question 10  

var userName = ["laraib shahzad","anas khan","syed umair","ahmed khan"];

var enterUsername = prompt("Enter First Name.");

for(var i = 0; i <= userName.length; i++) 
{
    if(enterUsername === "laraib shahzad") 
    {
        alert("WELCOME..");
    }
    else if(enterUsername === "anas khan") 
    {
        alert("WELCOME..");
    }
    else if (enterUsername === "syed umair") 
    {
        alert("WELCOME..");
    }
    else if (enterUsername === "ahmed khan") 
    {
        alert("WELCOME..");
    } 

    else 
    {
        alert("Please write correct user name")
    }
}

// Question 11 

var matchFound = false;
var list =   ["Cat","Dog","Frog"]
var userInput = prompt("Enter Input");

for (var i = 0; i < list.length; i++) 
{
  if (userInput === list[i]) 
  {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) 
{
  alert("Match not found");
}

// Question 12 

var firstArr = ["a", "b", "c", "d", "e", "f"]; 
var secondArr = [1, 2, 3, 4, 5, 6];

for(var i = 0; i < firstArr.length; i++) 
{
    var firstAlpha = firstArr[i]; 

    for(var k = 0; k < secondArr.length; k++) 
    {
        var secondAlpha = secondArr[k];

        console.log(firstAlpha + secondAlpha);
    }
}

// END 