//"else"는 필요할까?

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('보호자의 동의를 받으셨나요?');
  }
}
//else를 지우더라도 문제없이 작동. if문이 truthy하다면 true반환후 종료되고, falsely하다면 confirm을 실행하기 때문에
//else가 없어도 된다.

//?나 ||를 사용하여 함수 다시 작성하기
function checkAge(age) {
    return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?'); 
    //return (age > 18) || confirm('보호자의 동의를 받으셨나요?');

}

//min(a,b) 함수 만들기

function min(a, b) {
    return (a >= b) ? b : a; 
}

//pow(x,n) 함수 만들기

function pow(x, n) {
    if (n == 1) return x;
    x *= x;
    return pow(x, n - 1);
}