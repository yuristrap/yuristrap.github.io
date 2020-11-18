---
version: "v1.0"
slug: "/components/progress"
title: "진행률 구성"
---

# 진행률 구성 (Progress)

## 기본 진행률 표시
진행률 구성 요소는 두 개의 HTML 요소, 너비를 설정하는 일부 CSS 및 몇 가지 속성으로 빌드됩니다. HTML5 ```<progress>``` 태그를 사용하지 않으므로 진행률 표시 줄을 쌓고 애니메이션을 적용하고 그 위에 텍스트 레이블을 배치 할 수 있습니다.

## How it works
* 진행률 표시 줄의 최대 값을 나타내는 래퍼로 ```.progress```를 사용합니다.
* 내부 ```.progress-bar```를 사용하여 지금까지의 진행 상황을 나타냅니다.
* ```.progress-bar```는 너비를 설정하기 위해 인라인 스타일, 유틸리티 클래스 또는 사용자 정의 CSS가 필요합니다.
* ```.progress-bar```에는 액세스 할 수 있도록 몇 가지 역할 및 aria 속성이 필요합니다. <br>
모두 합치면 다음 예시가 있습니다.

<div class="card">
<div class="card-body">
<div class="progress mg-b-1">
  <div class="progress-bar" role="progressbar"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar" role="progressbar" style="width: 25%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar" role="progressbar" style="width: 50%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar" role="progressbar" style="width: 75%"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%"></div>
</div>
</div>

```html
<div class="progress">
  <div class="progress-bar" role="progressbar"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%"></div>
</div>
```
</div>

## 줄무늬 진행률 표시
진행률 표시 줄의 배경색 위에 CSS 그라데이션을 통해 스트라이프를 적용하려면 ```.progress-bar-striped```를 ```.progress-bar```에 추가합니다.
<div class="card">
<div class="card-body">
<div class="progress mg-b-1">
<div class="progress-bar progress-striped">
</div>
</div>
<div class="progress mg-b-1">
<div class="progress-bar progress-striped" style="width: 25%">
</div>
</div>
<div class="progress mg-b-1">
<div class="progress-bar progress-striped" style="width: 50%">
</div>
</div>
<div class="progress mg-b-1">
<div class="progress-bar progress-striped" style="width: 75%">
</div>
</div>
<div class="progress">
<div class="progress-bar progress-striped" style="width: 100%">
</div>
</div>
</div>

```html
<div class="progress">
	<div class="progress-bar progress-striped"></div>
</div>
<div class="progress">
	<div class="progress-bar progress-striped" style="width: 25%"></div>
</div>
<div class="progress">
	<div class="progress-bar progress-striped" style="width: 50%"></div>
</div>
<div class="progress">
	<div class="progress-bar progress-striped" style="width: 75%"></div>
</div>
<div class="progress">
	<div class="progress-bar progress-striped" style="width: 100%"></div>
</div>
```
</div>

## 라벨(Labels)
```.progress-bar``` 내에 텍스트를 배치하여 진행률 표시 줄에 라벨을 추가합니다.
<div class="card">
<div class="card-body">
<div class="progress mg-b-1">
<div class="progress-bar" style="width: 60%;">
	60%
</div>
</div>
<div class="progress">
<div class="progress-bar progress-striped" style="width: 25%">
	25%
</div>
</div>
</div>

```html
<div class="progress">
	<div class="progress-bar" style="width: 60%;">
		60%
	</div>
</div>
<div class="progress">
	<div class="progress-bar progress-striped" style="width: 25%">
		25%
	</div>
</div>
```
</div>

## 진행률 표시 배경
백그라운드 유틸리티 클래스를 사용하여 개별 진행률 표시 줄의 모양을 변경합니다.
<div class="card">
<div class="card-body">
<div class="progress mg-b-1">
  <div class="progress-bar" role="progressbar" style="width: 20%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar success" role="progressbar" style="width: 35%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar warning" role="progressbar" style="width: 50%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar danger" role="progressbar" style="width: 70%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar info" role="progressbar" style="width: 90%"></div>
</div>
<div class="progress">
  <div class="progress-bar brown" role="progressbar" style="width: 100%"></div>
</div>
</div>

``` html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 20%"></div>
</div>
<div class="progress">
  <div class="progress-bar success" role="progressbar" style="width: 35%"></div>
</div>
<div class="progress">
  <div class="progress-bar warning" role="progressbar" style="width: 50%"></div>
</div>
<div class="progress">
  <div class="progress-bar danger" role="progressbar" style="width: 70%"></div>
</div>
<div class="progress">
  <div class="progress-bar info" role="progressbar" style="width: 90%"></div>
</div>
<div class="progress">
  <div class="progress-bar brown" role="progressbar" style="width: 100%"></div>
</div>
```
<div class="card-body">
<div class="progress mg-b-1">
  <div class="progress-bar progress-striped" role="progressbar" style="width: 15%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar progress-striped success" role="progressbar" style="width: 25%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar progress-striped warning" role="progressbar" style="width: 40%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar progress-striped danger" role="progressbar" style="width: 55%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar progress-striped info" role="progressbar" style="width: 70%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar progress-striped brown" role="progressbar" style="width: 85%"></div>
</div>
<div class="progress mg-b-1">
  <div class="progress-bar progress-striped primary" role="progressbar" style="width: 100%"></div>
</div>
</div>

```html
<div class="progress">
  <div class="progress-bar progress-striped" role="progressbar" style="width: 15%"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-striped success" role="progressbar" style="width: 25%"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-striped warning" role="progressbar" style="width: 40%"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-striped danger" role="progressbar" style="width: 55%"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-striped info" role="progressbar" style="width: 70%"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-striped brown" role="progressbar" style="width: 100%"></div>
</div>
```
</div>

## 진행률 표시 채우기
```.progress-filled``` 를 ```.progress```에 추가하여 진행률 표시를 채울수 있습니다.
<div class="card">
<div class="card-body">
<div class="progress progress-filled mg-b-1">
	<div class="progress-bar" style="width: 60%;"></div>
</div>
<div class="progress progress-filled ">
	<div class="progress-bar progress-striped" style="width: 60%;"></div>
</div>
</div>

```html
<div class="progress progress-filled ">
	<div class="progress-bar" style="width: 60%;"></div>
</div>
<div class="progress progress-filled ">
	<div class="progress-bar progress-striped" style="width: 60%;"></div>
</div>
```
</div>

## 진행률 표시 애니메이션
```.progress-bar```에  ```.progress-moved```를 추가하여 진행률 표시 애니메이션을 적용시킬 수 있습니다.
<div class="card">
<div class="card-body">
<div class="progress mg-b-1">
	<div class="progress-bar progress-moved" style="width: 60%;"></div>
</div>
<div class="progress">
	<div class="progress-bar progress-striped progress-striped-moved" style="width: 60%;"></div>
</div>
</div>

```html
<div class="progress">
	<div class="progress-bar progress-moved" style="width: 60%;"></div>
</div>
<div class="progress">
	<div class="progress-bar progress-striped progress-striped-moved" style="width: 60%;"></div>
</div>
```
</div>



