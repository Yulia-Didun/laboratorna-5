
function middle_element() {
    var values = document.getElementById("arr").value.split(',').filter(Boolean);
    var value = values[values.length / 2 | 0];
    document.getElementById("sumresult").innerHTML = value;
    var val = isNaN(value);
    if (val == false){
        var sum = value.toString().split('').map(Number).reduce(function (a, b) {
            return a + b;
        }, 0);
        alert('Сума чисел середнього елементу масиву: ' + sum);
    } else {
        alert('Середній елемент масиву: ' + value);
    }
}