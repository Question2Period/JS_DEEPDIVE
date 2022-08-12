console.log(score); // 선언은 되어있으므로 undefined값 출력

var score;
score = 80;

console.log(score);//변수 값 할당은 런타임에 일어나므로 이제서야 변수의 80이 할당되어 있다.
// 이때 원래 undefined되어 있는 메모리 주소에 undefined를 지우고 80을 할당하는 것이 아닌
//새로운 메모리 공간을 확보하고 그곳에 80을 저장한다.
//이때 변수와의 연결이 해제된 undefined가 저장된 메모리 공간은 가비지 콜렉터(GC)에 의해서 자동 해제된다. 그 시점은 언젠지 모름