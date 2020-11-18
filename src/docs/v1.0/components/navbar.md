---
version: "v1.0"
slug: "/components/navbar"
title: "메뉴바"
---

# 메뉴바 (navbar)
메뉴 기능인 nav 의 확장된 컴포넌트 입니다.

## 기본 메뉴바
메뉴바의 기본이 되는 형태입니다.

<div class="card">
<div class="card-body">
<nav class="navbar">
	<a class="navbar-brand" href="#">Navbar</a>
	<ul class="navbar-nav">
	  <li class="nav-item active">
		<a class="nav-link" href="#">Home</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Features</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Pricing</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	  </li>
	</ul>
</nav>
</div>

```html
<nav class="navbar">
	<a class="navbar-brand" href="#">Navbar</a>
	<ul class="navbar-nav">
	  <li class="nav-item active">
		<a class="nav-link" href="#">Home</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Features</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Pricing</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	  </li>
	</ul>
</nav>
```
</div>


## 라이트 메뉴바
밝은 배경을 가진 메뉴바입니다.

나이트 모드를 사용시 배경 역시 어두운 배경을 가진 메뉴바로 변경됩니다.

<div class="card">
<div class="card-body">
<nav class="navbar navbar-light">
	<a class="navbar-brand" href="#">Navbar</a>
	<ul class="navbar-nav">
	  <li class="nav-item active">
		<a class="nav-link" href="#">Home</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Features</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Pricing</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	  </li>
	</ul>
</nav>
</div>

```html
<nav class="navbar navbar-light">
	<a class="navbar-brand" href="#">Navbar</a>
	<ul class="navbar-nav">
	  <li class="nav-item active">
		<a class="nav-link" href="#">Home</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Features</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Pricing</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	  </li>
	</ul>
</nav>
```
</div>


## 다크 메뉴바
어두운 배경을 가진 메뉴바입니다.

나이트 모드를 사용시 배경 역시 밝은 배경을 가진 메뉴바로 변경됩니다.

<div class="card">
<div class="card-body">
<nav class="navbar navbar-dark">
	<a class="navbar-brand" href="#">Navbar</a>
	<ul class="navbar-nav">
	  <li class="nav-item active">
		<a class="nav-link" href="#">Home</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Features</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Pricing</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	  </li>
	</ul>
</nav>
</div>

```html
<nav class="navbar navbar-dark">
	<a class="navbar-brand" href="#">Navbar</a>
	<ul class="navbar-nav">
	  <li class="nav-item active">
		<a class="nav-link" href="#">Home</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Features</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Pricing</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	  </li>
	</ul>
</nav>
```
</div>


## 테마 메뉴바
테마색(primary)을 가진 메뉴바가 들어갑니다.

기본적으로 폰트 색은 흰색으로 입혀지며 밝은 계열의 테마색으로 변경했을시 수동으로 변경해주셔야 됩니다.

테마 메뉴바의 배경색은 나이트모드에 상관없이 항상 유지됩니다.

<div class="card">
<div class="card-body">
<nav class="navbar navbar-primary">
	<a class="navbar-brand" href="#">Navbar</a>
	<ul class="navbar-nav">
	  <li class="nav-item active">
		<a class="nav-link" href="#">Home</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Features</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Pricing</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	  </li>
	</ul>
</nav>
</div>

```html
<nav class="navbar navbar-primary">
	<a class="navbar-brand" href="#">Navbar</a>
	<ul class="navbar-nav">
	  <li class="nav-item active">
		<a class="nav-link" href="#">Home</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Features</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#">Pricing</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	  </li>
	</ul>
</nav>
```
</div>


## 브랜드
메뉴바 내에서 브랜드를 나타낼때 사용합니다.

보통 `.navbar-nav` 에 비해 더 눈에 띄거나 크게 사용됩니다.

만약 이미지를 이용한 브랜드를 표시한다면 img태그에 `.navbar-brand-log`를 사용하면 좋습니다.

<div class="card">
<div class="card-body">
<nav class="navbar navbar-light">
	<a class="navbar-brand" href="#">
		<img src="https://avatars1.githubusercontent.com/u/68942934?s=200&v=4" width="50" height="50" class="navbar-brand-logo" alt="">
	</a>
	<ul class="navbar-nav">
	  <li class="nav-item active">
		<a class="nav-link" href="#">Home</a>
	  </li>
	</ul>
</nav>
</div>

