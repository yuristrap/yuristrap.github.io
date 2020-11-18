---
version: "v1.0"
slug: "/components/checkbox"
title: "체크박스"
---

# 체크박스
특정 상태를 요구 하거나 항목을 선택하게끔 할 때 체크박스를 사용합니다.

## 체크 박스 (Check box)
체크 박스는 목록에서 하나 또는 여러 옵션을 선택하기위한 것입니다.
<div class="card">
<div class="card-body">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked>
  <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
  <label class="form-check-label" for="defaultCheck2">Second checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" disabled>
  <label class="form-check-label">Disabled checkbox</label>
</div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
  <label class="form-check-label" for="defaultCheck2">Second checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" disabled>
  <label class="form-check-label">Disabled checkbox</label>
</div>
```
</div>


## 라벨 작업
기본적으로 체크 박스와 단일 선택(Radio) 세로로 쌓이고 ```.form-check```로 적절한 간격으로 배치됩니다.

`.worked-with` 클래스를 라벨에 적용할때, 체크박스를 선택시 선택되었다는 표시를 함께 적용합니다.

<div class="card">
<div class="card-body">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheckWithLabel1" checked>
  <label class="form-check-label worked-with" for="defaultCheckWithLabel1">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheckWithLabel2">
  <label class="form-check-label worked-with" for="defaultCheckWithLabel2">Second checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" disabled>
  <label class="form-check-label">Disabled checkbox</label>
</div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheckWithLabel1">
  <label class="form-check-label worked-with" for="defaultCheckWithLabel1">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheckWithLabel2">
  <label class="form-check-label worked-with" for="defaultCheckWithLabel2">Second checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" disabled>
  <label class="form-check-label">Disabled checkbox</label>
</div>
```
</div>


## 단일 선택(Radio)
Radio는 여러 옵션 중에서 하나를 선택하기위한 것입니다.
<div class="card">
<div class="card-body">
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">Default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">Second default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios"value="option3" disabled>
  <label class="form-check-label">Disabled radio</label>
</div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">Default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">Second default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios"value="option3" disabled>
  <label class="form-check-label">Disabled radio</label>
</div>
```

<div class="card-body">
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadiosWithLabel" id="exampleRadiosWithLabel1" value="option1" checked>
  <label class="form-check-label worked-with" for="exampleRadiosWithLabel1">Default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadiosWithLabel" id="exampleRadiosWithLabel2" value="option2">
  <label class="form-check-label worked-with" for="exampleRadiosWithLabel2">Second default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadiosWithLabel" value="option3" disabled>
  <label class="form-check-label">Disabled radio</label>
</div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadiosWithLabel" id="exampleRadiosWithLabel1" value="option1" checked>
  <label class="form-check-label worked-with" for="exampleRadiosWithLabel1">Default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadiosWithLabel" id="exampleRadiosWithLabel2" value="option2">
  <label class="form-check-label worked-with" for="exampleRadiosWithLabel2">Second default radio</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadiosWithLabel" value="option3" disabled>
  <label class="form-check-label">Disabled radio</label>
</div>
```
</div>


## 체크박스 그룹화
```.form-check```에 ```.form-check-inline을``` 추가하여 동일한 가로 행에 있는 체크박스 또는 Radio를 그룹화합니다.
<div class="card">
<div class="card-body">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
</div>

```html
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
```
</div>


## 스위치

<div class="card">
<div class="card-body">
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch1">
	<label class="form-switch-label" for="colorSwitch1">Switch</label>
	Primary Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch2">
	<label class="form-switch-label success" for="colorSwitch2">Switch</label>
	Success Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch3">
	<label class="form-switch-label warning" for="colorSwitch3">Switch</label>
	Warning Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch4">
	<label class="form-switch-label danger" for="colorSwitch4">Switch</label>
	Danger Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch5">
	<label class="form-switch-label info" for="colorSwitch5">Switch</label>
	Info Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch6">
	<label class="form-switch-label brown" for="colorSwitch6">Switch</label>
	Brown Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch7">
	<label class="form-switch-label dark" for="colorSwitch7">Switch</label>
	Dark Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch8">
	<label class="form-switch-label light" for="colorSwitch8">Switch</label>
	Light Switch
</div>
</div>

```html
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch1">
	<label class="form-switch-label" for="colorSwitch1">Switch</label>
	Primary Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch2">
	<label class="form-switch-label success" for="colorSwitch2">Switch</label>
	Success Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch3">
	<label class="form-switch-label warning" for="colorSwitch3">Switch</label>
	Warning Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch4">
	<label class="form-switch-label danger" for="colorSwitch4">Switch</label>
	Danger Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch5">
	<label class="form-switch-label info" for="colorSwitch5">Switch</label>
	Info Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch6">
	<label class="form-switch-label brown" for="colorSwitch6">Switch</label>
	Brown Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch7">
	<label class="form-switch-label dark" for="colorSwitch7">Switch</label>
	Dark Switch
</div>
<div class="form-check form-check-inline">
	<input class="form-switch-input" type="checkbox" id="colorSwitch8">
	<label class="form-switch-label light" for="colorSwitch8">Switch</label>
	Light Switch
</div>
```


<div class="card-body">
<div class="form-check dsp-flex align-items-center mg-b-1">
	<input class="form-switch-input" type="checkbox" id="sizeSwitch1">
	<label class="form-switch-label brown mg-r-1" for="sizeSwitch1">Switch</label>
	Basic Size Switch
</div>
<div class="form-check dsp-flex align-items-center mg-b-1">
	<input class="form-switch-input" type="checkbox" id="sizeSwitch2">
	<label class="form-switch-label brown size-md mg-r-1" for="sizeSwitch2">Switch</label>
	MD Size Switch
</div>
<div class="form-check dsp-flex align-items-center">
	<input class="form-switch-input" type="checkbox" id="sizeSwitch3">
	<label class="form-switch-label brown size-lg mg-r-1" for="sizeSwitch3">Switch</label>
	LG Size Switch
</div>
</div>

```html
<div class="form-check dsp-flex align-items-center">
	<input class="form-switch-input" type="checkbox" id="sizeSwitch1">
	<label class="form-switch-label brown" for="sizeSwitch1">Switch</label>
	Basic Size Switch
</div>
<div class="form-check dsp-flex align-items-center">
	<input class="form-switch-input" type="checkbox" id="sizeSwitch2">
	<label class="form-switch-label brown size-md" for="sizeSwitch2">Switch</label>
	MD Size Switch
</div>
<div class="form-check dsp-flex align-items-center">
	<input class="form-switch-input" type="checkbox" id="sizeSwitch3">
	<label class="form-switch-label brown size-lg" for="sizeSwitch3">Switch</label>
	LG Size Switch
</div>
```
</div>



