---
version: "v1.0"
slug: "/components/button"
title: "버튼"
---

# 버튼 (button)
유리 스트랩에는 사전 정의된 여러 버튼 스타일이 포함되어 있으며, 각 스타일은 고유한 의미를 제공하며 더 많은 제어를 위해 몇 가지 추가 기능이 제공됩니다.
<div class="card">
<div class="card-body">
<button type="button" class="btn btn-primary">primary</button>
<button type="button" class="btn btn-success">success</button>
<button type="button" class="btn btn-warning">warning</button>
<button type="button" class="btn btn-danger">danger</button>
<button type="button" class="btn btn-secondary">secondary</button>
<button type="button" class="btn btn-info">info</button>
<button type="button" class="btn btn-brown">brown</button>
<button type="button" class="btn btn-dark">dark</button>
<button type="button" class="btn btn-light">light</button>
</div>

```html
<button type="button" class="btn btn-primary">primary</button>
<button type="button" class="btn btn-success">success</button>
<button type="button" class="btn btn-warning">warning</button>
<button type="button" class="btn btn-danger">danger</button>
<button type="button" class="btn btn-secondary">secondary</button>
<button type="button" class="btn btn-info">info</button>
<button type="button" class="btn btn-brown">brown</button>
<button type="button" class="btn btn-dark">dark</button>
<button type="button" class="btn btn-light">light</button>
```
</div>

## a 버튼
.btn 클래스는 ```<button>``` 요소와 함께 사용하도록 설계되었습니다. 그러나 이러한 클래스는 ```<a>``` 또는 ```<input>``` 요소에서도 사용할 수 있습니다. (일부 브라우저에서는 약간 다른 렌더링을 적용될 수 있음).

현재 페이지 내의 새 페이지 또는 섹션에 연결할 때 사용되는 ```<a>``` 요소에 버튼 클래스를 사용하는 경우 ```<a>``` 태그 속성에 ```role = "button"```을 지정해야 합니다.

<div class="card">
<div class="card-body">
<a href="#" onclick="return false;" class="btn btn-success" role="button">success</a>
<a href="#" onclick="return false;" class="btn btn-warning" role="button">warning</a>
<a href="#" onclick="return false;" class="btn btn-danger" role="button">danger</a>
<a href="#" onclick="return false;" class="btn btn-secondary" role="button">secondary</a>
<a href="#" onclick="return false;" class="btn btn-info" role="button">info</a>
<a href="#" onclick="return false;" class="btn btn-brown" role="button">brown</a>
<a href="#" onclick="return false;" class="btn btn-dark" role="button">dark</a>
<a href="#" onclick="return false;" class="btn btn-light" role="button">light</a>
</div>

```html
<a href="#" class="btn" role="button">btn</a>
<a href="#" class="btn btn-success" role="button">success</a>
<a href="#" class="btn btn-warning" role="button">warning</a>
<a href="#" class="btn btn-danger" role="button">danger</a>
<a href="#" class="btn btn-secondary" role="button">secondary</a>
<a href="#" class="btn btn-info" role="button">info</a>
<a href="#" class="btn btn-brown" role="button">brown</a>
<a href="#" class="btn btn-dark" role="button">dark</a>
<a href="#" class="btn btn-light" role="button">light</a>
```
</div>

## 테두리 버튼
버튼이 필요하지만 기본 버튼이 가져 오는 배경색이 필요하지 않으면 기본 버튼 클래스를 ```.btn-outline- *``` 클래스로 대체하여 모든 버튼의 모든 배경 이미지와 색상을 제거합니다.
<div class="card">
<div class="card-body">
<button type="button" class="btn btn-outline-primary">primary</button>
<button type="button" class="btn btn-outline-success">success</button>
<button type="button" class="btn btn-outline-warning">warning</button>
<button type="button" class="btn btn-outline-danger">danger</button>
<button type="button" class="btn btn-outline-secondary">secondary</button>
<button type="button" class="btn btn-outline-info">info</button>
<button type="button" class="btn btn-outline-brown">brown</button>
<button type="button" class="btn btn-outline-dark">dark</button>
</div>

```html
<button type="button" class="btn btn-outline-primary">primary</button>
<button type="button" class="btn btn-outline-success">success</button>
<button type="button" class="btn btn-outline-warning">warning</button>
<button type="button" class="btn btn-outline-danger">danger</button>
<button type="button" class="btn btn-outline-secondary">secondary</button>
<button type="button" class="btn btn-outline-info">info</button>
<button type="button" class="btn btn-outline-brown">brown</button>
<button type="button" class="btn btn-outline-dark">dark</button>
```
</div>

## 버튼 사이즈
더 크거나 작은 버튼을 원하시면 ```.btn-lg``` 또는 ```.btn-sm```을 추가하십시오.
<div class="card">
<div class="card-body">
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-primary btn-lg">Large button</button>
</div>

```html
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-primary btn-lg">Large button</button>
```
</div>

## 블록 버튼
```.btn-block```을 추가하여 부모의 전체 너비에 걸쳐있는 블록 버튼을 만듭니다.
<div class="card">
<div class="card-body">
<button type="button" class="btn btn-primary btn-block">Block button</button>
</div>

```html
<button type="button" class="btn btn-primary btn-block">Block button</button>
```
</div>

## 버튼 잠그기
버튼을 이용하지 못하게 잠글때는 `.disabled` 클래스 혹은 `disabled` 속성을 이용합니다.

`.disabled` 클래스는 focus 에 잡히기 때문에 완전한 잠금을 이용할땐 속성을, 일시적인 잠금일때는 클래스 사용을 권장합니다.

<div class="card">
<div class="card-body">
<button type="button" class="btn btn-primary disabled">primary</button>
<button type="button" class="btn btn-success disabled">success</button>
<button type="button" class="btn btn-outline-primary disabled">primary</button>
<button type="button" class="btn btn-outline-success disabled">success</button>
<hr/>
<button type="button" class="btn btn-warning" disabled>warning</button>
<button type="button" class="btn btn-danger" disabled>danger</button>
<button type="button" class="btn btn-outline-warning" disabled>warning</button>
<button type="button" class="btn btn-outline-danger" disabled>danger</button>
</div>

```html
<button type="button" class="btn btn-primary disabled">primary</button>
<button type="button" class="btn btn-success disabled">success</button>
<button type="button" class="btn btn-outline-primary disabled">primary</button>
<button type="button" class="btn btn-outline-success disabled">success</button>
<hr/>
<button type="button" class="btn btn-warning" disabled>warning</button>
<button type="button" class="btn btn-danger" disabled>danger</button>
<button type="button" class="btn btn-outline-warning" disabled>warning</button>
<button type="button" class="btn btn-outline-danger" disabled>danger</button>
```
</div>