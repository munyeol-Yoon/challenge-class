# 리엑트의 주요 개념

## 1. 리엑트란?

### 소개

- 리엑트는 UI 제작을 도와주는 자바스크립트 라이브러리이다.
- 자바스크립트 라이브러리이기 때문에 cdn 등을 활용해 간단히 사용해 볼 수 있다.

<details>

<summary>
예시 코드
</summary>
<div markdown="1">

```

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>리액트 맛보기</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="app"></div>

    <script type="text/babel">
      const appEl = document.getElementById("app");
      const root = ReactDOM.createRoot(appEl);

      const Greeting = () => <h1>Hello World</h1>;

      root.render(<Greeting />);
    </script>

  </body>
</html>

```

</div>

</details>

### 왜 등장했나

전통적인 웹 개발에서 HTML, CSS, Javascript 는 각각 구조, 스타일, 동작을 담당하는 역할을 해왔다.

하지만 이 방식에서는 한계가 존재한다.

1. **유지보수의 어려움** : 웹 애플리케이션이 커질수록 HTML, CSS, JS 코드간의 상호작용이 복잡해지고 이를 유지보수하기가 어렵다.
2. **DOM 조작의 비효율성** : JS를 사용한 직접적인 DOM 조작은 성능 저하를 가져올 수 있다. DOM 은 웹 페이지 구조를 나타내므로, 자주 변경될 경우 브라우저의 렌더링 성능이 크게 저하될 수 있다.
3. **재사용성 부족** : 전통적인 방식에서는 코드의 재사용성이 낮고, 동일한 기능을 다른 부분에서 사용하기 위해 반복 작성해야 하는 경우가 많다.

위 한계를 반대로한다면 리엑트의 장점이 된다.

## 2. 리엑트를 사용한 웹 개발과 기존 웹 개발의 차이점

### MPA -> SPA

- 정통적인 웹 개발 방식은 MPA 를 제작하는 것이다.
- 리엑트를 사용한 웹 개발 방식은 SPA 이다.
  - SPA 는 한 번의 페이지 로드로 전체 웹 서비스에 필요한 모든 컨텐츠를 동적으로 렌더링하는 웹 애플리케이션 방식이다.
  - 사용자와의 상호작용에 따라 필요한 부분만 JS 를 통해 갱신한다. 그래서 전체 페이지를 새로 불러오는 대신, 필요한 데이터만 주고 받을 수 있다.
  - 이 방식은 빠른 페이지 반응성과 부드러운 사용자 경험을 제공한다.

### SSR -> CSR

- 전통적인 웹 개발 방식은 SSR 이다.
- 리엑트를 사용한 웹 개발 방식은 CSR 이다.
  - 이는 검색엔진에서의 단점이 있다.

## 3. 리엑트 프로젝트 만들기

### Create React App (CRA)

