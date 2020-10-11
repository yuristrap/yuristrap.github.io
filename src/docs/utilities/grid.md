---
slug: "/utilities/grid"
title: "그리드"
---

# 그리드

## 컨테이너
컨테이너는 여러 자식 요소들의 기준이 되는 부모 요소입니다.
컨테이너의 크기는 반응형으로 결정되며
모바일 환경에서는 좌우 방향으로 `1rem`크기의 빈 공간을 남겨둡니다.

### Container
일반적인 container 입니다.
최대 960px 의 넓이를 가지며 `992px` 미만의 윈도우 사이즈부터 반응형으로 변경됩니다.

<div class="card">
<div class="card-body">

```html
<body>
<div class="container">
	...
</div>
</body>
```
</div>
</div>

### Container-fluid
화면이 꽉차있는 container 입니다.
어느 환경에서든 항상 좌우 `1rem`의 빈 공간을 남겨둡니다.

<div class="card">
<div class="card-body">

```html
<body>
<div class="container-fluid">
	...
</div>
</body>
```
</div>
</div>

### Container-md
중간 사이즈의 container 입니다.
최대 736px 의 넓이를 가지며 `768px` 미만의 윈도우 사이즈부터 반응형으로 변경됩니다.

<div class="card">
<div class="card-body">

```html
<body>
<div class="container-md">
	...
</div>
</body>
```
</div>
</div>

### Container-sm
작은 사이즈의 container 입니다.
최대 544px 의 넓이를 가지며 `576px` 미만의 윈도우 사이즈부터 반응형으로 변경됩니다.

<div class="card">
<div class="card-body">

```html
<body>
<div class="container-sm">
	...
</div>
</body>
```
</div>
</div>

### Container-xl
큰 사이즈의 container 입니다.
최대 1168px 의 넓이를 가지며 `1200px` 미만의 윈도우 사이즈부터 반응형으로 변경됩니다.

<div class="card">
<div class="card-body">

```html
<body>
<div class="container-xl">
	...
</div>
</body>
```
</div>
</div>


## Auto Col
개수에 따라 자동으로 넓이가 변하는 Col 입니다.

<div class="card">
<div class="card-body">
<div class="row">
	<div class="col show-col">
		col
	</div>
	<div class="col show-col">
		col
	</div>
</div>

```html
<div class="row">
	<div class="col">
		col
	</div>
	<div class="col">
		col
	</div>
</div>
```
</div>
</div>


## Specifying Col
넓이를 지정해주는 Col 입니다. 기본적으로 `row`는 12등분 되어있으며 **1 ~ 12** 까지 지정 가능합니다.

<div class="card">
<div class="card-body">
<div class="row">
	<div class="col-3 show-col">
		col-3
	</div>
	<div class="col-9 show-col">
		col-9
	</div>
	<div class="col-6 show-col">
		col-6
	</div>
	<div class="col-6 show-col">
		col-6
	</div>
</div>

```html
<div class="row">
	<div class="col-3">
		col-3
	</div>
	<div class="col-9">
		col-9
	</div>
	<div class="col-6">
		col-6
	</div>
	<div class="col-6">
		col-6
	</div>
</div>
```
</div>
</div>


## Responsive Col
반응형으로 작동되는 Col입니다.

지정해준 윈도우 사이즈에 따라 요소의 넓이가 변경됩니다.

<div class="card">
<div class="card-body">
<div class="row">
	<div class="col-md-3 show-col">
		col-md-3
	</div>
	<div class="col-md-9 show-col">
		col-md-9
	</div>
	<div class="col-sm-4 show-col">
		col-sm-4
	</div>
	<div class="col-md-3 show-col">
		col-md-3
	</div>
	<div class="col-lg-5 show-col">
		col-lg-5
	</div>
</div>

```html
<div class="row">
	<div class="col-md-3">
		col-md-3
	</div>
	<div class="col-md-9">
		col-md-9
	</div>
	<div class="col-sm-4">
		col-sm-4
	</div>
	<div class="col-md-3">
		col-md-3
	</div>
	<div class="col-lg-5">
		col-lg-5
	</div>
</div>
```
</div>
</div>