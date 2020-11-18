---
version: "v1.0"
slug: "/components/pagination"
title: "페이지네이션"
---

# 페이지네이션 (pagination)
떄론 너무 많은 내용을 나누기 위해 페이지네이션을 사용합니다. 페이지네이션을 통해 사용자에게 페이지 이동을 편리하게 합니다.

## 기본적인 페이지네이션
페이지네이션의 기본적인 틀입니다.

<div class="card">
<div class="card-body">
<nav>
  <ul class="pagination">
	<li class="page-item"><a class="page-link" href="#">Previous</a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item active"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>

```html
<nav>
  <ul class="pagination">
	<li class="page-item"><a class="page-link" href="#">Previous</a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item active"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```
</div>


## 테마 페이지네이션
페이지네이션에 테마값(primary)를 입히고자 한다면 `.primary` 클래스를 적용시킵니다.

<div class="card">
<div class="card-body">
<nav>
  <ul class="pagination primary">
	<li class="page-item"><a class="page-link" href="#">Previous</a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item active"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>

```html
<nav>
  <ul class="pagination primary">
	<li class="page-item"><a class="page-link" href="#">Previous</a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item active"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```
</div>


## 페이지 비활성화
없는 페이지거나 페이지를 일시적으로 비활성화 시키고자 한다면 `.disabled` 클래스를 사용하여 이동을 막습니다.

<div class="card">
<div class="card-body">
<nav>
  <ul class="pagination primary">
	<li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item active"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>

```html
<nav>
  <ul class="pagination primary">
	<li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item active"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```
</div>


## 둥근 페이지네이션
모서리가 둥근 border 값을 가진 페이지네이션을 만들고자 할 때 사용합니다.

<div class="card">
<div class="card-body">
<nav>
  <ul class="pagination rounded primary">
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&laquo;</span></a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
</nav>
</div>

```html
<nav>
  <ul class="pagination rounded primary ">
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&laquo;</span></a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
</nav>
```
</div>


## 버블 페이지네이션
원형 border 값을 가진 페이지네이션을 만들고자 할 때 사용합니다.

<div class="card">
<div class="card-body">
<nav>
  <ul class="pagination bubble primary">
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&laquo;</span></a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
</nav>
</div>

```html
<nav>
  <ul class="pagination bubble primary">
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&laquo;</span></a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
</nav>
```
</div>


## Justify Pagination
페이지네이션의 위치를 지정하고자 할 때 justify 속성을 이용하면 편리니다.

자세한 내용 > [flex - justify](/utilities/flex#justify)

<div class="card">
<div class="card-body">
<nav>
  <ul class="pagination justify-center">
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&laquo;</span></a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
</nav>
</div>

```html
<nav>
  <ul class="pagination justify-center">
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&laquo;</span></a></li>
	<li class="page-item"><a class="page-link" href="#">1</a></li>
	<li class="page-item"><a class="page-link" href="#">2</a></li>
	<li class="page-item"><a class="page-link" href="#">3</a></li>
	<li class="page-item"><a class="page-link" href="#"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
</nav>
```
</div>