---
slug: "/components/form"
title: "form"
---

# Form


## CheckBox
<div class="card">
<div class="card-body">
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
</div>


## Label worked with
<div class="card">
<div class="card-body">
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
</div>


## Radio
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
</div>
</div>


## Radio worked with
<div class="card">
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
</div>


## Form-check-inline
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
</div>
