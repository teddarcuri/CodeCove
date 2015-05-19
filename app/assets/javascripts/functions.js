// Sidebar Toggle
$(document).on("click", ".sidebar-icon", sidebarToggle);

function sidebarToggle() {
    var sidebar = $("#sidebar");
    var icon = $(".sidebar-icon");

    if (sidebar.width() > 0) {
        // Hide
        sidebar.animate({"width" : "0px"});
        sidebar.find(".sidebar-item").fadeOut();
        icon.children('img').attr("src", "/assets/sidebar-icon.svg");
    } else {
        // Show
        sidebar.animate({"width" : "75px"});
        sidebar.find(".sidebar-item").fadeIn();
        icon.children('img').attr("src", "/assets/full-screen-icon.svg");
    }
}


// Search Form
// Focus
$(document).on("focus", ".search", function(){
    $(this).siblings(".react-circle").addClass("react");
    $(".utilities").css({"height" : 0});
    $(".search-overlay").show();

    $(this).on("keyup",function(e){
        var value = $(".search").val();
        $(".search-overlay").children("h1").text(value);

    });
});

$(document).on("mouseover", ".search", function(){
    $(this).siblings(".react-circle").addClass("react");
});

$(document).on("mouseout", ".search", function(){
    if ( $(".search-overlay").is(":visible") == false ) {
        $(this).siblings(".react-circle").removeClass("react");
    }
});

// Blur
$(document).on("blur", ".search", function(){
    $(this).siblings(".react-circle").removeClass("react");
    $(".search-overlay").hide();
});
