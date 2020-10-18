---
slug: "/components/form"
title: "form"
---

# 폼(Form)
다양한 폼(Form) 만들기 위한 스타일, 레이아웃 옵션 및 사용자 지정 구성 요소에 대한 예제 및 사용법 입니다.

## 체크 박스 (Check box)
체크 박스는 목록에서 하나 또는 여러 옵션을 선택하기위한 것입니다.
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
</div>

## 폼(Form) 그룹
<div class="card">
<div class="card-body">
<form>
<div class="form-group">
	<label for="exampleInputEmail1">Email address</label>
	<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
	<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
	<label for="exampleInputPassword1">Password</label>
	<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
</div>
<div class="form-check">
	<input type="checkbox" class="form-check-input" id="exampleCheck1">
	<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
	<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

```html
<form>
	<div class="form-group">
		<label for="exampleInputEmail1">Email address</label>
		<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
		<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	</div>
	<div class="form-group">
		<label for="exampleInputPassword1">Password</label>
		<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
	</div>
	<div class="form-check">
		<input type="checkbox" class="form-check-input" id="exampleCheck1">
		<label class="form-check-label" for="exampleCheck1">Check me out</label>
	</div>
	<button type="submit" class="btn btn-primary">Submit</button>
</form>

```
</div>
</div>

## Form controls
<div class="card">
<div class="card-body">
<form>
<div class="form-group">
	<label for="exampleFormControlInput1">Email address</label>
	<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="form-group">
	<label for="exampleFormControlSelect1">Example select</label>
	<select class="form-control" id="exampleFormControlSelect1">
		<option>1</option>
		<option>2</option>
		<option>3</option>
		<option>4</option>
		<option>5</option>
	</select>
</div>
<div class="form-group">
	<label for="exampleFormControlSelect2">Example multiple select</label>
	<select multiple class="form-control" id="exampleFormControlSelect2">
		<option>1</option>
		<option>2</option>
		<option>3</option>
		<option>4</option>
		<option>5</option>
	</select>
</div>
<div class="form-group">
	<label for="exampleFormControlTextarea1">Example textarea</label>
	<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</form>
</div>

```html
<form>
	<div class="form-group">
		<label for="exampleInputEmail1">Email address</label>
		<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
		<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	</div>
	<div class="form-group">
		<label for="exampleInputPassword1">Password</label>
		<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
	</div>
	<div class="form-check">
		<input type="checkbox" class="form-check-input" id="exampleCheck1">
		<label class="form-check-label" for="exampleCheck1">Check me out</label>
	</div>
	<button type="submit" class="btn btn-primary">Submit</button>
</form>
```
</div>
</div>

## Sizing
<div class="card">
<div class="card-body">
	<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
	<input class="form-control" type="text" placeholder="Default input">
	<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
</div>

```html
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
```
</div>
</br>

<div class="card">
<div class="card-body">
<select class="form-control form-control-lg">
	<option>Large select</option>
  </select>
<select class="form-control">
	<option>Default select</option>
</select>
<select class="form-control form-control-sm">
	<option>Small select</option>
</select>
</div>

```html
<select class="form-control form-control-lg">
	<option>Large select</option>
  </select>
  <select class="form-control">
	<option>Default select</option>
  </select>
  <select class="form-control form-control-sm">
	<option>Small select</option>
  </select>

```
 </div>

## Readonly
<div class="card">
<div class="card-body">
	<input class="form-control" type="text" placeholder="Readonly input here…" readonly>
</div>

```html
  <input class="form-control" type="text" placeholder="Readonly input here…" readonly>
```
</div>
</div>

## Readonly plain text
<div class="card">
<div class="card-body">
<form>
<div class="form-group row">
	<label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
<div class="col-sm-10">
	<input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
</div>
</div>
<div class="form-group row">
	<label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
<div class="col-sm-10">
	<input type="password" class="form-control" id="inputPassword" placeholder="Password">
</div>
</div>
</form>

```html
<form>
	<div class="form-group row">
		<label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
		<div class="col-sm-10">
			<input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
		</div>
	</div>
	<div class="form-group row">
		<label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
		<div class="col-sm-10">
			<input type="password" class="form-control" id="inputPassword" placeholder="Password">
		</div>
	</div>
</form>
```
</div>
</div>

## Form row
<div class="card">
<div class="card-body">
<form>
<div class="form-row">
<div class="form-group col-md-6">
	<label for="inputEmail4">Email</label>
	<input type="email" class="form-control" id="inputEmail4" placeholder="Email">
</div>
<div class="form-group col-md-6">
	<label for="inputPassword4">Password</label>
	<input type="password" class="form-control" id="inputPassword4" placeholder="Password">
</div>
</div>
<div class="form-group">
	<label for="inputAddress">Address</label>
	<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
</div>
<div class="form-group">
	<label for="inputAddress2">Address 2</label>
	<input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
</div>
<div class="form-row">
<div class="form-group col-md-6">
	<label for="inputCity">City</label>
	<input type="text" class="form-control" id="inputCity">
</div>
<div class="form-group col-md-4">
	<label for="inputState">State</label>
	<select id="inputState" class="form-control">
	<option selected>Choose...</option>
	<option>...</option>
	</select>
</div>
 <div class="form-group col-md-2">
	<label for="inputZip">Zip</label>
	<input type="text" class="form-control" id="inputZip">
