/*********************** Exercise ********************/

/* answer low level */

function checkAnswer(item) {
    document.querySelectorAll('.choose-item').forEach(item => {
        item.classList.remove('choose-item--checked');
        item.setAttribute('checked',false);
    });
    item.classList.add('choose-item--checked');
    item.setAttribute('checked',true);
}

/*
document.querySelectorAll('.choose-item').forEach(item => {
    item.addEventListener('click', function() {
        item.classList.toggle('choose-item--checked');
        item.setAttribute('checked',true);
    })
});
*/