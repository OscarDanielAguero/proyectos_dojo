//sin jquery
var btns = document.querySelectorAll("button");
    
for(var i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(){
        alert("Button clicked!");
    });
}

//con jquery
$("button").click(function() {
    alert("Button clicked");
});