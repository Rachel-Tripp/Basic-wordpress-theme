var btns = document.querySelectorAll('.trigger');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
    let target = btn.getAttribute('aria-controls');
     document.querySelector('#' + target).classList.toggle('open'); 
    });
});