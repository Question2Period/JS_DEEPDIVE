console.log(score);
var score;
//실행결과 error가 발생할 것으로 예상했으나, undefined출력

// 왜 why? 자바스크립트는 인터프리터 언어이므로 런타임에 한줄씩 읽어 실행하게 되는데, 
// 변수선언은 런타임 이전에 실행(소스코드 평가 과정)되기 때문에 이미 score가 선언되어 있어 그렇다.