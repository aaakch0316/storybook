# 2주차 회고

## keyword study 기고
> dependency, devDependency, peerDependency
https://han-py.tistory.com/515

## css 선정
일단은 css-in-js 컨셉으로 어떤 css를 사용할지 고민을 했다. 기존에 `css module`만 사용해서 그런지 아무리 생각해도 `styled component`는 생긴게 마음에 안들어서 `emotion` 사용하려고 찾아봤다. `emotion`은 괜찮아 보이긴 하는데 설정이 많아서, `jss-react`를 사용하겠다 마음을 먹었다. 그러다 그냥 결국엔 `emotion`가 사용 점유가 높은 이유가 있지 싶어 도전해 보기로 했다.
+ 찾아보니 css를 따로 모아두는 것 같긴한데, 현재는 배제한다.

##### emotion 장점
- 배포 시 css-loader 설정 필요 없음
- `styled component`에 비해 파일 사이즈가 작음
- 추후 ssr에서도 설정 없이 사용가능
- npm 등록 시 다운 받는 프로젝트에 원하는 emotion을 받을 수 있게 peerDependency 설정



## 좋은 컴포넌트란?
##### 기존
> 지금까지는 기본적으로 그냥 복사해서 붙여넣기가 가능하면, 좋은 컴포넌트라고 생각을 했다. 그래서 가능하면, 컴포넌트 별로 독립적으로 구성하려고 노력을 했던 것 같다.

##### 변화
- 주어진 resource에 최적화된 컴포넌트를 만드는 것이 좋아 보인다. 아직은 좀 더 만들어 봐야 알 것 같다.

## 구현 목표
> 욕심부리지 않고, 아래와 같이 `size`, `variant`를 우선적으로 적용한다. 시간이 된다면, color 토큰 까지 적용한다. **(실패)**

## 어려웠던점
- yarn/typescript/emotion/webpack/babel 처음 써봄 => 셋팅이 안된다.
- 아직도 `packages/components/button.tsx`에 emotion 적용이 아직도 안된다. 
- 위의 문제로, 각 컴포넌트 마다 package.json react에서 각각 emotion 적용을 하려고 생각했으나, 모노래포에 특성에 맞게 공통으로 사용하고 싶은 고집으로 아직도 방황중...
ㅜㅜ

## 고충
- 오늘 월차쓰고 했는데도 모르는게 너무 많음을 느낌
- 점심시간마다 노트북 들고 사라져서 회사에서 이직하는줄 암.

## 구현 상황
> 아직도 셋팅중
회사 였으면 주어진거 못하면 짤리는데, 그래도 주어진 숙제에 맞게 돌아가게 만드는게 맞는것인가? 제 공부 속도에 맞게 진행을 하는게 좋은것인가에 대한 고민과 현태가 옴.


## [차주] 
## 컴포넌트 구조 변경
```
// 현재
packages/components/*.tsx
packages/components/*.stories.tsx

// 다음주
packages/components/button/src/*.tsx
packages/components/button/stories/*.stories.tsx
```