const myProblem = () => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;
    var alpha = document.getElementById("myAlpha").value;
    var beta = document.getElementById("myBeta").value;

    if (a != 0 && alpha != 0) {
        var beta = 90 - alpha;
        var b1 = a / Math.tan(alpha * Math.PI / 180);
        var b2 = (b1).toFixed(1);
        var c1 = a / Math.sin(alpha * Math.PI / 180);
        var c2 = (c1).toFixed(1);
        var answ1 = "Beta " + "= " + beta + "°" + ", " + "b " + "= " + b2 + ", " + "c " + "= " + c2;
            return answ1;
    } else 
    if (a != 0 && beta != 0) {
        var alpha = 90 - beta;
        var b1 = a * Math.tan(beta * Math.PI / 180);
        var b2 = (b1).toFixed(1);
        var c1 = a / Math.cos(beta * Math.PI / 180);
        var c2 = (c1).toFixed(1);
        var answ2 = "alpha " + "= " + alpha + "°" + ", " + "b " + "= " + b2 + ", " + "c " + "= " + c2;
            return answ2; 
    } else 
    if (b != 0 && alpha != 0) {
        var beta = 90 - alpha;
        var a1 = b * Math.tan(alpha * Math.PI / 180);
        var a2 = (a1).toFixed(1);
        var c1 = b / Math.cos(alpha * Math.PI / 180);
        var c2 = (c1).toFixed(1);
        var answ3 = "beta " + "= " + beta + "°" + ", " + "a " + "= " + a2 + ", " + "c " + "= " + c2;
            return answ3;
    } else 
    if (b != 0 && beta != 0) {
        var alpha = 90 - beta;
        var a1 = b / Math.tan(beta * Math.PI / 180);
        var a2 = a1.toFixed(1);
        var c1 = b / Math.sin(beta * Math.PI / 180).toFixed(1);
        var c2 = c1.toFixed(1);
        var answ4 = "alpha " + "= " + alpha + "°" + ", " + "a " + "= " + a2 + ", " + "c " + "= " + c2;
            return answ4;
    } else 
    if (c != 0 && alpha != 0) {
        var beta = 90 - alpha;
        var a1 = c * Math.sin(alpha * Math.PI / 180);
        var a2 = (a1).toFixed(1);
        var b1 = c * Math.cos(alpha * Math.PI / 180);
        var b2 = (b1).toFixed(1);
        var answ5 = "beta " + "= " + beta + "°" + ", " + "a " + "= " + a2 + ", " + "b " + "= " + b2;
            return answ5;    
    }   else 
    if (c != 0 && beta != 0) {
        var alpha = 90 - beta;
        var a1 = c * Math.cos(beta * Math.PI / 180);
        var a2 = (a1).toFixed(1);
        var b1 = c * Math.sin(beta * Math.PI / 180);
        var b2 = (b1).toFixed(1);
        var answ6 = "alpha " + "= " + alpha + "°" + ", " + "a " + "= " + a2 + ", " + "b " + "= " + b2;
            return answ6;
    }  else
    if ( a != 0 && b != 0) {
        var alpha = (Math.atan(a / b) * 180 / Math.PI).toFixed(1);
        var beta = (Math.atan(b / a) * 180 / Math.PI).toFixed(1);
        var c1 = Math.sqrt(a * a + b * b).toFixed(1);
        var answ7 = "alpha " + "= " + alpha + "°" + ", " + "beta " + "= " + beta + "°" + ", " + "c " + "= " + c1;
            return answ7;
    }   else 
    if (a != 0 && c != 0) {
        var b1 = (Math.sqrt(c * c - a * a)).toFixed(1);
        var alpha = (Math.asin(a / c) * 180 / Math.PI).toFixed(1);
        var beta = (90 - alpha).toFixed(1);
        var answ8 = "alpha " + "= " + alpha + "°" + ", " + "beta " + "= " + beta + "°" + ", " + "b " + "= " + b1;
            return answ8;
    }   else 
    if (b != 0 && c != 0) {
        var alpha = (Math.acos(b / c) * 180 / Math.PI).toFixed(1);
        var beta = (90 - alpha).toFixed(1);
        var a1 = Math.sqrt(c * c - b * b).toFixed(1);
        var answ9 = "alpha " + "= " + alpha + "°" + ", " + "beta " + "= " + beta + "°" + ", " + "a " + "= " + a1;
            return answ9;
        }   else
            return "Try Again";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}

