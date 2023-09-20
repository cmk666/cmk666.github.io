const load_dropdown = (title, items) => {
	var menu = $('<div></div>').addClass('dropdown-menu');
	items.forEach(e => {
		menu.append($(`<a></a>`)
			.text(e.name)
			.attr('href', e.link)
			.attr('target', 'blank')
			.addClass('dropdown-item'));
	});
	title.after(menu.hide());
	var arrow = title.find('.dropdown-icon');
	title.mouseenter(() => {
		menu.fadeIn('fast');
		arrow.css('transform', 'rotate(180deg)');
	}).mouseleave(() => {
		menu.fadeOut('fast');
		arrow.css('transform', 'rotate(0deg)');
	});
};