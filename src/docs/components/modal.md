---
slug: "/components/modal"
title: "modal"
---

# Modal


## Basic Modal
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
</div>


## Modal bg-disabled
Lock background click event. Use `bg-disabled` class on target.
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
</div>


## Modal Footer Align
Use `dsp-flex` and `justify-*`.
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
</div>


## Modal Center
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
</div>


## Modal Animation Speed
Control `data-speed` greater than or equal to 0.
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
</div>
