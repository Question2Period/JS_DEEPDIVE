        let a = 1, b = 1;  
        let c = ++a;
        let d = b++;
console.log(c);
console.log(d);
console.log(b);

console.log("" + 1 + 0);
//덧셈에서 피연산자 중 단 하나라도 문자열이 있다면 문자열 변환, 답은 "10"
console.log("" - 1 + 0);
//왼쪽부터 우선 연산이고, 문자열의 -연산은 없으므로 "" -> 0이 되고, 답은 -1
console.log(true + false);
//boolean형에서 true는 1, false는 0으로 변환되어 덧셈 연산된다, 답은 1
console.log(6 / "3");
// 덧셈 제외 모든 연산에서 문자열은 숫자형으로 변환되어 연산된다, 답은 2
console.log("2" * "3");
//위와 같은 사유, 답은 6
console.log(4 + 5 + "px");
//왼쪽부터 계산하여 9+문자열, 답은 "9px"
console.log("$" + 4 + 5);
//문자열 덧셈, 답은 "$45"
console.log("4" - 2);
//덧셈이 아닌 문자열 계산, 답은 4-2=2
console.log("4px" - 2);
//문자열->숫자형 변환과정을 거치나 4px는 숫자형으로 변환불가, 답은 NaN
console.log(7 / 0);
//0으로 나눴을때 몫은 무한대이다, 답은 Infinity
console.log("  -9  " + 5);
//문자열 덧셈. 여백에 주의하자, 답은 " -9 5"
console.log("  -9  " - 5);
//문자열 숫자형 전환후 계산, 답은 -14
console.log(null + 1);
//null은 숫자형으로 전환시 0이다, 답은 1
console.log(undefined + 1);
//undefined의 연산결과는 항상 NAN이다, 답은 NAN
console.log(" \t \n" - 2);
// 문자열 공백이므로 0으로 변환 후 연산, 답은 -2