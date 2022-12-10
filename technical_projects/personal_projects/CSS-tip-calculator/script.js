//get elements


const billNum = document.getElementById('billNum');
const peopleNum = document.getElementById('peopleNum');
const tipAmnt = document.getElementById('tipAmnt');
const totalAmnt = document.getElementById('totalAmnt');
const tips = document.querySelectorAll('.tips');
const err = document.querySelector('.err');
const customTip = document.getElementById('customise');
const reset = document.querySelector('.reset');
//disable reset
reset.disabled = true;



billNum.value = 0;
peopleNum.value = 1;
tipAmnt.innerHTML = `$${(0.0).toFixed(2)}`;
totalAmnt.innerHTML = `$${(0.0).toFixed(2)}`;

let billValue =0;
let peopleVal = 1;
let tip = 0;



//prevent input of special chars
let invalidChars = ['-','e','E','+'];
let invalidChar = ['-','e','E','+','.'];
billNum.addEventListener('keydown', (eve)=>{
    if(invalidChars.includes(eve.key )){
        eve.preventDefault();
        
    }
    
});
peopleNum.addEventListener('keydown', (eve)=>{
    if(invalidChar.includes(eve.key)){
        eve.preventDefault();
    }
    
});
customTip.addEventListener('keydown', (eve)=>{
    if(invalidChars.includes(eve.key)){
        eve.preventDefault();
    }

});

//reset state
billNum.addEventListener('focus', enset)
peopleNum.addEventListener('focus', enset)
customTip.addEventListener('focus', (e)=>{
    customTip.style.border = '3px solid hsl(172, 67%, 45%)';
    reset.disabled=false;
})
customTip.addEventListener('blur',(e)=>{
    customTip.style.border = 'none';
});

function enset(eve){
    
    reset.disabled = false;
    reset.style.background = '#26c0ab';
    reset.style.color = '#00494d';
}

billNum.addEventListener('blur',blu)
peopleNum.addEventListener('blur',blu)

function blu(eve) {

    billNum.style.border ='none';
    peopleNum.style.border = 'none';
    //eve.target.style.border = 'none';
    
}


//handle bill amount input
billNum.addEventListener('input', getBillNum);

function getBillNum(eve){

    billNum.style.border = '3px solid hsl(172, 67%, 45%)';
    let reg1 = / [e+-E] /gi; //the spaces in the regex are to prevent your code from breaking (NaN type shit) so you dont start crying.
    
    eve.target.value = eve.target.value.replace(reg1,'');
    

    if(eve.target.value!=''){
        
        billValue = parseFloat(eve.target.value);
        calculateTip();
    
    }    
    
    
}


//handle number of people inputs
peopleNum.addEventListener('input', getPeopleNum)

function getPeopleNum(eve){


    let reg1 = / [.e+-E] /gi;
    eve.target.value = eve.target.value.replace(reg1,'');


    if(eve.target.value!=''){
        
        peopleVal = parseInt(eve.target.value);
    }
    


    if(peopleVal<1 ){
        err.style = 'display:block';
        peopleNum.style.border = '3px solid rgba(255, 0, 0, 0.582)'
    }else{
        err.style = 'display:none';
        peopleNum.style.border = '3px solid hsl(172, 67%, 45%)'
        calculateTip();
        
    }

    
    
};




//handle tip input
tips.forEach(element => {
    addEventListener('click',tipClick);
}); 

function tipClick(eve){
    tips.forEach((val)=>{
        val.classList.remove('activee')
        if(eve.target.innerHTML==val.innerHTML){
            val.classList.add('activee');
            tip = parseFloat(val.innerHTML);
        }
    });
    if(peopleVal>=1){
        calculateTip();
    }
    
    
};


customTip.addEventListener('input',costomTip);
function costomTip(eve){
    //regex to prevent pasting of special chars
    let reg1 = / [e+-E] /gi;
    eve.target.value = eve.target.value.replace(reg1,'');

    tips.forEach((val)=>{
        val.classList.remove('activee')
       
    });
    if(eve.target.value!=''){

        
        tip = parseInt(eve.target.value);
        calculateTip();
    }

}

//Calculate tip
function calculateTip(){

    //tip per person
    tipAmnt.innerHTML = `$${((billValue * (tip/100))/peopleVal).toFixed(2)} `;

    

    //total per person
    totalAmnt.innerHTML = `$${((billValue + (billValue * (tip/100)))/peopleVal).toFixed(2)}`;

    
}



//reset events

reset.addEventListener('click', resset);
reset.addEventListener('mousedown', (e)=>{
    reset.style.background='hsl(185, 41%, 84%)';
    
});





function resset(){

    billNum.value = 0;
    peopleNum.value = 1;
    tipAmnt.innerHTML = `$${(0.0).toFixed(2)}`;
    totalAmnt.innerHTML = `$${(0.0).toFixed(2)}`;
    
    billValue =0;
    peopleVal = 1;
    tip = 0;

    reset.disabled = true;
    err.style = 'display:none';
    peopleNum.style.border = 'none';
    billNum.style.border ='none';

    reset.style.background = '#006766';
    reset.style.color = '#00494d';

}
