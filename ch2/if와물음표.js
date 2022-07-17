//과제2
let a = prompt('자바스크립트의 "공식"이름은 무엇일까요?');

if (a == 'ECMAScript') {
    alert('정답입니다!');
}
else {
    alert('모르셨나요? 정답은 ECMAScript입니다!');
}

//과제 3

let ans = prompt('숫자를 입력해주세요', "");

if (ans > 0) alert(1);
else if (ans < 0) alert(-1);
else alert(0);

//과제 4

let result;

result = (a + b < 4) ? '미만' : '이상'; 

//과제 5

let message;

message = (login == '직원') ? '안녕하세요.' :
    (login == '임원') ? '환영합니다.' :
        (login == '') ? '로그인이 필요합니다.' :
            '';