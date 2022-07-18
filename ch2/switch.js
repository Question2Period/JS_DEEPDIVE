//switch문 if문으로 변환

let browser;
if (browser = 'Edge') {
    alert("Edge를 사용하고 계시네요!");
    
}
else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
}
else {
    alert('현재 페이지가 괜찮아 보이길 바랍니다!');
}

//if문을 switch문으로 변환
let a = +prompt('a?', ''); // +이므로 숫자형

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}