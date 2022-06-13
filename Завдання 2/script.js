function isPrime(n) {
  var isprime = true;
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return isprime=false;
    var m = Math.sqrt(n); //returns the square root of the passed value
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return isprime=false;
    return isprime=true;
 }


function Prime(){
    let array = document.getElementById('array').value.split(',').filter(Boolean);
    let x = []
    for(i in array){
      x[i-1] = isPrime(i);
    }

    const maxArrayLength = Math.max(array.length, x.length); 
    const tbody = document.querySelector('tbody');

    for (let i = 0; i < maxArrayLength; i++) { 
        const tr = tbody.insertRow(); 
        tr.insertCell().innerHTML = array[i] ? array[i] : '' 
        tr.insertCell().innerHTML = x[i] ? x[i] : '' 
        }
}



