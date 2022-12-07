function Arithmetic() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let add = num1 + num2;
    let sub = num1 - num2;
    let mul = num1 * num2;

    // console.log(num1);
    // console.log(num2);
    let result = document.getElementById("Result").innerHTML = "Addtion: " + add + " <br>  Substraction: " + sub + " <br>  Multiplication: " + mul;
  }