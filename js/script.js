$(document).ready(function(){
    $(".sub,.dropbox,.logo2").hide();
    $("nav,.dropbox,.icon").hover(function(){
        $(".sub,.dropbox,.logo2").stop().slideToggle();
    });
    alert( "1920px 사이즈에서만 정상 동작합니다." );
    
});    
