# DOM(Document Object Model)

- HTML 문서의 태그들을 객체로 생성하고 객체들의 관계에 따라 트리 구조로 구성한 객체
- document 객체는 window 객체의 하위 객체로 DOM 트리의 가장 최상위 객체
- HTML 태그를 노드라고 한다.

## 스크립트 선언 위치

1. 모든 태그들을 작성하고 body 태그 맨 마지막에 자바스크립트를 실행하는 방법

```html
<body>
    <div></div>
    <script><script>
</body>
```

2. 문서 전체에 해당하는 document에 DOMContentLoaded 이벤트를 사용하는 방법

```js
document.addEventListener("DOMContentLoaded", function () {
  // 코드 작성
});
```

## 문서 객체 가져오기

### CSS 선택자를 이용한 검색

```js
document.querySelector("선택자");
document.querySelectorAll("선택자");
```

- querySelector : 지정된 CSS 선택자에 해당하는 첫번째 요소 반환
- querySelectorAll : 지정된 CSS 선택자에 해당하는 모든 요소 반환

## 문서 객체 조작하기

### textContent, innerHTML

- textContent : 문서 객체 내에 문자 그대로 넣는다.
- innerHTML : 문서 객체 내에 HTML 형식으로 넣는다.

```js
문서객체.textContent;
문서객체.innerHTML;
```

### setAttribute, getAttribute

- setAttribute : 문서 객체의 속성을 추가하거나 수정할 때
- getAttribute : 문서 객체의 속성을 가져올 때

```js
문서객체.setAttribute(속성이름, 값);
문서객체.getAttribute(속성이름);
```

### style 조작

- 문서 객체의 스타일을 조작할 때는 style로 접근할 수 있다.
- style 속성은 만약 background-color는
  backgroundColor처럼 - 기호 대신 캐멀 케이스(camelCase)로 사용해야 한다.

```js
문서객체.style.속성 = "값";
```

### classList

- 사실 스타일을 조작할 때는 style로 접근하는 방식보다
  미리 클래스에 스타일을 지정하고
  classList로 해당 클래스를 추가, 삭제로 조작하는 것을 추천!
- contains는 해당 클래스명 유무 체크
- 있다면 삭제, 없다면 추가를 알아서 해주는 toggle!

```js
문서객체.classList.add("클래스명");
문서객체.classList.remove("클래스명");
문서객체.classList.contains("클래스명");
문서객체.classList.toggle("클래스명");
```

## 문서 객체 추가하기

- createElement로 문서 객체 생성
- appendChild로 부모 객체에 자식 객체 추가

```js
const 자식객체 = document.createElement(문서객체이름);
부모객체.appendChild(자식객체);
```

## 문서 객체 삭제하기

- 부모 객체에서 자식 객체를 삭제할 수 있다.
- 만약 부모 객체에 접근해야 한다면 parentNode를 사용한다.

```js
부모객체(자식객체.parentNode).removeChild(자식객체);
```

# 이벤트 (Event)

-브라우저에서 사용자가 하는 모든 행위(마우스 클릭, 키보드 입력등)를 이벤트(Event)라고 한다.

## 이벤트 설정 방법

### 인라인 방식

- HTML태그에 이벤트 핸들러(함수)속성ㅇ

### 이벤트 핸들러 프로퍼티 방식

### addEventListner() 방식

- W3C에서 공식적으로 권장하는 이벤트 지정 방식
- 하나의 이벤트에 대해 여러개의 이벤트 핸들러를 등록할 수 있다.

```js
문서객체.addEventLisener(이벤트이름, 함수);
```

#### 이벤트 삭제

```js
문서객체.removeEventLisner(이벤트이름, 함수);
```

# 정규표현식(REGEX / REGEXP : Regular Expression)

- 특정패턴을 가진 문자열을 찾거나 또는 찾아서 변경(치환)할떄 사용하는 형식 언어

- 정규표현식을 이용하면 문자열에 대한 특정 패턴 조건 검사시 복잡한 조건을 제시할 필요 없이 간단하게 처리 가능

## 정규표현식 객체 생성

- 정규표현식 객체를 생성하기 위해서는 정규표현식 리터럴과 RegExp 생성자 함수를 사용한다.
- 리터럴을 사용하는것이 일반적이다.

```js
const regExp1 = new RegExp("패턴");
const regExp2 = /패턴/; //리터럴!
```

### RegExp 객체에서 제공하는 함수

- 정규식.test(문자열) : 문자열에서 정규식값과 일치하는 값이 있으면 true, 없으면 false를 리턴
- 정규식.exec(문자열) : 문자열에서 정규식값과 일치하는 값이 있으면 처음 매칭된 문자열 리턴, 없으면 null 리턴

### 문자열 객체에서 제공하는 함수

- 문자열.match(정규식) : 문자열에서 정규식값과 일치하는 값을 찾아서 리턴
- 문자열.search(정규식) : 문자열에서 정규식값과 일치하는 값의 시작인덱스값을 리턴 (만일 없다면 -1) -문자열.replace(정규식, 바꿀값): 문자열에서 정규식값과 일치하는 첫번째 부분을 바꿀값으로 변경해서 리턴
- 문자열.spilt(정규식): 정규식에 지정된 값을 구분자로 해서 쪼개진 값들이 담겨있는 배열 리턴

## 플래그 문자

```js
const regExp = /패턴/플래그;
```

- 정규표현식의 검색방식을 설정 하기 위해 사용한다.
- 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수있다.

1. i: 대소문자를 가리지 앟고 비교한다.
2. g: 전역으로 비교를 수행한다.
3. m: 여러줄의 검사를 수행한다.

## 메타문자

- 메타 문자를 이용해서 정규표현식으로 검색조건을 삼을 "특정패턴"을 제시가능
- 문자열이 해당 정규식으로 제시한 특정패턴에 만족하는지test()를 통해 검사 하거나, replace() 이용해서 치환 가능

### 반복 검색

- {m, n}은 앞선 패턴이 최소 m번 쵀대 n번 반복되는 문자열을 의미한다

- - : 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미{1, }

- ? : 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미{0, 1}

### 문자열의 앞, 뒤 구분

- ^ : 문자열의 시작을 의미
- $ : 문자열의 마지막을 의미

### OR 검색

- [] : [] 내에 문자들 중 하나라도 존재할 경우를 의미

### 임의의 문자열 검색

- . : 임의의 문자 한 개를 의미하고, 문자내용은 무엇이든 상관없다.

### 추가 메타 문자

- \d : 숫자를 의미
- \D : 숫자가 아닌 문자를 의미
- \w : 알파벳, 숫자, 언더 스코어(\_)를 의미
- \W : 알파벳, 숫자, 언더 스코어(\_)가 아닌 문자를 의미
- \s : 공백 문자를 의미 (띄어쓰기, 탭, 줄바꿈)
- \S : 공백문자가 아닌 문자를 의미
