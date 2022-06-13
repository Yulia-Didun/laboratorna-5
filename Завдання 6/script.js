function arraynum() {
    var numbers = document.getElementById("sumofnumbers").value.split(',').filter(Boolean)

    
    var sumresult = numbers.reduce((a, b) => a+ (+b),0);
    var average_res = numbers.reduce((a, b) => a+ (+b),0)/numbers.length;
    var rev = numbers.reverse();

    document.getElementById("sumofnumbers").value = rev;

    document.getElementById("sumresult").innerHTML = 'Сума: ' + sumresult;
    document.getElementById("average_result").innerHTML = 'Середнє значення: '+ average_res;
  }