</div>
</div>
<div class="form-group">
<div class="form-check">
	<input class="form-check-input" type="checkbox" id="gridCheck">
	<label class="form-check-label" for="gridCheck">
	  Check me out
	</label>
</div>
</div>
	<button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>

```html
<form>
	<div class="form-row">
	  <div class="form-group col-md-6">
		<label for="inputEmail4">Email</label>
		<input type="email" class="form-control" id="inputEmail4" placeholder="Email">
	  </div>
	  <div class="form-group col-md-6">
		<label for="inputPassword4">Password</label>
		<input type="password" class="form-control" id="inputPassword4" placeholder="Password">
	  </div>
	</div>
	<div class="form-group">
	  <label for="inputAddress">Address</label>
	  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
	</div>
	<div class="form-group">
	  <label for="inputAddress2">Address 2</label>
	  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
	</div>
	<div class="form-row">
	  <div class="form-group col-md-6">
		<label for="inputCity">City</label>
		<input type="text" class="form-control" id="inputCity">
	  </div>
	  <div class="form-group col-md-4">
		<label for="inputState">State</label>
		<select id="inputState" class="form-control">
		  <option selected>Choose...</option>
		  <option>...</option>
		</select>
	  </div>
	  <div class="form-group col-md-2">
		<label for="inputZip">Zip</label>
		<input type="text" class="form-control" id="inputZip">
	  </div>
	</div>
	<div class="form-group">
	  <div class="form-check">
		<input class="form-check-input" type="checkbox" id="gridCheck">
		<label class="form-check-label" for="gridCheck">
		  Check me out
		</label>
	  </div>
	</div>
	<button type="submit" class="btn btn-primary">Sign in</button>
</form>
```
</div>
</div>

## Form row
<div class="card">
<div class="card-body">
<form>
<div class="form-group row">
	<label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
<div class="col-sm-10">
	<input type="email" class="form-control" id="inputEmail3" placeholder="Email">
</div>
</div>
<div class="form-group row">
	<label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
<div class="col-sm-10">
	<input type="password" class="form-control" id="inputPassword3" placeholder="Password">
</div>
</div>
<fieldset class="form-group">
<div class="row">
	<legend class="col-form-label col-sm-2">Radios</legend>
<div class="col-sm-10">
<div class="form-check">
	<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
	<label class="form-check-label" for="gridRadios1">
	First radio
	</label>
</div>
<div class="form-check">
	<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
	<label class="form-check-label" for="gridRadios2">
	Second radio
	</label>
</div>
<div class="form-check disabled">
	<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
	<label class="form-check-label" for="gridRadios3">
	Third disabled radio
	</label>
</div>
</div>
</div>
</fieldset>
<div class="form-group row">
<div class="col-sm-2">Checkbox</div>
<div class="col-sm-10">
<div class="form-check">
	<input class="form-check-input" type="checkbox" id="gridCheck1">
	<label class="form-check-label" for="gridCheck1">
			Example checkbox
	</label>
</div>
</div>
</div>
<div class="form-group row">
<div class="col-sm-10">
	<button type="submit" class="btn btn-primary">Sign in</button>
</div>
</div>
</form>
</div>

```html
<form>
	<div class="form-group row">
		<label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
		<div class="col-sm-10">
			<input type="email" class="form-control" id="inputEmail3" placeholder="Email">
		</div>
	</div>
	<div class="form-group row">
		<label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
		<div class="col-sm-10">
			<input type="password" class="form-control" id="inputPassword3" placeholder="Password">
		</div>
	</div>
	<fieldset class="form-group">
		<div class="row">
			<legend class="col-form-label col-sm-2">Radios</legend>
			<div class="col-sm-10">
				<div class="form-check">
					<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
					<label class="form-check-label" for="gridRadios1">
				 	 First radio
					</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
					<label class="form-check-label" for="gridRadios2">
					  Second radio
					</label>
				</div>
				<div class="form-check disabled">
					<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
					<label class="form-check-label" for="gridRadios3">
					  Third disabled radio
					</label>
				</div>
			</div>
		</div>
	</fieldset>
	<div class="form-group row">
		<div class="col-sm-2">Checkbox</div>
			<div class="col-sm-10">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" id="gridCheck1">
					<label class="form-check-label" for="gridCheck1">
					 Example checkbox
					</label>
				</div>
			</div>
		</div>
	<div class="form-group row">
		<div class="col-sm-10">
			<button type="submit" class="btn btn-primary">Sign in</button>
		</div>
	</div>
</form>
```

</div>
</div>

## Horizontal form label sizing
<div class="card">
<div class="card-body">
<form>
<div class="form-group row">
	<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
<div class="col-sm-10">
	<input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
</div>
</div>
<div class="form-group row">
	<label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
<div class="col-sm-10">
	<input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
</div>
</div>
<div class="form-group row">
<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
<div class="col-sm-10">
	<input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
</div>
</div>
</form>
</div>

```html
<form>
	<div class="form-group row">
		<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
		<div class="col-sm-10">
			<input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
		</div>
	</div>
	<div class="form-group row">
		<label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
		<div class="col-sm-10">
			<input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
		</div>
	</div>
	<div class="form-group row">
		<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
		<div class="col-sm-10">
			<input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
		</div>
	</div>
</form>
```
</div>
</div>