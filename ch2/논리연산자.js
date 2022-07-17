alert(null || 2 || undefined); // 2
//or연산 중 true가 있다면 true인 구문,  하나도 없을 시 마지막 값 반환

alert(alert(1) || 2 || alert(3)); // alert(1) ? x, 1과 2 차례로 출력
// true인 값 반환 후 종료일줄 알았으나, alert는 반환값이 없는(undefined) 메서드이기 때문에 1출력 후 true인 2를 출력후 끝난다.

alert(1 && null && 2)// null
// false를 만나는 순간 그 값을 출력후 종료

alert(alert(1) && alert(2));// 둘다 undefined이므로 1출력 후 undefined출력. alert(2)까지 평가하지 않는다.

alert(null || 2 && 3 || 4); // 3출력.

//사이 범위 확인하기

let age;
if (age >= 14 && age <= 90) alert('확인');

//바깥 범위 확인하기
let age1;
if (age1 < 14 || age > 90) alert('확인');

//"if"에 대한 고찰
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert('third');

//로그인 구현하기
let 자격 = prompt('접근 아이디 입력바랍니다.', "");
if (자격 == "Admin") {
    let pw = prompt('비밀번호를 입력해주세요');
    if (pw == "TheMaster") {
        alert("환영합니다!");
    }
    else if (pw == "" || pw == undefined) {
        alert("취소되었습니다.");
    }
    else {
        alert("인증에 실패하였습니다.");
    }
}