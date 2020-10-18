---
slug: "/components/card"
title: "card"
---


# 카드
카드는 유연하고 확장 가능한 콘텐츠 컨테이너입니다. 여기에는 머리글 및 바닥 글 옵션, 다양한 콘텐츠, 상황별 배경색 및 강력한 표시 옵션이 포함됩니다.

## 예시
다음은 콘텐츠가 혼합되어 있고 너비가 고정된 기본 카드의 예입니다. 카드는 시작하는 데 고정된 너비가 없으므로 자연스럽게 상위 요소의 전체 너비를 채웁니다. 다양한 크기 조정 옵션으로 쉽게 사용자 정의 할 수 있습니다.
<div class="card">
<div class="card-body">
	<div class="card" style="width: 20rem;">
	  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/181029_IZ%2AONE_Yuri_01.png" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">Card title</h5>
		<h6 class="card-subtitle">Card subtitle</h6>
		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		<a href="#" class="btn btn-primary">Go somewhere</a>
	  </div>
	</div>

</div>

```html
<div class="card" style="width: 20rem;">
	<img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/181029_IZ%2AONE_Yuri_01.png" class="card-img-top" alt="...">
	<div class="card-body">
		<h5 class="card-title">Card title</h5>
		<h6 class="card-subtitle">Card subtitle</h6>
		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		<a href="#" class="btn btn-primary">Go somewhere</a>
	</div>
</div>
```
</div>


## 카드의 구성 요소
카드의 구성 요소는 ```.card-body```입니다. 카드 내에 패딩 된 부분이 필요할 때마다 사용하십시오.
<div class="card">
<div class="card-body">
	<div class="card">
		<div class="card-body">
			Example Text
		</div>
	</div>

```html
<div class="card">
	<div class="card-body">
		Example Text
	</div>
</div>
```
</div>
</div>


## 카드 내용
카드 제목은 ```<h *>``` 태그에 ```.card-title```을 추가하여 사용됩니다. 같은 방식으로 ```<a>``` 태그에 ```.card-link```를 추가하여 링크를 추가하고 서로 옆에 배치합니다.

```<h *>``` 태그에 ```.card-subtitle```을 추가하여 자막을 사용합니다. ```.card-title``` 및 ```.card-subtitle``` 항목이 ```.card-body``` 항목에 배치되면 카드 제목과 자막이 정렬됩니다.
<div class="card">
<div class="card-body">
	<div class="card" style="width: 30rem;">
	  <div class="card-body">
		<h5 class="card-title">Card title</h5>
		<h6 class="card-subtitle">Card subtitle</h6>
		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		<a href="#" class="btn btn-primary">Go somewhere</a>
	  </div>
	</div>

```html
<div class="card" style="width: 30rem;">
  <div class="card-body">
	<h5 class="card-title">Card title</h5>
	<h6 class="card-subtitle">Card subtitle</h6>
	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	<a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```
</div>
</div>


## 카드 레이아웃
카드 내에 Herder / 또는 Footer 를 추가합니다.
<div class="card">
<div class="card-body">
	<div class="card">
	  <div class="card-header">
		Header
	  </div>
	  <div class="card-body">
		<h5 class="card-title">Special title treatment</h5>
		<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
		<a href="#" class="card-link">Card link</a>
		<a href="#" class="card-link">Another link</a>
	  </div>
	  <div class="card-footer">
		Footer
	  </div>
	</div>


```html
<div class="card">
  <div class="card-header">
	Header
  </div>
  <div class="card-body">
	<h5 class="card-title">Special title treatment</h5>
	<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
	<a href="#" class="card-link">Card link</a>
	<a href="#" class="card-link">Another link</a>
  </div>
  <div class="card-footer">
	Footer
  </div>
</div>
```
</div>
</div>

## 카드 헤더(Header) 이미지
<div class="card">
<div class="card-body">
	<div class="card" style="width: 20rem;">
	  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/181029_IZ%2AONE_Yuri_01.png" class="card-img-top" alt="...">
	  <div class="card-body">
		Some quick example text to build on the card title and make up the bulk of the card's content.
	  </div>
	</div>

```html
<div class="card" style="width: 20rem;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/181029_IZ%2AONE_Yuri_01.png" class="card-img-top" alt="...">
  <div class="card-body">
	Some quick example text to build on the card title and make up the bulk of the card's content.
  </div>
</div>
```
</div>
</div>
