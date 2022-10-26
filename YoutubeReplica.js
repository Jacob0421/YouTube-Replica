function Animationtoggle(x) {
    x.classList.toggle("transform");
};

$('.settings-container').onClick(function(){
    $(this).addClass('transform');
});