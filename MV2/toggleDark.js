if (!document.body.getAttribute('data-ext-dark') || document.body.getAttribute('data-ext-dark') === 'false') {
    document.body.setAttribute('data-ext-dark', true);
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
} else {
    document.body.setAttribute('data-ext-dark', false);
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
}