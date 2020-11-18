---
version: "v1.0"
slug: "/introduction/customize"
title: "커스터마이징"
---

# 커스터마이징
## 기초 커스터마이징
```scss
--whiteColor: #{$white};
--blackColor: #{$black};
--darkColor: #{$dark};
--lightColor: #{$light};
--successColor: #{$success};
--primaryColor: #{$primary};
--warningColor: #{$warning};
--dangerColor: #{$danger};
--grayColor: #{$gray};
--infoColor: #{$info};
--brownColor: #{$brown};

--textColor: #{$black};
--textNightColor: #{$white};
--backgroundColor: #{$white};
--backgroundNightColor: #{$dark};	
```
Yuri는 :root 에 위와 같은 값을 저장하고 있습니다.

개발하는 css 파일의 `:root { }` 내에 위 값을 수정함으로서 Yuri의 매우 기본적인 데이터값을 변경해서 사용할 수 있습니다.

보통 테마색을 변경하거나 나이트모드, 폰트 색등을 변경 할 때 유용합니다.


## 컴파일 커스터마이징
보다 디테일한 커스터마이징을 원할때는 Yuristrap 을 직접 다운받아 고정되어 있는 데이터값들을 수정함으로서 정밀한 커스터마이징을 진행할 수 있습니다.

### clone
```
git clone https://github.com/yuristrap/yuristrap.git
```

### NPM
```
npm install -g node-sass
```

### 데이터값
Yuri의 기초적인 데이터값은 모두 [scss/_variables.scss](https://github.com/yuristrap/yuristrap/blob/master/scss/_variables.scss) 에 저장됩니다.


**Grid**
```scss
$MAX-COLUMNS :12;
``` 
최고 그리드 개수를 의미합니다. Yuri는 기본적으로 12개의 칼럼으로 나뉘어 지지만 16개의 칼럼으로도 나뉘어 사용될 수 있습니다.


**Responsive**
```scss
$SM-WIDTH: 576px;
$MD-WIDTH: 768px;
$LG-WIDTH: 992px;
$XL-WIDTH: 1200px;
``` 
반응형으로 동작되는 디스플레이 넓이를 의미합니다.

```scss
$container-padding: 1rem;		// 최소 컨테이너 좌,우측 패딩 값
$container-sm-width: 544px;		// $SM-WIDTH - $container-padding*2
$container-md-width: 736px;		// $MD-WIDTH - $container-padding*2
$container-width: 960px;		// $LG-WIDTH - $container-padding*2
$container-xl-width: 1168px;	// $XL-WIDTH - $container-padding*2
$column-padding: 1rem;			// 칼럼 최소 좌,우측 패딩 값
```


**Color**
```scss
$white: white;
$black: black; 
$primary: #b897ff; 
$dark: #1b1b1b;
$light: #f3f2f5;
.
.
```
기초가 되는 테마 색들의 값이 담겨져 있습니다.


**Nightmode**
```scss
$nightBG: #201D23;
$nightPrimary: #6E5B99;

$darkmode-transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 200ms!important;
```
나이트 모드의 기본이 되는 색이 담겨져 있습니다.


**Collapse**
```scss
$COLLAPSE-SPEED: 0.25s;
```
Navbar 의 collapse 기능의 애니메이션 속도 입니다.

