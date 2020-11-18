---
version: "v1.0"
slug: "/components/notice-box"
title: "알림"
---


# 알림 박스 (notice-box)
짧은 메세지 같은 간단한 내용을 일정시간동안 화면 상단에 띄울때 사용합니다.

## 알림
알림을 띄울 버튼에 `data-toggle="notice"` 를 입력해주며, `.notice-box` 값을 가지고 있는 요소를 `data-target`에 id값을 입력해줍니다.

<div class="card">
<div class="card-body">
<button class="btn btn-brown" data-toggle="notice" data-target="#exampleNoticeBox00">Notice-Box</button>
<div class="notice-box" id="exampleNoticeBox00" data-speed="4000">
	This is Notice-Box
</div>
</div>

```html
<button class="btn btn-brown" data-toggle="notice" data-target="#exampleNoticeBox00">Notice-Box</button>
<div class="notice-box" id="exampleNoticeBox00" data-speed="4000">
	This is Notice-Box
</div>
```
</div>

## 애니메이션 속도 조정
`data-speed` 값을 변경함으로서 애니메이션 속도를 조정할수있습니다.
default 값은 4000, 즉 4초를 가지고 있습니다.

<div class="card">
<div class="card-body">
<button class="btn btn-brown" data-toggle="notice" data-target="#exampleNoticeBox01">Notice-Box 1000</button>
<div class="notice-box" id="exampleNoticeBox01" data-speed="1000">
	This is Notice-Box
</div>
</div>

```html
<button class="btn btn-brown" data-toggle="notice" data-target="#exampleNoticeBox01">Notice-Box 1000</button>
<div class="notice-box" id="exampleNoticeBox01" data-speed="1000">
	This is Notice-Box
</div>
```
</div>