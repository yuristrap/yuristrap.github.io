---
slug: "/components/modal"
title: "모달"
---

# 모달 (modal)
화면에 새 레이어를 위에 두고 기존 레이어에 피해를 주지 않는 창을 띄울때 사용합니다.

## 기본 모달
기본적인 모달의 모습입니다.

클릭 이벤트가 있는 태그(button이나 a)에 `data-toggle="modal"` 값을 입력해 주고 `data-target=*` 을 통해 조절할 modal의 id를 지정해줍니다.


<div class="card">
<div class="card-body">
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal00">Basic Modal</button>
<div id="exampleModal00" class="modal" data-speed="200">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal00" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		Modal 1
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal00">Close</button>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal00">Agree</button>
	</div>
  </div>
</div>
</div>

```html
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal00">Basic Modal</button>
<div id="exampleModal00" class="modal" data-speed="200">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal00" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		Modal 1
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal00">Close</button>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal00">Agree</button>
	</div>
  </div>
</div>
```
</div>


## 배경 이벤트를 막은 모달
모달을 제외한 배경을 클릭하면 닫히는 이벤트를 막은 모달입니다.
오직 모달내에서 닫기 이벤트를 호출해야 닫힙니다.

닫기 이벤트는 `data-toggle="modal" data-target="*"` 와 같이 modal 호출 방식을 한번 더 선언해 주면 됩니다.

`bg-disabled` 클래스를 타겟에 적어 주면 사용됩니다.

<div class="card">
<div class="card-body">
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal01">Modal bg-disabled</button>
<div id="exampleModal01" class="modal bg-disabled" data-speed="200">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal01" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		<p>Disabled background event Modal 2</p>
	</div>
  </div>
</div>
</div>

```html
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal01">Modal bg-disabled</button>
<div id="exampleModal01" class="modal bg-disabled" data-speed="200">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal01" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		<p>Disabled background event Modal 2</p>
	</div>
  </div>
</div>
```
</div>


## 푸터 정렬한 모달
푸터 모달에 `flex` 속성과 `justify-*` 를 통해 다음과 같은 정렬이 가능합니다.

<div class="card">
<div class="card-body">
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal02">Modal Footer Align</button>
<div id="exampleModal02" class="modal">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal02" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		.modal-footer .dsp-flex .justify-end
	</div>
	<div class="modal-footer dsp-flex justify-end">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal02">Close</button>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal02">Agree</button>
	</div>
  </div>
</div>
</div>

```html
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal02">Modal Footer Align</button>
<div id="exampleModal02" class="modal">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal02" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		.modal-footer .dsp-flex .justify-end
	</div>
	<div class="modal-footer dsp-flex justify-end">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal02">Close</button>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal02">Agree</button>
	</div>
  </div>
</div>
```
</div>


## 가운데에 띄우기
기본적으로 모달은 화면 상단에 띄워지나 화면 중아에 띄울수도 있습니다.

`.modal-center`를 `.modal` 과 같이 사용하면 됩니다.

<div class="card">
<div class="card-body">
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal03">Modal Center</button>
<div id="exampleModal03" class="modal modal-center">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal03" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		Modal Center
	</div>
	<div class="modal-footer dsp-flex justify-end">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal03">Close</button>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal03">Agree</button>
	</div>
  </div>
</div>
</div>

```html
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal03">Modal Center</button>
<div id="exampleModal03" class="modal modal-center">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal03" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		Modal Center
	</div>
	<div class="modal-footer dsp-flex justify-end">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal03">Close</button>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal03">Agree</button>
	</div>
  </div>
</div>
```
</div>


## 애니메이션 속도 조절
`data-speed` 값을 조절하며 모달의 애니메이션 속도를 조절할 수 있습니다. 값은 0보다 크거나 같아야 합니다.

값이 0에 가까울 수록 모달의 등장 속도가 빨라집니다.

<div class="card">
<div class="card-body">
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal04">Modal Speed 1000</button>
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal05">Modal Speed 0</button>
<div id="exampleModal04" class="modal modal-center"  data-speed="1000">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal04" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		Modal Speed 1000
	</div>
	<div class="modal-footer dsp-flex justify-end">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal04">Close</button>
	</div>
  </div>
</div>
<div id="exampleModal05" class="modal modal-center" data-speed="0">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal05" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		Modal Speed 0
	</div>
	<div class="modal-footer dsp-flex justify-end">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal05">Close</button>
	</div>
  </div>
</div>
</div>

```html
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal04">Modal Speed 1000</button>
<button class="btn btn-brown" data-toggle="modal" data-target="#exampleModal05">Modal Speed 0</button>
<div id="exampleModal04" class="modal modal-center"  data-speed="1000">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal04" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		Modal Speed 1000
	</div>
	<div class="modal-footer dsp-flex justify-end">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal04">Close</button>
	</div>
  </div>
</div>
<div id="exampleModal05" class="modal modal-center" data-speed="0">
  <div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
		<button type="button" data-toggle="modal" data-target="#exampleModal05" class="close">
			<span>&times;</span>
		</button>
	</div>
	<div class="modal-body">
		Modal Speed 0
	</div>
	<div class="modal-footer dsp-flex justify-end">
		<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal05">Close</button>
	</div>
  </div>
</div>
```
</div>
