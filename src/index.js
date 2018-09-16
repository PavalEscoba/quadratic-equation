module.exports = function solveEquation(equation) {
    var arr = equation.split(" ");
    var result = [];
    var a = +arr[0];
    var firstSign = arr[3];
    var b = +arr[4]
    var secondSign = arr[7];
    var c = +arr[8];
    if(firstSign == "-"){
      b = -b;
    }
    if(secondSign == "-"){
      c = -c;
    }
    var D = Math.pow(b,2) - 4 * a * c;
    if(D > 0){
      x1 = Math.round((-b - Math.sqrt(D)) / (2*a));
      x2 = Math.round((-b + Math.sqrt(D)) / (2*a));
      if (x1>x2){
        result.push(x2);
        result.push(x1);
      }
      else{
        result.push(x1);
        result.push(x2);
      }
    }
    else if(D=0){
      x = (-b + Math.sqrt(D)) / (2*a);
      result.push(x);
    }
    else{

    }
    return result;
}
