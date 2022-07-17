# JS_DEEPDIVE

# 딥다이브 책 예제 실습 및 테스트

# 목표 : 하루 최대 5 챕터씩

<details><summary>2022-07-14</summary>
</br>
    2.8절까지 진행
</details>

<details><summary>2022-07-17</summary>
</br>
2.11절까지 진행

<h2>비교 연산자</h2>

```javascript
1. 5 > 4
2. "apple" > "pineapple"
3. "2" > "12"
4. undefined == null
5. undefined === null
6. null == "\n0\n"
7. null === +"\n0\n"
```

<div>
1. 명백히 true </br>
2. 문자열 비교시, 사전순으로 비교를 한다. 아스키코드상으로 a가 p보다 작으므로 false이다.</br>
3. 문자열 비교이므로 2가 1보다 크기때문에 true이다.</br>
4. 동등비교 연산자에서 undefined와 null은 동치이다.</br>
5. ===는 타입까지 완벽하게 일치하는지 확인하기 때문에 false이다.</br>
6. null은 undefined외에 그 어떤 값과도 동일하지 않다, false.</br>
7. 6번과 같은이유로, 타입이 다르므로 false.</br>
</div>

<h2>논리 연산자</h2>
</br>
or 비교시 모두 false라면 가장 마지막 값을 반환한다.
</br>
단락평가로 인해 true를 만난 이후의 조건들은 실행되지 않는다.
<br>

```javascript
true || alert("not printed");
```

</details>
