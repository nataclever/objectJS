/*google.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Its a joke!');
});*/




var n = 20;
var fibonacci = [1, 1];

for ( i = 1; i < n; i++) 
{ 
    fibonacci[1] = fibonacci [i - 1] + fibonacci[i -2]; 
    
}
    console.log(fibonacci(0,n))
