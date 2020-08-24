/**
 * Using single checkbox
 */
// var checkbox = document.querySelector('input[name=mode]');

// checkbox.addEventListener('change', function() {
// 	if(this.checked) {
// 		trans()
// 		document.documentElement.setAttribute('data-theme', 'dark')
// 	} else {
// 		trans()
// 		document.documentElement.setAttribute('data-theme', 'light')
// 	}
// })

// let trans = () => {
// 	document.documentElement.classList.add('transition');
// 	window.setTimeout(() => {
// 		document.documentElement.classList.remove('transition');
// 	}, 1000)
// }


/**
 * Using multiple checkboxes
 */
var checkboxes = document.querySelectorAll('input[name=mode]');

checkboxes.forEach(function(checkbox) {
	checkbox.addEventListener('change', function() {
		if(this.checked) {
			trans()
			document.documentElement.setAttribute('data-theme', 'dark')
		} else {
			trans()
			document.documentElement.setAttribute('data-theme', 'light')
		}
	})

	let trans = () => {
		document.documentElement.classList.add('transition');
		window.setTimeout(() => {
			document.documentElement.classList.remove('transition');
		}, 1000)
	}
});
