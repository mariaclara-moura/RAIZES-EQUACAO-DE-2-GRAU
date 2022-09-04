	alert("Calcularemos as raízes da equação de segundo grau: ax²+bx+c=0, com base nos coeficientes a, b e c que serão fornecidos por você a seguir")



var a;

var b; 
			
var c;
			
var delta;
			
var x1;
			
var x2;

	

var a = parseFloat(prompt("Informe o valor do coeficiente a da sua equação:"));
	
var b = parseFloat(prompt("Informe o valor do coeficiente b da sua equação:"));
	
var c = parseFloat(prompt("Informe o valor do coeficiente c da sua equação:"));

		
var delta = (b*b)-4*a*c;
		
var x1 = (-b + Math.sqrt(delta))/(2*a);
		
var x2 = (-b - Math.sqrt(delta))/(2*a);
	
	
			
	if(delta < 0){
alert("O delta da sua equação foi um valor negativo. Logo, não existem raízes reais.")
}
		  		
		  	
	if(delta > 0){
		alert(" O delta da sua equação foi um valor positivo. Logo, existem duas raízes reais:");
	alert ("o valor de x₁ é =   "+ x1); 
alert("o valor de x₂ é=   "+ x2)}

			
	if(delta === 0){alert(" O delta da sua equação foi um valor nulo. Logo, as duas raízes são iguais:");
	alert (" x₁ e x₂ =   "+ x1);}