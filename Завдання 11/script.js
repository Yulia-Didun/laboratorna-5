function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function getFactorials(arr) {
    var result = arr.map(x => factorial(x));
    return result;
}

function fact(){
    let array = document.getElementById('array').value.split(',').filter(Boolean)
    let x = getFactorials(array)

    const maxArrayLength = Math.max(array.length, x.length) 

    const tbody = document.querySelector('tbody');

    for (let i = 0; i < maxArrayLength; i++) { 
      
        const tr = tbody.insertRow(); 
        tr.insertCell().innerHTML = array[i] ? array[i] : '' 
        tr.insertCell().innerHTML = x[i] ? x[i] : '' 
        }

}


 
