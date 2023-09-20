const load_dropdown = (ele, items) => {
	var title = ele.find('.dropdown-title');
	var arrow = title.find('.dropdown-icon');
	var menu = $('<div></div>').addClass('dropdown-menu').css('bottom', 0);
	items.forEach(e => {
		menu.append($(`<a></a>`)
			.text(e.name)
			.attr('href', e.link)
			.attr('target', 'blank')
			.addClass('dropdown-item'));
	});
	title.after(
		menu,
		$('<div></div>').addClass('dropdown-back').css('width', title.width())
	);
	ele.mouseenter(() => {
		menu.animate({bottom: -menu.height()}, 250);
		arrow.css('transform', 'rotate(180deg)');
	}).mouseleave(() => {
		menu.animate({bottom: 0}, 250);
		arrow.css('transform', 'rotate(0deg)');
	});
};