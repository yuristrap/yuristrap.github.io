// /**
//  * Using single checkbox
//  */
// // var checkbox = document.querySelector('input[name=mode]');

// // checkbox.addEventListener('change', function() {
// // 	if(this.checked) {
// // 		trans();
// // 		document.documentElement.setAttribute('data-theme', 'dark');
// // 	} else {
// // 		trans();
// // 		document.documentElement.setAttribute('data-theme', 'light');
// // 	}
// // })

// // let trans = () => {
// //  darkLight();
// // 	document.documentElement.classList.add('transition');
// // 	window.setTimeout(() => {
// // 		document.documentElement.classList.remove('transition');
// // 	}, 1000);
// // }


// /**
//  * Using multiple checkboxes
//  */
// var checkboxes = document.querySelectorAll('input[name=mode]');

// checkboxes.forEach(function(checkbox) {
// 	checkbox.addEventListener('change', function() {
// 		if(this.checked) {
// 			trans();
// 			document.documentElement.setAttribute('data-theme', 'dark');
// 		} else {
// 			trans();
// 			document.documentElement.setAttribute('data-theme', 'light');
// 		}
// 	});

// 	let trans = () => {
// 		darkLight();
// 		document.documentElement.classList.add('transition');
// 		window.setTimeout(() => {
// 			document.documentElement.classList.remove('transition');
// 		}, 1000);
// 	}
// });



// // $('#main').toggleClass(localStorage.toggled);

// function darkLight() {
//   if (localStorage.toggled != 'dark') {
//     localStorage.toggled = "dark";
     
//   } else {
//     localStorage.toggled = "";
//   }
// }

// if (localStorage.toggled == 'dark') {
// 	document.documentElement.setAttribute('data-theme', 'dark')
// 	checkboxes.forEach(function(checkbox) {
// 		checkbox.checked = true;
// 	});
// } else {
// 	document.documentElement.setAttribute('data-theme', 'light')
// 	checkboxes.forEach(function(checkbox) {
// 		checkbox.checked = false
// 	});
// }