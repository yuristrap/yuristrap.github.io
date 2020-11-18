---
version: "v1.0"
slug: "/components/list group"
title: "리스트 그룹"
---

# 리스트 그룹 (list-group)

## 기본 예시
가장 기본적인 목록 그룹은 목록 항목과 적절한 클래스가있는 정렬되지 않은 목록입니다. 다음 옵션을 사용하거나 필요에 따라 고유 한 CSS를 사용하여 빌드하십시오.
<div class="card">
<div class="card-body">
<ul class="list-group">
	<li class="list-group-item">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item active">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
```
</div>

## 활성화된 목록
```.active```를 ```.list-group-item```에 추가하여 현재 활성 선택을 나타냅니다.
<div class="card">
<div class="card-body">
<ul class="list-group">
	<li class="list-group-item active">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item active">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
```
</div>

## 비활성화 목록
```.disabled```를 ```.list-group-item```에 추가하여 현재 비활성 선택을 나타냅니다.
<div class="card">
<div class="card-body">
<ul class="list-group">
	<li class="list-group-item disabled">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item disabled">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
```
</div>

## 링크 목록
```<a>``` 또는 ```<button>```을 사용하여 ```.list-group-item-action```을 추가하여 상호 작용 요소를 비활성화 및 활성 상태로 실행 가능한 목록 그룹 항목을 만듭니다.
<div class="card">
<div class="card-body">
<div class="list-group">
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action active">Cras justo odio</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action disabled">Dapibus ac facilisis in</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action">Morbi leo risus</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">Vestibulum at
	eros</a>
</div>
</div>

```html
<div class="list-group">
	<a href="#" class="list-group-item list-group-item-action active"> Cras justo odio</a>
	<a href="#" class="list-group-item list-group-item-action disabled">Dapibus ac facilisis in</a>
	<a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
	<a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
	<a href="#" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
</div>
```
</div>

## 버튼 목록
여기서는 ```.btn``` 클래스를 사용하지 마십시오.
```<button>```을 사용하면 ```.disabled``` 클래스 대신 ```disabled``` 속성을 사용할 수도 있습니다. ```<a>```는 ```disabled``` 속성을 지원하지 않습니다.
<div class="card">
<div class="card-body">
<div class="list-group">
	<button type="button" class="list-group-item list-group-item-action active">Cras justo odio</button>
	<button type="button" class="list-group-item list-group-item-action" disabled>Dapibus ac facilisis in</button>
	<button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
	<button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
	<button type="button" class="list-group-item list-group-item-action">Vestibulum at eros</button>
</div>
</div>

```html
<div class="list-group">
	<button type="button" class="list-group-item list-group-item-action active">Cras justo odio</button>
	<button type="button" class="list-group-item list-group-item-action" disabled>Dapibus ac facilisis in</button>
	<button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
	<button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
	<button type="button" class="list-group-item list-group-item-action">Vestibulum at eros</button>
</div>
```
</div>

## Flush
```.list-group-flush``` 를 추가하여 일부 테두리와 둥근 모서리를 제거하여 상위 컨테이너 (예 : ```.card```)에서 목록 그룹 항목을 가장자리에서 가장자리까지 렌더링합니다.
<div class="card">
<div class="card-body">
<ul class="list-group list-group-flush">
	<li class="list-group-item">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
</div>

```html
<ul class="list-group list-group-flush">
	<li class="list-group-item">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
```
</div>

## 상황별 클래스
상황별 클래스를 사용하여 배경 및 색상으로 목록 항목의 스타일을 지정합니다.
<div class="card">
<div class="card-body">
<ul class="list-group">
	<li class="list-group-item list-group-item-primary">This is a primary list group item</li>
	<li class="list-group-item list-group-item-success">This is a success list group item</li>
	<li class="list-group-item list-group-item-danger">This is a danger list group item</li>
	<li class="list-group-item list-group-item-warning">This is a warning list group item</li>
	<li class="list-group-item list-group-item-info">This is a info list group item</li>
	<li class="list-group-item list-group-item-light">This is a light list group item</li>
	<li class="list-group-item list-group-item-dark">This is a dark list group item</li>
</ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item list-group-item-primary">This is a primary list group item</li>
	<li class="list-group-item list-group-item-success">This is a success list group item</li>
	<li class="list-group-item list-group-item-danger">This is a danger list group item</li>
	<li class="list-group-item list-group-item-warning">This is a warning list group item</li>
	<li class="list-group-item list-group-item-info">This is a info list group item</li>
	<li class="list-group-item list-group-item-light">This is a light list group item</li>
	<li class="list-group-item list-group-item-dark">This is a dark list group item</li>
</ul>
```

<div class="card-body">
<div class="list-group">
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-success">This is a success list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-warning">This is a warning list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-info">This is a info list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-light">This is a light list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-dark">This is a dark list group item</a>
</div>
</div>

```html
<div class="list-group">
	<a href="#" class="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-success">This is a success list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-warning">This is a warning list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-info">This is a info list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-light">This is a light list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-dark">This is a dark list group item</a>
</div>
```
</div>

## 배지(Badges)포함
리스트 그룹 항목에 배지(Badge)를 추가하여 일부 유틸리티의 도움으로 읽지 않은 횟수, 활동 등을 표시합니다.
<div class="card">
<div class="card-body">
<ul class="list-group">
	<li class="list-group-item dsp-flex justify-between align-items-center">Cras justo odio
	<span class="badge badge-primary badge-pill">14</span>
	</li>
	<li class="list-group-item dsp-flex justify-between align-items-center">Dapibus ac facilisis in
	<span class="badge badge-primary badge-pill">2</span>
	</li>
	<li class="list-group-item dsp-flex justify-between align-items-center">Morbi leo risus
	<span class="badge badge-primary badge-pill">1</span>
	</li>
</ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item d-flex justify-content-between align-items-center">Cras justo odio
		<span class="badge badge-primary badge-pill">14</span>
	</li>
	<li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in
		<span class="badge badge-primary badge-pill">2</span>
	</li>
	<li class="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus
		<span class="badge badge-primary badge-pill">1</span>
	</li>
</ul>
```
</div>