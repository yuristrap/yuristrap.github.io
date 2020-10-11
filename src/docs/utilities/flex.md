---
slug: "/utilities/flex"
title: "플렉스"
---

# 플렉스

`display` 속성을 `flex`로 사용할때 사용합니다.

<div class="card">
<div class="card-body">

```css
.dsp-flex {
	display: flex;
}
```
</div>
</div>


## 플렉스 방향
<div class="card">
<div class="card-body">

```css
.f-column {
	flex-direction: column;
}
.f-row {
	flex-direction: row;
}
.f-column-reverse {
	flex-direction: column-reverse;
}
.f-row-reverse {
	flex-direction: row-reverse;
}
```
</div>
</div>


## Fill
`flex: 1 1 auto` 값이 입력 되어 있는 클래스입니다.

<div class="card">
<div class="card-body">

```css
.f-fill {
	flex: 1 1 auto;
}
```
</div>
</div>


## 반응형 row
반응형으로 flex 방향을 row로 바꿀때 사용합니다.

<div class="card">
<div class="card-body">

```css
.f-row-sm {	flex-direction: row; }
.f-row-md {	flex-direction: row; }
.f-row-lg {	flex-direction: row; }
.f-row-xl {	flex-direction: row; }
```
</div>
</div>


## 반응형 col
반응형으로 flex 방향을 col로 바꿀때 사용합니다.

<div class="card">
<div class="card-body">

```css
.f-column-sm { flex-direction: column; }
.f-column-md { flex-direction: column; }
.f-column-lg { flex-direction: column; }
.f-column-xl { flex-direction: column; }
```
</div>
</div>


## Justify
요소들의 수평 방향 정렬을 정할때 사용합니다.

<div class="card">
<div class="card-body">
<div class="dsp-flex justify-start ex-block h-50">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex justify-end ex-block h-50">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex justify-center ex-block h-50">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex justify-between ex-block h-50">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex justify-around ex-block h-50">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>

```html
<div class="dsp-flex justify-start">
	<div>item1</div><div>item2</div><div>item3</div>
</div>
<div class="dsp-flex justify-end">
	<div>item1</div><div>item2</div><div>item3</div>
</div>
<div class="dsp-flex justify-center">
	<div>item1</div><div>item2</div><div>item3</div>
</div>
<div class="dsp-flex justify-between">
	<div>item1</div><div>item2</div><div>item3</div>
</div>
<div class="dsp-flex justify-around">
	<div>item1</div><div>item2</div><div>item3</div>
</div>
```
</div>
</div>


## Item 정렬
수직방향 기준으로 요소들을 정렬할때 사용합니다.

<div class="card">
<div class="card-body">
<div class="dsp-flex align-items-stretch ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex align-items-center ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex align-items-start ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex align-items-end ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex align-items-baseline ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>

```html
<div class="dsp-flex align-items-stretch">
	items...
</div>
<div class="dsp-flex align-items-center">
	items...
</div>
<div class="dsp-flex align-items-start">
	items...
</div>
<div class="dsp-flex align-items-end">
	items...
</div>
<div class="dsp-flex align-items-baseline">
	items...
</div>
```
</div>
</div>


## Content 정렬
flex 라인을 정렬할때 사용합니다.

<div class="card">
<div class="card-body">
<div class="dsp-flex f-wrap align-content-stretch ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex f-wrap align-content-center ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex f-wrap align-content-start ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex f-wrap align-content-end ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex f-wrap align-content-space-around ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>

```html
<div class="dsp-flex f-wrap align-content-stretch">
	items...
</div>
<div class="dsp-flex f-wrap align-content-center">
	items...
</div>
<div class="dsp-flex f-wrap align-content-start">
	items...
</div>
<div class="dsp-flex f-wrap align-content-end">
	items...
</div>
<div class="dsp-flex f-wrap align-content-space-around">
	items...
</div>
```
</div>
</div>


## Self 정렬
flex 요소마다 서로 다른 정렬 방식을 입력할때 사용합니다.

<div class="card">
<div class="card-body">
<div class="dsp-flex ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="align-self-stretch ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="align-self-center ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="align-self-start ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="align-self-end ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>
<div class="dsp-flex ex-block h-75">
	<div class="ex-block-sm">item1</div><div class="align-self-baseline ex-block-sm">item2</div><div class="ex-block-sm">item3</div>
</div>

```html
<div class="dsp-flex">
	<div>item1</div><div class="align-self-stretch">item2</div><div>item3</div>
</div>
<div class="dsp-flex">
	<div>item1</div><div class="align-self-center">item2</div><div>item3</div>
</div>
<div class="dsp-flex">
	<div>item1</div><div class="align-self-start">item2</div><div>item3</div>
</div>
<div class="dsp-flex">
	<div>item1</div><div class="align-self-end">item2</div><div>item3</div>
</div>
<div class="dsp-flex">
	<div>item1</div><div class="align-self-baseline">item2</div><div>item3</div>
</div>
```
</div>
</div>