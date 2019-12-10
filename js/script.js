var btns = document.querySelectorAll('.trigger');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        console.log('clicked');
      btn.closest(document.querySelector('.caption').classList.toggle('open')) ; 
    });
});