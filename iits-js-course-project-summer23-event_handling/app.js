// Your solution goes here.
// Hints:
// -> Handle the onsubmit function using attribute or js event listener.
// -> Take the value of input, calculate the grade and update ui.
// -> Maximum number can be 100
// -> Clear the input field after value submission

let form= document.getElementById("iits-formSubmit");
let inp= document.getElementById("iits-inp");
let button=document.getElementById("button");
let countA=document.getElementById("iits-a_count");
let countBP= document.getElementById("iits-bp_count");
let countB= document.getElementById("iits-b_count");
let countBM= document.getElementById("iits-bm_count");
let countC= document.getElementById("iits-c_count");
let countF= document.getElementById("iits-f_count");

let inpvalue;

let cnt1=0,
    cnt2=0,
    cnt3=0,
    cnt4=0,
    cnt5=0,
    cnt6=0;
    
    function counter(){
        if(inpvalue>=81 && inpvalue<=100)
        {
            cnt1++;
            countA.textContent=cnt1;
        }
        else if(inpvalue>=71 && inpvalue<=80)
        {
            cnt2++;
            countBP.textContent=cnt2;
        }
        else if(inpvalue>=61 && inpvalue<=70)
        {
            cnt3++;
            countB.textContent=cnt3;
        }
        else if(inpvalue>=51 && inpvalue<=60)
        {
            cnt4++;
            countBM.textContent=cnt4;
        }
        else if(inpvalue>=40 && inpvalue<=50)
        {
            cnt5++;
            countC.textContent=cnt5;
        }
        else
        {
            cnt6++;
            countF.textContent=cnt6;
        }

    }
    form.addEventListener("submit", function cbutton(event){
        if(inp.value<=100)
        {
            inpvalue=parseInt(inp.value);
            console.log(inpvalue);
            event.preventDefault();
        }
        else
        {
            alert("Maximum value is 100 ");
        }
        inp.value="";
        counter();

    });