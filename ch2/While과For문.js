//for반복문을 이용해 짝수 출력

for (let i = 2; i <= 10; i+=2){
    alert(i);
}

//for문 while문 변환
let i = 0;
while (++i<3) {
    alert(`number ${i}!`);
}

// 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기

let ans = prompt('100보다 큰 수를 입력하세요', '');

while (ans <= 100 &&ans) { // ans와 end연산을 해줌으로써 null이 들어왔을때 무한반복을 막을수 있다.
    ans = prompt('100보다 큰 수를 입력하세요', '');
}

//소수 출력
let n = prompt("");

for (let i = 2; i <= n; i++){
    let cnt = 0;
    for (let j = 2; j * j <= n; j++){
        if (i % j == 0) cnt++;
    }
    if (cnt == 0) alert(i);
}