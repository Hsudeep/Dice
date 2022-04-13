document.getElementById("roll").addEventListener("click", as) //catchhing the roll button adn adding function
function as(){ //invoking the function
    let a = diceRoll(6)  //passing the value for a to diceroll function
    document.getElementById("mem_1_n0").innerText = a; //cathing the element inside member_1

    let b = diceRoll(6) //passing the value for b to diceroll function
    document.getElementById("mem_2_n0").innerText = b; //cathing the element inside member_2

    let c = diceRoll(6) //passing the value for c to diceroll function
    document.getElementById("mem_3_n0").innerText = c; //cathing the element inside member_3
    
    
    if(a==b || a==c || b==c || b==a || c==a || c==b || a==b==c){ //Checking if any of the posibilities are true

       document.getElementById("win").innerText = "Tie" //If true then catch the win box and appending the value

       if((a==b)&(b==c)&(c==a)){ //changing box colors to blue if all of them are same
         document.getElementById("member-3").style.backgroundColor="blue"
         document.getElementById("member-1").style.backgroundColor="blue"
         document.getElementById("member-2").style.backgroundColor="blue"
       }
       
       if((a==b) && a>c && b>c){ //changing colors of only 2 boxes 
        document.getElementById("member-1").style.backgroundColor="blue"
        document.getElementById("member-2").style.backgroundColor="blue"
        document.getElementById("member-3").style.backgroundColor="red"
       }else if((a==b) && a<c && b<c){ //changing colors of only 2 boxes 
         document.getElementById("member-1").style.backgroundColor="blue"
         document.getElementById("member-2").style.backgroundColor="blue"
         document.getElementById("member-3").style.backgroundColor="yellow"
       }
       if((b==c) && b>a && c>a){ //changing colors of only 2 boxes 
        document.getElementById("member-2").style.backgroundColor="blue"
        document.getElementById("member-3").style.backgroundColor="blue"
        document.getElementById("member-1").style.backgroundColor="red"
       }
       else if((b==c) && c<a && b<a){ //changing colors of only 2 boxes 
         document.getElementById("member-2").style.backgroundColor="blue"
         document.getElementById("member-3").style.backgroundColor="blue"
         document.getElementById("member-1").style.backgroundColor="yellow"
       }
       if((c==a) && c>b && a>b){ //changing colors of only 2 boxes 
         document.getElementById("member-3").style.backgroundColor="blue"
         document.getElementById("member-1").style.backgroundColor="blue"
         document.getElementById("member-2").style.backgroundColor="red"
       }
       else if((c==a) && c<b && a<b){ //changing colors of only 2 boxes 
         document.getElementById("member-3").style.backgroundColor="blue"
         document.getElementById("member-1").style.backgroundColor="blue"
         document.getElementById("member-2").style.backgroundColor="yellow"
       }
    }

   // Changing color if a is greater than rest
    else if(a>b && a>c){ 
       document.getElementById("win").innerText = a
        document.getElementById("member-1").style.backgroundColor="green"
        if(b>c){ //checking whether b or c is greater after checking a
           document.getElementById("member-2").style.backgroundColor="yellow"
           document.getElementById("member-3").style.backgroundColor="red"
        }
        else { //checking whether b or c is greater after checking a
           document.getElementById("member-3").style.backgroundColor="yellow"
           document.getElementById("member-2").style.backgroundColor="red"
        }
       
    }
    else if(b>a && b>c){ // Changing color if b is greater than rest
       document.getElementById("win").innerText = b;
       document.getElementById("member-2").style.backgroundColor="green"
       if(a>c){
           document.getElementById("member-1").style.backgroundColor="yellow"
           document.getElementById("member-3").style.backgroundColor="red"
        }
        else {
           document.getElementById("member-3").style.backgroundColor="yellow"
           document.getElementById("member-1").style.backgroundColor="red"
        }
   
    }else if(c>a && c>b){ // Changing color if c is greater than rest
       document.getElementById("win").innerText = c;
       document.getElementById("member-3").style.backgroundColor="green"
       if(a>b){
           document.getElementById("member-1").style.backgroundColor="yellow"
           document.getElementById("member-2").style.backgroundColor="red"
        }
        else {
           document.getElementById("member-2").style.backgroundColor="yellow"
           document.getElementById("member-1").style.backgroundColor="red"
        }
    }
    
    
 }
 //Dice value roll function
 function diceRoll(max){
    let x = Math.floor(Math.random() * max)
    if(x == 0){
        return 1
     }else{
        return x
     }
 }
