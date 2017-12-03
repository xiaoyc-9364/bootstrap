window.addEventListener('load', function() {
	var oMenu = document.querySelector('#menu');
	var oNav = document.querySelector('.nav');
	var aLink = document.querySelectorAll('.nav a');
	var len = aLink.length;
	var isClick = true;

	oMenu.addEventListener('click', function() {
		if (!oNav.offsetHeight) {
			oNav.style.display = 'flex';
			isClick = !isClick;
		} else {
			oNav.style.display = 'none';
			isClick = !isClick;
		}
	}, false);
}, false);