
// Global Variables
var img_len = 28; 

function button_color(){
    $("#filter--sad").css("background","#ebdada");
    $("#filter--show-all").css("background","#ebdada");
    $("#filter--cute").css("background","#ebdada");
    $("#filter--angry").css("background","#ebdada");
    $("#filter--text").css("background","#ebdada");
    $("div.all").hide();
}

function show_sad(){
    button_color();
    $("#filter--sad").css("background","#349beb");
    for (var i = 0; i < img_len; ++i){
        $("div.sad").show();
    }
}

function show_text(){
    button_color();
    $("#filter--text").css("background","#349beb");
    for (var i = 0; i < img_len; ++i){
        $("div.text").show();
    }
}


function show_cute(){
    button_color();
    $("#filter--cute").css("background","#349beb");
    for (var i = 0; i < img_len; ++i){
        $("div.cute").show();
    }
}


function show_angry(){
    button_color();
    $("#filter--angry").css("background","#349beb");
    for (var i = 0; i < img_len; ++i){
        $("div.angry").show();
    }
}

function show_all(){
    button_color();
    $("#filter--show-all").css("background","#349beb");
    for (var i = 0; i < img_len; ++i){
        $("div.all").show();
    }
}

document.getElementById("filter--sad").addEventListener("click", show_sad);
document.getElementById("filter--show-all").addEventListener("click", show_all);
document.getElementById("filter--text").addEventListener("click", show_text);
document.getElementById("filter--cute").addEventListener("click", show_cute);
document.getElementById("filter--angry").addEventListener("click", show_angry);