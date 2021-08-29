---
version: "v1.0"
slug: "/utilities/position"
title: "위치"
---

# 위치 (position)

<div class="card">

```css
.pos-static {
	position: static !important;
}
.pos-relative {
	position: relative !important;
}
.pos-absolute {
	position: absolute !important;
}
.pos-fixed {
	position: fixed !important;
}
.pos-sticky {
	position: -webkit-sticky !important;
	position: sticky !important;
}
```
</div>


## 위치 지정

<div class="card">

```css
.top-left {
	top: 0px !important;
	left: 0px !important;
}
.top-right {
	top: 0px !important;
	right: 0px !important;
}
.bottom-left {
	bottom: 0px !important;
	left: 0px !important;
}
.bottom-right {
	bottom: 0px !important;
	right: 0px !important;
}
```
</div>


## 고정 위치 지정

<div class="card">

```css
.fixed-top {
	position: fixed !important;
	top: 0px !important;
	z-index: $Z-fixed !important;
}
.fixed-bottom {
	position: fixed !important;
	bottom: 0px !important;
	z-index: $Z-fixed !important;
}
.fixed-100 {
	position: fixed !important;
	top: 0px !important;
	left: 0px !important;
	width: 100%;
	height: 100%;
}
```
</div>