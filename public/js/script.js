const folder = "/Images/"

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("body").append(
                 "<img src='"+ val +"' style='width:300px;padding:0 2px 0 2px' >" );
            } 
        });
    }
});
