function arraynum() {
    var array_1 = document.getElementById("array-1").value.split(',').filter(Boolean);
    var array_2 = document.getElementById("array-2").value.split(',').filter(Boolean);

    /*var results = array_1.filter(({ value: id1 }) => !array_2.some(({ value: id2 }) => id2 === id1));
    document.getElementById("array-3").innerHTML = results;*/
    let difference = array_1
                 .filter(x => !array_2.includes(x))
                 .concat(array_2.filter(x => !array_1.includes(x)));
    document.getElementById("array-3").innerHTML = difference;             
  }
