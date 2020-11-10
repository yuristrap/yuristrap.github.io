---
slug: "/utilities/padding"
title: "패딩"
---

# 패딩 (padding)
클래스 입력을 통해 패딩값을 손쉽게 넣어줄 수 있습니다.

## 모든 padding
상하좌우 `rem` 값을 기준으로 패딩을 넣어줄 때 사용합니다.

기본적으로 0~10 까지 입력 가능합니다.

<div class="card">
<div class="card-body">
<div class="show-col pd-2">
pd-2
</div>
<div class="show-col pd-4">
pd-4
</div>
</div>

```html
<div class="pd-2"> pd-2 </div>
<div class="pd-4"> pd-4 </div>
```
</div>


## 상하, 좌우 padding
상하(위, 아래) 또는 좌우(왼쪽, 오른쪽) `rem` 값을 기준으로 패딩을 넣어줄 때 사용합니다.

기본적으로 0~10 까지 입력 가능합니다.

<div class="card">
<div class="card-body">
<div class="show-col pd-tb-2">pd-tb-2</div>
<div class="show-col pd-lr-4">pd-lr-4</div>
</div>

```html
<div class="pd-tb-2">pd-tb-2</div>
<div class="pd-lr-4">pd-lr-4</div>
```
</div>


## 상, 하, 좌, 우 padding
상, 하, 좌, 우 값을 각각 `rem` 값을 기준으로 패딩을 넣어줄 때 사용합니다.

기본적으로 0~10 까지 입력 가능합니다.

<div class="card">
<div class="card-body">
<div class="show-col pd-t-2">pd-t-2</div>
<div class="show-col pd-b-4">pd-b-4</div>
<div class="show-col pd-l-2">pd-l-2</div>
<div class="show-col pd-r-4">pd-r-4</div>
<div class="show-col pd-t-2 pd-l-2">pd-t-2 pd-l-2</div>
</div>

```html
<div class="pd-t-2">pd-t-2</div>
<div class="pd-b-4">pd-b-4</div>
<div class="pd-l-2">pd-l-2</div>
<div class="pd-r-4">pd-r-4</div>
<div class="pd-t-2 pd-l-2">pd-t-2 pd-l-2</div>
```
</div>

