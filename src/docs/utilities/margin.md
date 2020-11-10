---
slug: "/utilities/margin"
title: "마진"
---

# 마진 (margin)
클래스 입력을 통해 마진값을 손쉽게 넣어줄 수 있습니다.

## 모든 margin
상하좌우 `rem` 값을 기준으로 마진을 넣어줄 때 사용합니다.

기본적으로 0~10 까지 입력 가능합니다.

<div class="card">
<div class="card-body">
<div class="show-col mg-2">
mg-2
</div>
<div class="show-col mg-4">
mg-4
</div>
</div>

```html
<div class="mg-2"> mg-2 </div>
<div class="mg-4"> mg-4 </div>
```
</div>


## 상하, 좌우 margin
상하(위, 아래) 또는 좌우(왼쪽, 오른쪽) `rem` 값을 기준으로 마진을 넣어줄 때 사용합니다.

기본적으로 0~10 까지 입력 가능합니다.

<div class="card">
<div class="card-body">
<div class="show-col mg-tb-2">mg-tb-2</div>
<div class="show-col mg-lr-4">mg-lr-4</div>
</div>

```html
<div class="mg-tb-2">mg-tb-2</div>
<div class="mg-lr-4">mg-lr-4</div>
```
</div>


## 상, 하, 좌, 우 margin
상, 하, 좌, 우 값을 각각 `rem` 값을 기준으로 마진을 넣어줄 때 사용합니다.

기본적으로 0~10 까지 입력 가능합니다.

<div class="card">
<div class="card-body">
<div class="show-col mg-t-2">mg-t-2</div>
<div class="show-col mg-b-4">mg-b-4</div>
<div class="show-col mg-l-2">mg-l-2</div>
<div class="show-col mg-r-4">mg-r-4</div>
<div class="show-col mg-t-2 mg-l-2">mg-t-2 mg-l-2</div>
</div>

```html
<div class="mg-t-2">mg-t-2</div>
<div class="mg-b-4">mg-b-4</div>
<div class="mg-l-2">mg-l-2</div>
<div class="mg-r-4">mg-r-4</div>
<div class="mg-t-2 mg-l-2">mg-t-2 mg-l-2</div>
```
</div>

