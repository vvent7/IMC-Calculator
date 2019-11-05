
var deny=["-", "+", "e"];

function calculate(){

	var weight=Number(winput.value), height=Number(hinput.value)/100, result;

	if(weight>0 && height>0){
		result=weight/(height*height);
		result=Math.round(result*100)/100;

		number.innerHTML=result;
		if(result<18.5) imc.innerHTML="Abaixo do peso";
		else if(result<25) imc.innerHTML="Normal";
		else if(result<30) imc.innerHTML="Sobrepeso";
		else if(result<40) imc.innerHTML="Obesidade";
		else imc.innerHTML="Obesidade grave";

		right.style.opacity=1.0;
	}
	else{
		right.style.opacity=0.2;
		number.innerHTML="--.-";
		imc.innerHTML="IMC";
	}

}

function logKey(event){

	var x=event.target;
	var i;
	for(i=0;i<deny.length;i++){
		if(event.key==deny[i]){
			event.preventDefault();
			return;
		}
	}

}

function start(){

	winput=document.getElementById("weight"), hinput=document.getElementById("height"), right=document.getElementById("right"),
	number=document.getElementById("number"), imc=document.getElementById("result");

	winput.addEventListener("keydown", logKey);
	hinput.addEventListener("keydown", logKey);

	winput.addEventListener("keyup", calculate);
	hinput.addEventListener("keyup", calculate);

}



