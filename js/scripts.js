$(document).ready(function(){
    $("#button").click(function(){
        $('ul').empty();
        var number = $("input").val();
        for(i = 1; i <=number ; i++){
            if(i%15===0){
                $("ul").append('<li>pingpong</li>');
            }
            else if(i%3===0){
                $("ul").append('<li>pong</li>');
            }
            else if(i%5===0){
                $("ul").append('<li>ping</li>');
            }
            else {
                $("ul").append('<li>'+i+'</li>');
            }
        };
    });
});

