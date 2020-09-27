---
slug: "/utilities/flex"
title: "flex"
---

# Flex

<div class="card">
<div class="card-body">

```css
.dsp-flex {
	display: flex;
}
```
</div>
</div>


## Flex Direction
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
<div class="card">
<div class="card-body">

```css
.f-fill {
	flex: 1 1 auto;
}
```
</div>
</div>


## Responsive row
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


## Responsive Col
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

```css
.justify-start {
	justify-content: flex-start !important;
}
.justify-end {
	justify-content: flex-end !important;
}
.justify-center {
	justify-content: center !important;
}
.justify-between {
	justify-content: space-between !important;
}
.justify-around {
	justify-content: space-around !important;
}
```
</div>
</div>


## Item-Align
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


## Content-Align
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


## Self-Align
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