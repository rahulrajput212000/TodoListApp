//check of specific todos by clicking
$("ul").on("click", "li" ,function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
         $(this).remove();
    });
    event.stopPropagation();//to stop bubbling to parent elements
});

$("input").keypress(function(event){
    if(event.which===13){
        //grabbing new todo text from input
    var todoText =  $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span> <i class='far fa-trash-alt'> </i></span> "+ todoText + "</li>");
    }
    
});


$(".fa-plus").click(function(){
    $("input").fadeToggle();
});

