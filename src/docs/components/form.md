---
slug: "/components/form"
title: "폼"
---

# 폼 (Form)
다양한 폼(Form) 만들기 위한 스타일, 레이아웃 옵션 및 사용자 지정 구성 요소에 대한 예제 및 사용법 입니다.

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

## 폼(Form) 컨트롤
```<input>``` , ```<select>``` 및 ```<textarea>```와 같은 텍스트 양식 컨트롤은 ```.form-control``` 클래스로 스타일이 지정됩니다.
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

## 크기 조절(Sizing)
```.form-control-lg``` ```.form-control-sm```을 이용해 폼(form) 사이즈 조절을 할수 있습니다.
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

## 읽기 전용
입력 값의 수정을 방지하려면 ```<input>```에 ```readonly``` 속성을 추가합니다. 읽기 전용 입력은 비활성화 된 입력처럼 더 밝게 표시되지만 표준 커서는 유지됩니다.
<div class="card">
<div class="card-body">
	<input class="form-control" type="text" placeholder="Readonly input here…" readonly>
</div>

```html
  <input class="form-control" type="text" placeholder="Readonly input here…" readonly>
```
</div>

## 읽기 전용 일반 텍스트
```<input readonly>``` 요소를 일반 텍스트로 스타일링하려면 ```.form-control-plaintext``` 클래스를 사용하여 기본 양식 필드 스타일을 제거하고 올바른 여백과 패딩을 유지하십시오.
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
</div>

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

## 양식 배열(Form row)
```.row```를 ```.form-row```로 바꿀 수도 있습니다. 이는 기본 배열을 재정의하는 그리드 행의 변형으로 더 조밀한 레이아웃입니다.
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

## 수평 양식 라벨 크기
```.col-form-label-sm``` 또는 ```.col-form-label-lg```를 ```<label>``` 또는 ```<legend>```에 사용하여 사이즈를 조절할수 있습니다.
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
