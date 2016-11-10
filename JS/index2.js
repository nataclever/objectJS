
var a = prompt('Imput your number for calculate Fibonacci')
var n = 20;
var fibonacci = [0, 1];
var text = ('Fibonacci number is: ');

for ( i = 2; i < n; i++) 
{ 
    fibonacci[i] = fibonacci [i - 1] + fibonacci[i -2]; 
    
}
    console.log(fibonacci.slice(0,n))
    