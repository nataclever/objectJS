/*google.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Its a joke!');
});*/


var n = 20;
var fibonacci = [0, 1];
for ( i = 2; i < n; i++) 
{ 
    fibonacci[i] = fibonacci [i - 1] + fibonacci[i -2]; 
    
}
    console.log(fibonacci(0,n))
