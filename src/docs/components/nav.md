---
slug: "/components/nav"
title: "메뉴"
---

# 메뉴 (nav)
기본적인 메뉴 기능을 제작할때 사용합니다.

상단에 띄우는 메인 메뉴 같은 경우는 [navbar](/components/navbar) 가 권장됩니다.

## 기본 메뉴
메뉴의 기본적인 틀입니다.

<div class="card">
<div class="card-body">
<ul class="nav">
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
		<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
</div>

```html

<ul class="nav">
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
		<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
```
</div>


## 메뉴 정렬
메뉴를 정렬할때 `justify-*` 클래스를 통해 방식을 변경할 수 있습니다.

자세한 내용 > [flex - justify](/utilities/flex#justify)

<div class="card">
<div class="card-body">
<ul class="nav justify-center">
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
	<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
</div>

```html
<ul class="nav justify-center">
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
		<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
```
</div>


## 꽉찬 메뉴
부모의 width 를 기준으로 꽉찬 메뉴를 형성합니다.

<div class="card">
<div class="card-body">
<ul class="nav nav-fill">
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
		<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
</div>

```html
<ul class="nav nav-fill">
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
		<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
```
</div>


## None nav-item
`.nav-item` 형태를 사용하지 않아도 기본적인 메뉴 형태를 가집니다.

<div class="card">
<div class="card-body">
<ul class="nav nav-fill">
	<a class="nav-link" href="#">Home</a>
	<a class="nav-link" href="#">Features</a>
	<a class="nav-link" href="#">Pricing</a>
	<a class="nav-link disabled" href="#">Disabled</a>
</ul>
</div>

```html
<ul class="nav nav-fill">
	<a class="nav-link" href="#">Home</a>
	<a class="nav-link" href="#">Features</a>
	<a class="nav-link" href="#">Pricing</a>
	<a class="nav-link disabled" href="#">Disabled</a>
</ul>
```
</div>


## 칼럼 메뉴
가로로 된 메뉴만 있는것은 아닙니다. `.f-column` 을 통해서 칼럼 형태의 메뉴로 변경할 수 있습니다.

자세한 내용 > [flex - direction](/utilities/flex#direction)

<div class="card">
<div class="card-body">
<ul class="nav f-column">
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
		<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
</div>

```html
<ul class="nav f-column">
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
		<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
```
</div>


## 반응형 칼럼
칼럼 메뉴를 응용해서 반응형으로 된 메뉴도 만들 수 있습니다.

자세한 내용 > [flex - responsive-col](/utilities/flex#responsive-col)

<div class="card">
<div class="card-body">
<ul class="nav f-column-md">
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
		<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
</div>

```html
<ul class="nav f-column-md">
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
		<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
```
</div>
