---
version: "v1.0"
slug: "/components/scrollspy"
title: "스크롤스파이"
---


# 스크롤스파이 (scrollspy)
특정 구역으로 이동, 혹은 해당 구역임을 추적하는 기능입니다.

※ 스크롤스파이를 사용할때는 yuri.js 를 호출하는 해당 페이지에서 스크롤스파이 요소가 선언되어야 합니다. 즉, 프레임워크 등으로 인해 요소가 일시적으로 브라우저에 나타나있지 않는다면 사용되지 않습니다. 예를 들어 본 페이지를 새로고침을 눌러야 스크롤스파이가 정상적으로 작동됩니다.

## 스크롤 가능한 요소에서 사용할때
추척할 대상과 추적을 관리할 요소가 필요합니다. 일반적으로 .nav 에서 관리합니다.

추적할 대상은 스크롤이 가능해야 합니다. `overflow` 와 `position:relative` 스타일을 확인해 주어야 합니다.

대상은 `data-spy="scroll"` 를 통해 scrollspy 를 선언해 주어야 하고 `data-target`을 통해서 추적을 관리할 요소를 지정해줍니다.

`data-target` 이 된 요소에 `a`, `button` 과 같은 클릭 이벤트가 있는 요소에게 `data-scroll=` 를 사용해 추적할 id 값을 입력해줍니다.
해당 값을 통해서 추적과 대상으로 이동이 가능해집니다.

<div class="card">
<div class="card-body">
<nav id="navbar-example2" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="/">Navbar</a>
  <ul class="nav nav-pills">
	<li class="nav-item">
	  <a class="nav-link" href="#aaa" data-scroll="aaa">@aaa</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="#bbb" data-scroll="bbb">@bbb</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="#ccc" data-scroll="ccc">@ccc</a>
	</li>
  </ul>
</nav>
<div data-spy="scroll"  data-target="#navbar-example2" data-offset="0" style="position: relative;
height: 200px;
margin-top: .5rem;
overflow: auto;" id="exampleScrollSpy">
  <h4 id="aaa">@aaa</h4>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <h4 id="bbb">@bbb</h4>
  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
  <h4 id="ccc">ccc</h4>
  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
</div>
</div>

```html
<nav id="navbar-example2" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="/">Navbar</a>
  <ul class="nav nav-pills">
	<li class="nav-item">
	  <a class="nav-link" href="#aaa" data-scroll="aaa">@aaa</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="#bbb" data-scroll="bbb">@bbb</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="#ccc" data-scroll="ccc">@ccc</a>
	</li>
  </ul>
</nav>
<div data-spy="scroll" data-target="#navbar-example2" data-offset="0" style="position: relative; height: 200px; margin-top: .5rem; overflow: auto;" id="exampleScrollSpy">
  <h4 id="aaa">@aaa</h4>
  <p>...</p>
  <h4 id="bbb">@bbb</h4>
  <p>...</p>
  <h4 id="ccc">ccc</h4>
  <p>...</p>
</div>
```
</div>


## Body 에 사용할때

전체 body에 scrollspy 를 사용할때는 아래와 같이 변경합니다.
```html
<body data-spy="scroll" data-target="#navbar-example-body" data-offset="0" style="position: relative;">
```

만약 fixed-navbar 를 관리 대상으로 사용한다면 예시는 다음과 같습니다.

```html
<nav class="navbar navbar-light navbar-md fixed-top shadow-center-md" id="navbar-example-body">
	<a class="navbar-brand" href="#">Navbar</a>
	<button class="navbar-toggler" type="button" data-target="#navbar-collapse-00" data-toggle="collapse">
		<svg class="navbar-toggler-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
			stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>
	<div class="collapse navbar-collapse" id="navbar-collapse-00">
		<ul class="navbar-nav" id="navbar-nav">
			<li class="nav-item active">
				<a class="nav-link" href="#aaa" data-scroll="aaa">aaa</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#bbb" data-scroll="bbb">bbb</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#ccc" data-scroll="ccc">ccc</a>
			</li>
		</ul>
	</div>
</nav>
```

### Body 안 내용
Body 안에는 스크롤이 가능한 충분한 내용과 `data-scroll` 에 일치한 id 값이 있어야합니다.
```html
<h1 id="aaa">aaa</h1>
...
<h1 id="bbb">bbb</h1>
...
<h1 id="ccc">ccc</h1>
...
```
