function speak () {
    alert("Hello, my CV is not available online yet");
}

document.querySelector("#cv").addEventListener("click", speak);

$(".skills .btn").click(function(){
    $(".skills .btn").css("z-index", "-1");
    $(".middle .btn").css("z-index", "-1");
    $(".skills .close").css("z-index", "1");
    $(".skills .close").click(function(){
        $(".skills .btn").css("z-index", "2000");
        $(".middle .btn").css("z-index", "2000");
    })
});
    