```html
<nav class="navbar navbar-light">
	<a class="navbar-brand" href="#">
		<img src="https://avatars1.githubusercontent.com/u/68942934?s=200&v=4" width="50" height="50" class="navbar-brand-logo" alt="">
	</a>
	<ul class="navbar-nav">
	  <li class="nav-item active">
		<a class="nav-link" href="#">Home</a>
	  </li>
	</ul>
</nav>
```
</div>


## 항상 고정된 메뉴바

`.fixed-top` 또는 `.fixed-bottom` 을 이용해 디스플레이에서 항상 고정된 메뉴바를 사용합니다.

<div class="card">
<div class="card-body">
<nav class="navbar navbar-light">
  <a class="navbar-brand" href="#">Navbar</a>
</nav>
</div>

```html
<nav class="navbar navbar-light fixed-top">
  <a class="navbar-brand" href="#">Navbar</a>
</nav>
```
</div>


##  Navbar-Collapse

때론 좌측으로 정렬된 메뉴들 말고 다른 형태의 메뉴를 사용할 때가 있습니다.

`.navbar-collapse` 를 통해 고정된 메뉴의 형태를 무너뜨리고 자유로운 형태로 사용합니다.

`.navbar-collapse` 는 기본적으로 justify-content: space-between; 값을 가지고 있습니다.

<div class="card">
<div class="card-body">
<nav class="navbar">
  <a class="navbar-brand" href="#">Navbar</a>
	<div class="navbar-collapse">
		<ul class="navbar-nav">
		  <li class="nav-item active">
			<a class="nav-link" href="#">Home</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Features</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Pricing</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
		  </li>
		</ul>
		<p>Collapse Text</p>
	</div>
</nav>
</div>

```html
<nav class="navbar">
  <a class="navbar-brand" href="#">Navbar</a>
	<div class="navbar-collapse">
		<ul class="navbar-nav">
		  <li class="nav-item active">
			<a class="nav-link" href="#">Home</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Features</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Pricing</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
		  </li>
		</ul>
		<p>Collapse Text</p>
	</div>
</nav>
```
</div>


## 반응형 메뉴바
`.navbar` 옆에 `.navbar-**` 형태의 반응형 클래스를 추가해 줌으로서 반응형으로 변하는 메뉴바 속성을 지닙니다.

`data-target` 은 `collapse` 된 태그를 타겟으로 지정해줍니다.

반응형으로 인해 나타나는 버튼은 `data-toggle=collapse` 값을 무조건 가지고 있어야 됩니다. 이를 통해 반응형으로 인해 숨겨진 메뉴들이 나타납니다.

<div class="card">
<div class="card-body">
<nav class="navbar navbar-light navbar-md">
	<a class="navbar-brand" href="#">Navbar</a>
	<button class="navbar-toggler" type="button" data-target="#navbar-collapse-01" data-toggle="collapse">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbar-collapse-01">
		<ul class="navbar-nav">
		  <li class="nav-item active">
			<a class="nav-link" href="#">Home</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Features</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Pricing</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
		  </li>
		</ul>
	</div>
</nav>
</div>

```html
<nav class="navbar navbar-light navbar-md">
	<a class="navbar-brand" href="#">Navbar</a>
	<button class="navbar-toggler" type="button" data-target="#navbar-collapse-01">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="navbar-collapse" id="navbar-collapse-01">
		<ul class="navbar-nav">
		  <li class="nav-item active">
			<a class="nav-link" href="#">Home</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Features</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Pricing</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
		  </li>
		</ul>
	</div>
</nav>
```
</div>


## Nav Item 정렬

flex 속성의 `.justify-start`, `.justify-end`, `.justify-center`, `.justify-between`, `.justify-around` 을 이용해 다양한 정렬을 사용합니다.

자세한 내용 > [flex - justify](/utilities/flex#justify)

<div class="card">
<div class="card-body">
<nav class="navbar navbar-dark">
	<a class="navbar-brand" href="#">Navbar</a>
	<div class="navbar-collapse justify-center">
		<ul class="navbar-nav">
		  <li class="nav-item active">
			<a class="nav-link" href="#">Home</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Features</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Pricing</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
		  </li>
		</ul>
	</div>
</nav>
</div>

```html
<nav class="navbar navbar-dark">
	<a class="navbar-brand" href="#">Navbar</a>
	<div class="navbar-collapse justify-center">
		<ul class="navbar-nav">
		  <li class="nav-item active">
			<a class="nav-link" href="#">Home</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Features</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Pricing</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
		  </li>
		</ul>
	</div>
</nav>
```
</div>
