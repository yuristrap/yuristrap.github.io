---
slug: "/components/badge"
title: "배지"
---

# 배지 (badge)

## 배지 예시
배지는 상대적인 글꼴 크기 및 ```em``` 단위를 사용하여 바로 상위 요소의 크기와 일치하도록 크기를 조정합니다.
<div class="card">
<div class="card-body">
<h1>Example heading <span class="badge badge-primary">New</span></h1>
<h2>Example heading <span class="badge badge-primary">New</span></h2>
<h3>Example heading <span class="badge badge-primary">New</span></h3>
<h4>Example heading <span class="badge badge-primary">New</span></h4>
<h5>Example heading <span class="badge badge-primary">New</span></h5>
<h6>Example heading <span class="badge badge-primary">New</span></h6>
</div>

```html
<h1>Example heading <span class="badge badge-primary">New</span></h1>
<h2>Example heading <span class="badge badge-primary">New</span></h2>
<h3>Example heading <span class="badge badge-primary">New</span></h3>
<h4>Example heading <span class="badge badge-primary">New</span></h4>
<h5>Example heading <span class="badge badge-primary">New</span></h5>
<h6>Example heading <span class="badge badge-primary">New</span></h6>
```
</div>

## 기본 배지
8가지 색으로 기본 배지를 사용할 수 있습니다.
<div class="card">
<div class="card-body">
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>
<span class="badge badge-brown">Brown</span>
</div>

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>
<span class="badge badge-brown">Brown</span>
```
</div>

## 둥근 배지
```.badge-pill``` 클래스를 사용하여 배지를 더 둥글게 만듭니다. (더 큰 테두리 반경과 추가 수평 패딩 사용)
<div class="card">
<div class="card-body">
<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-danger">Danger</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-light">Light</span>
<span class="badge badge-pill badge-dark">Dark</span>
<span class="badge badge-pill badge-brown">Brown</span>
</div>

```html
<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-danger">Danger</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-light">Light</span>
<span class="badge badge-pill badge-dark">Dark</span>
<span class="badge badge-pill badge-brown">Brown</span>
```
</div>


## 버튼의 배지
배지는 카운터를 제공하는 버튼 일부로 사용할 수 있습니다.
<div class="card">
<div class="card-body">
<button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-light">4</span>
</button>
</div>

```html
<button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-light">4</span>
</button>
```
</div>
