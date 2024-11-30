const input=document.getElementById("input");
const toFahrenheit=document.getElementById("toF");
const toCelcius=document.getElementById("toC");
//const submit=document.getElementById("Submit");
const output=document.getElementById("out");


function convert(){
    let temp=Number(input.value);
    if(toFahrenheit.checked){
        let f= (temp* 9/5)+32;
        output.innerHTML=`temperature in Fahrenheit is ${f}`;
    }else if(toCelcius.checked){
        let c= (temp-32)*(5/9);
        c=c.toFixed(2);
        output.innerHTML=`temperature in Celcius is ${c}`;
    }else{
        output.innerHTML=`Select a unit`;
    }
}