// $("h1").css("color", "red");

$("button");

$("h1").addClass("big-title");

// $("h1").text("Bye");
// $("button").text("Dont Click Me");
// $("button").html("<em>Hey Hi</em>");

$("a").attr("href", "https://yahoo.com")

$("h1").click(function(){
    $("h1").css("color", "purple");
});

$("button").click(function(){
    $("h1").css("color", "purple");
});

$("document").keypress(function(event){
    $("h1").text(event.key);
});