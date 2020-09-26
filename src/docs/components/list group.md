---
slug: "/components/list group"
title: "list group"
---

# list group

## Active & Disabled items
<div class="card">
<div class="card-body">
<ul class="list-group">
	<li class="list-group-item ">Cras justo odio</li>
	<li class="list-group-item disabled">Dapibus ac facilisis in</li>
	<li class="list-group-item active">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item ">Cras justo odio</li>
	<li class="list-group-item disabled">Dapibus ac facilisis in</li>
	<li class="list-group-item active">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
```
</div>
</div>

## Links list
<div class="card">
<div class="card-body">
<div class="list-group">
	<a href="#" class="list-group-item list-group-item-action active">Cras justo odio</a>
	<a href="#" class="list-group-item list-group-item-action disabled">Dapibus ac facilisis in</a>
	<a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
	<a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
	<a href="#" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">Vestibulum at
	eros</a>
</div>

```html
<div class="list-group">
	<a href="#" class="list-group-item list-group-item-action active"> Cras justo odio</a>
	<a href="#" class="list-group-item list-group-item-action disabled">Dapibus ac facilisis in</a>
	<a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
	<a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
	<a href="#" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
</div>
```
</div>
</div>

## Button list
<div class="card">
<div class="card-body">
<div class="list-group">
	<button type="button" class="list-group-item list-group-item-action active">Cras justo odio</button>
	<button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
	<button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
	<button type="button" class="list-group-item list-group-item-action" disabled>Porta ac consectetur ac</button>
	<button type="button" class="list-group-item list-group-item-action">Vestibulum at eros</button>
</div>

```html
<div class="list-group">
	<button type="button" class="list-group-item list-group-item-action active">Cras justo odio</button>
	<button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
	<button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
	<button type="button" class="list-group-item list-group-item-action" disabled>Porta ac consectetur ac</button>
	<button type="button" class="list-group-item list-group-item-action">Vestibulum at eros</button>
</div>
```
</div>
</div>

## Flush
<div class="card">
<div class="card-body">
<ul class="list-group list-group-flush">
	<li class="list-group-item">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
</div>

```html
<ul class="list-group list-group-flush">
	<li class="list-group-item">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>
```
</div>
</div>

## Contextual classes
<div class="card">
<div class="card-body">
<ul class="list-group">
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item list-group-item-primary">This is a primary list group item</li>
	<li class="list-group-item list-group-item-success">This is a success list group item</li>
	<li class="list-group-item list-group-item-danger">This is a danger list group item</li>
	<li class="list-group-item list-group-item-warning">This is a warning list group item</li>
	<li class="list-group-item list-group-item-info">This is a info list group item</li>
	<li class="list-group-item list-group-item-light">This is a light list group item</li>
	<li class="list-group-item list-group-item-dark">This is a dark list group item</li>
</ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item list-group-item-primary">This is a primary list group item</li>
	<li class="list-group-item list-group-item-success">This is a success list group item</li>
	<li class="list-group-item list-group-item-danger">This is a danger list group item</li>
	<li class="list-group-item list-group-item-warning">This is a warning list group item</li>
	<li class="list-group-item list-group-item-info">This is a info list group item</li>
	<li class="list-group-item list-group-item-light">This is a light list group item</li>
	<li class="list-group-item list-group-item-dark">This is a dark list group item</li>
</ul>
```
<div class="card-body">
<div class="list-group">
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-success">This is a success list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-warning">This is a warning list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-info">This is a info list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-light">This is a light list group item</a>
	<a href="#" onclick="return false;" class="list-group-item list-group-item-action list-group-item-dark">This is a dark list group item</a>
</div>
</div>

```html
<div class="list-group">
	<a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-success">This is a success list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-warning">This is a warning list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-info">This is a info list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-light">This is a light list group item</a>
	<a href="#" class="list-group-item list-group-item-action list-group-item-dark">This is a dark list group item</a>
</div>
```
</div>
</div>

## With badges
<div class="card">
<div class="card-body">
<ul class="list-group">
	<li class="list-group-item d-flex justify-content-between align-items-center">Cras justo odio
	<span class="badge badge-primary badge-pill">14</span>
	</li>
	<li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in
	<span class="badge badge-primary badge-pill">2</span>
	</li>
	<li class="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus
	<span class="badge badge-primary badge-pill">1</span>
	</li>
</ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item d-flex justify-content-between align-items-center">Cras justo odio
		<span class="badge badge-primary badge-pill">14</span>
	</li>
	<li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in
		<span class="badge badge-primary badge-pill">2</span>
	</li>
	<li class="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus
		<span class="badge badge-primary badge-pill">1</span>
	</li>
</ul>
```
</div>
</div>