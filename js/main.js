const flipTogle = $('.banner');
const flipTogleMain = $('.main-banner');
const flipRemove = $('.btn-close-banner');
const btnClose = $('.btn-close-banner');


flipRemove.on('click', () => flipTogle.removeClass('flip-ban'))
flipTogleMain.on('click', () => flipTogle.addClass('flip-ban'));

flipTogleMain.on('click', () => btnClose.addClass('visible-close'));
