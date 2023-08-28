# 비즈니스로직

##### 1. 페이지 로드시 ID 창에 Focus

> autofocus

- 대상 : Id input 창
- 시점 : 페이지 로드 시
- 이벤트 : Focus()

단순하게 input에 native 속성으로 autofocus를 페이지 로딩 시 가진다.

```javascript
const $id = document.getElementBVyId("id");
// 페이지(window) 로드시 니 window에 addEventListener를 붙인다.
window.addEventListener("load", () => $id.focus());
window.addEventListener("load", function () {
  $id.focus();
});
```

##### 2. 유효성 검사 로직

> focus out 시 실행
> 가입 버튼 시 모든 유효성

- ID : 5~20 자. 영문 소문자, 숫자. 특수기호(-, \_)만사용가능
- 비밀번호 : 8~16자, 영문 대소문자 숫자 가능
- 비밀번호 확인 : 비밀번호와 일치

대상 : input
이벤트 : focus out
핸들러 : 해당 필드 유효성 검사 / 모든 필드 유효성 검사

```javascript
// 2. 유효성 검사 로직 구현
const $pw = document.getElementById("pw");
const $pwMsg = document.getElementById("pw-msg");

const $pwCheck = document.getElementById("pw-check");
const $pwCheckMsg = document.getElementById("pw-check-msg");

const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidId: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
  invalidPw: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
  invalidPwCheck: "비밀번호가 일치하지 않습니다.",
};

// 3. 커스텀 에러 메시지
const checkRegex = (target) => {
  const { value, id } = target; // destructuring 구조분해할당
  // const value = target.value; const id = target.id
  if (value.length === 0) {
    return "required";
  } else {
    switch (id) {
      case "id":
        return ID_REGEX.test(value) ? true : "invalidId";
      case "pw":
        return PW_REGEX.test(value) ? true : "invalidPw";
      case "pw-check":
        return value === $pw.value ? true : "invalidPwCheck";
    }
  }
};

const checkValidation = (target, msgTarget) => {
  const isValid = checkRegex(target);
  if (isValid !== true) {
    target.classList.add("border-red-600");
    msgTarget.innerText = ERROR_MSG[isValid];
  } else {
    target.classList.remove("border-red-600");
    msgTarget.innerText = "";
  }
  return isValid;
};

$id.addEventListener("focusout", () => checkValidation($id, $idMsg));

$pw.addEventListener("focusout", () => checkValidation($pw, $pwMsg));

$pwCheck.addEventListener("focusout", () =>
  checkValidation($pwCheck, $pwCheckMsg)
);
```

##### 3. 커스텀 에러 메시지

##### 4. 모달창

##### 5. 폰트 사이즈

- 기본 폰트 사이즈 16px(크기 조절 기능 넣자)

# 참고자료

- HTML 시맨틱에대해 참고하자. 시멘틱하게 작성 하도록 하자.

##### DOM에 대한 이해

- DOM 소개: https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction
  - 문서객체모델 (HTML 문서를 객체로 표현)
  - 객체로 만드는 이유는 동적으로 javascript로 변경을 하기 위함이다.
- 렌더링 트리 생성, 레이아웃 및 페인트: https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction
  - DOM은 화면을 랜더하기 전에 HTML 문서를 parsing하여 만든다
- 객체 모델 생성: https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model?hl=ko
  - DOM 트리를 어떻게 만드는지는 위에서 확인하자.
  - HTML과 DOM은 1:1로 변환하지 않는다.
- Live DOM Viewer: https://software.hixie.ch/utilities/js/live-dom-viewer/#
  - DOM으로 변경하는 것을 볼 수 있다.
- 브라우저 환경과 다양한 명세서: https://ko.javascript.info/browser-environment
  - 크롬 개발자 도구에서 브라우저 환경으로 javascript를 할 수 있다.window / document 는 브라우져 JavaScript이다.
  - nodejs 환경은 terminal에서 테스트를 할 수 있다. global이라는 전혁 객체가 있다. (브라우저에는 global은 없고, globalThis라는 것이 존재)
  - window는 브라우저 창을 제어한다. (window.location 읋 하면, 주소가 나온다.) // window는 생략하여 적어요 된다. window.console.log 라고 우린 안적는다.
  - document는 브라우저에 떠있는 문서(DOM)을 제어하는 것이다.
- window: https://developer.mozilla.org/ko/docs/Web/API/Window
- document: https://developer.mozilla.org/ko/docs/Web/API/Window

##### 유효성 검사 로직 구현

정규 표현식: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions

- 만드는 방식은 2가지 : 정규식 리터럴로 반들기 / RegExp 생성자 만들기

regexr: https://regexr.com/

- 정규 표현식을 바로 작성하여 태스트 할 수 있는 페이지이다.

##### 입력 확인 모달 창

<dialog>: 대화 상자 요소: https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog
HTMLDialogElement: https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement
Window.alert(): https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
참 같은 값: https://developer.mozilla.org/ko/docs/Glossary/Truthy
폰트 사이즈 조절 버튼
CSS 값과 단위: https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Values_and_units
rem: https://developer.mozilla.org/ko/docs/Web/CSS/font-size#rems

Autofocus 구현

Ref와 DOM: https://ko.reactjs.org/docs/refs-and-the-dom.html (Ref 개념을 이해하기 위해 꼭 읽어보시는 것을 추천합니다!)
useEffect hook: https://ko.reactjs.org/docs/hooks-reference.html#useeffect
useRef hook: https://ko.reactjs.org/docs/hooks-reference.html#useref

# 추가 공부 개념

##### $id

> 달러 사인
> 이와같이 달러를 앞에 붙이는 이유는 DOM을 가져오는 변수라는 뜻으로, 관습적으로 붙이는 것이다.
