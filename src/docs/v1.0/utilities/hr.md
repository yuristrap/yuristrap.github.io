---
version: "v1.0"
slug: "/utilities/hr"
title: "줄선"
---

# hr 태그
`.hr-style`을 이용하고 `.left`, `.center`, `.right` 클래스를 추가해 텍스트 위치를 정할 수 있습니다.

style에 `--content:"(text)"` , `--text-color: (color)`, `--border-color: (color)` 옵션을 사용하여 텍스트, 텍스트 색, hr 라인 색을 꾸밀 수 있습니다. 

<div class="card">
<div class="card-body">
<hr class="hr-style left" style="--content:'yuri'; --text-color: #212529; --border-color: #B897FF;"/>
<hr class="hr-style center" style="--content:'</>';"/>
<hr class="hr-style left" style="--content:'start';"/>
<hr class="hr-style right" style="--content:'end';"/>
<hr class="hr-dashed"/>
</div>

```html
<hr class="hr-style left" style="--content:'yuri'; --text-color: #212529; --border-color: #B897FF;"/>
<hr class="hr-style center" style="--content:'</>';"> </hr>
<hr class="hr-style left" style="--content:'start';"> </hr>
<hr class="hr-style right" style="--content:'end';"> </hr>
```
</div>