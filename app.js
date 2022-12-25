
// let screen = document.getElementsByClassName("screen");  // not woring i dont know why 
let screen=document.getElementById('screen');

let screenValue;

let button=document.querySelectorAll('button');

// console.log(button);
for(i of button){
    i.addEventListener('click',(ajit)=>{
        let ButtonText=ajit.target.innerText;
        console.log('this is clicked',ButtonText);


        if(ButtonText=='C'){
            screenValue="";
            screen.value=screenValue;

        }
        else if(ButtonText=='='){
            screen.value=eval(screenValue)
            screenValue="";
            // screen.value=screenValue;
        }
        else if(ButtonText=="BackSpace"){
           screenValue= screenValue.substr(0,screenValue.length-1);
            screen.value=screenValue;
        }

        else{
            screenValue=screenValue+ButtonText;
            screen.value=screenValue;
        }

    })
}