[Create React App](https://create-react-app.dev/docs/getting-started/)

```
npx create-react-app my-app
```

### Vite

[Vite](https://vitejs.dev/guide/)

```
npm create vite@latest
```

## 4. 리엑트 주요 개념

### 가상 DOM

[가상 DOM](https://ko.legacy.reactjs.org/docs/faq-internals.html)

- 가상 DOM 은 실제 DOM 을 흉내 낸 가상의 DOM 이다.
- 리엑트 같은 라이브러리는 가상 DOM 을 사용해 **실제 DOM 보다 빠르게 UI 변경사항을 관리**해준다.
- 가상 DOM 은 변경이 필요한 부분만 실제 DOM 에 반영해줘서, 페이지 전체를 새로 불러오는 것 보다 훨씬 효율적이다.
- 개발자 입장에서도 DOM 을 직접 다루는 대신 리엑트가 가상 DOM 을 이용해 필요한 부분만 자동으로 업데이트 해주니 훨씬 편리하게 그리고 높은 생산성으로 서비스를 만들 수 있다.

### JSX

JSX 란?

- JSX 는 JS 를 확장한 문법으로, 리엑트에서 UI 구조를 표현하는데 사용된다.
- HTML 태그와 유사하게 생겼지만, _실제로는 JS 의 확장이다_. 절대 혼돈하면 안된다.

```
HTML 태그 <h1>과 JSX <h1>은 완전히 다르다!
```

- JSX 는 리엑트 라이브러리의 **createElement** 함수 호출을 보다 직관적으로 표현해주는 문법적 편의를 제공하는데 불과하다.

특징

1. **HTML 과 유사한 문법**

- JSX 는 HTML 태그와 비슷하게 생겼기 때문에, 웹 개발자에게 친숙하고 읽기 쉽다.

2. **JS 와의 결함**

- JSX 내에서 JS 표현식을 중괄호 {} 로 묶어 사용할 수 있다.
- 이를 통해 데이터 바인딩이나 반복문 처리 등이 가능하다.

```
function App() {
  const name = "yeon"

  return <div>Hello! My name is {name}.</div>
}
```

3. 컴포넌트 기반

- 리엑트의 컴포넌트를 JSX 를 사용해 리엑트의 엘리먼트로 만들 수 있다.
- 이를 통해 UI를 구조화하고 재사용할 수 있다.

JSX 사용 예시

```

function SomeComponent() {
  return <h1>{3 + 5}</h1>
}

const someElement = <SomeComponent />

function AnotherComponent() {
  return (
    <div>
      <SomeComponent />
      <SomeComponent />
    </div>
  )
}

```

4. JSX 의 장점

- 읽기 쉽고 작성하기 편히하다. UI 코드가 시각적으로 이해하기 쉬워, 개발 효율성이 높아진다.
- 컴포넌트 구조 명확화. 컴포넌트의 구조를 한 눈에 파악하기 쉬워, 프로젝트의 유지보수성이 향상된다.

5. JSX 사용시 주의사항

- 브라우저는 JS의 확장자인 JSX는 읽지 못하고 JS 만 읽을 수 있다.
- 따라서 트랜스파일러(Babel 등)를 사용해 JSX 를 일반 JS 로 변환해 웹 브라우저에 보내주어야 한다.

## 5. React Component vs React Element

1. 리엑트 컴포넌트

- 리엑트 컴포넌트는 UI 의 한 부분을 캡슐화한 코드 블럭이다.
- 과거에는 클래스를 사용해 컴포넌트를 만들었지만 이제는 함수로 만드는 것이 일반적이다.

```
function Greeting() {
  return <div>Hello World</div>
}
```

2. 리엑트 엘리먼트

- 리엑트 엘리먼트는 컴포넌트의 인스턴스로, 화면에 표시할 내용을 기술한 객체이다.
- JSX 문법을 사용해 생성할 수 있다.

```
<Greeting />
```

## 6. State

[State](https://react.dev/learn/state-a-components-memory)

- State 는 리엑트 컴포넌트 내부의 동적인 데이터를 관리하는 데 사용되는 데이터 구조이다.
- 일반적으로 시간에 따라 변하는 값이나 사용자의 상호작용 또는 네트워크 응답 등에 의해 변경되는 값을 State 로 관리한다.
- State 가 바뀌면 컴포넌트는 리렌더링 된다.
- 리렌더링이 된다는 것은 함수가 재실행된다는 뜻이고, 그 결과 화면이 다시 그려지게 된다.
- 함수는 재실행되지만 상태값은 어딘가에 계속 기억이 되고 있다.

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>현재 카운트 : {count}</p>
      <button onClick={increment}>증가</button>
    </div>
  )
}
```

## 7. Props

- 부모 컴포넌트로 부터 자식 컴포넌트에 전달하는 데이터를 Props 라고 한다.
- 자식 컴포넌트 입장에서 Props 는 읽기 전용으로, 수정해서는 안된다.
- props 를 잘 사용하면 컴포넌트의 재사용성과 유연성이 크게 증가한다.
- 부모가 전달해주는 props 값이 바뀌면 자식 컴포넌트는 리렌더링 한다.

```
function Greeting(props) {
  return <h1>안녕하세요, {props.name}님!</h1>
}

function App() {
  const someName = "철수"
  return (
    <div>
      <Greeting name="지수" />
      <Greeting name={someName} />
    </div>
  )
}
```

## 8. 리렌더링의 조건 ⭐️

1. state 가 변경되면 컴포넌트는 리렌더링 된다.
2. 부모 컴포넌트로부터 전달 받는 props 의 값이 변경되면 컴포넌트는 리렌더링 된다.
3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트는 리렌더링 된다. 이의 대한 방안은 React.memo 이다.

## 9. 리엑트 컴포넌트 생명주기

![react-life-cycle-title](https://github.com/munyeol-Yoon/challenge-class/assets/50113066/10b4e84a-2767-4767-b454-c4ddd07ad4dc)

![react-life-cycle](https://github.com/munyeol-Yoon/challenge-class/assets/50113066/5cbe8322-5509-4e62-98b2-9d9101635747)
