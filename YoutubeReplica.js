

$(document).ready(function() {
    $(".settings-container").click(function() {
        $(".settings-container").addClass("transform");
        $(".settings-container").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(){
            $(this).removeClass("transform");
        });
    });

    
    $(".voice-button").click(function() {
        $(".voice-button").addClass("transform");
        $(".voice-button").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(){
            $(this).removeClass("transform");
        });
    });

});

function AnimationToggle(x) {
    x.classList.toggle("transform");
};