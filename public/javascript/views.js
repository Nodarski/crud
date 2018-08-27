$(document).ready(function() {

    var clickedUp = false;
    var clickedDown = false;

    $(function(){
        $(".increment").click(function(){

            var count = parseInt($("~ .count", this).text());

            if($(this).hasClass("up")) {
                        
                        var id = $(this).attr('id')
                        
                        if($(".up"+id).hasClass("false") && $(".down"+id).hasClass("false")){

                            count = count + 1;
                            $(".count"+id).text(count);
                            $(".up"+id).css("background-color","green");
                            $(".down"+id).css("background-color","grey");
                            $(".up"+id).removeClass("false");
                            $(".up"+id).addClass("true");
                            

                        } else if($(".up"+id).hasClass("true") && $(".down"+id).hasClass("false")){

                            count = count - 1;
                            $(".count"+id).text(count);
                            $(".up"+id).css("background-color","grey");
                            $(".up"+id).removeClass("true")
                            $(".up"+id).addClass("false")
                            

                        } else if($(".up"+id).hasClass("false") && $(".down"+id).hasClass("true")){

                            count = count + 2;
                            $(".count"+id).text(count);
                            $(".up"+id).css("background-color","green");
                            $(".down"+id).css("background-color","grey");
                            $(".down"+id).removeClass("true")
                            $(".down"+id).addClass("false")
                            $(".up"+id).removeClass("false")
                            $(".up"+id).addClass("true")
                            

                        }


            } else if($(this).hasClass("down")){

                    var id = $(this).attr('id')
                        if($(".down"+id).hasClass("false") && $(".up"+id).hasClass("false")){
                            
                            console.log("hello");
                            count = count - 1;
                            $(".count"+id).text(count);
                            $(".down"+id).css("background-color","red");
                            $(".up"+id).css("background-color","grey");
                            $(".down"+id).removeClass("false")
                            $(".down"+id).addClass("true")
                           

                        } else if($(".up"+id).hasClass("false") && $(".down"+id).hasClass("true")){

                            count = count + 1;
                            $(".count"+id).text(count);
                            $(".down"+id).css("background-color","grey");
                            $(".up"+id).css("background-color","grey");
                            $(".down"+id).removeClass("true")
                            $(".down"+id).addClass("false")
                            

                        } else if($(".up"+id).hasClass("true") && $(".down"+id).hasClass("false")){

                            count = count - 2;
                            $(".count"+id).text(count);
                            $(".down"+id).css("background-color","red");
                            $(".up"+id).css("background-color","grey");
                            $(".down"+id).removeClass("false")
                            $(".down"+id).addClass("true")
                            $(".up"+id).removeClass("true")
                            $(".up"+id).addClass("false")
                           
                        }
            }
        });
    });



    var socket = io();
    
   // var room = 'abc123';

    // socket.on('connect', function() {
    //      socket.emit('join', 'Hello World from client');

    // });
    
    
socket.on('connect', function(data) {
        socket.emit('join', 'Hello World from client');
    });

    
});
