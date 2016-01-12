function btnplus(){
    document.calc.result.value+="+"
}
function btnsub(){
    document.calc.result.value+="-"
}
function btnmult(){
    document.calc.result.value+="*"
}
function btndiv(){
    document.calc.result.value+="/"
}
function btnmod(){
    document.calc.result.value+="%"
}
function btnsqrt(){
    document.calc.result.value = Math.sqrt(document.calc.result.value);
}
function btnsquare(){
    document.calc.result.value = Math.pow(document.calc.result.value, 2)
}
function btnfac(){
    var n=1;
    for(var i = document.calc.result.value; i > 0; i--){
        n = n * i
    }
    document.calc.result.value = n;
}