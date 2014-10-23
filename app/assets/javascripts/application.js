// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require codemirror
//= require codemirror/modes/javascript
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./codecove

// for more details see: http://emberjs.com/guides/application/
Codecove = Ember.Application.create();

// Tells Ember how to make requests to the server
Codecove.ApplicationAdapter = DS.RESTAdapter;

//= require_tree .

// Sidebar Toggle
$(document).on("click", ".sidebar-icon", sidebarToggle);

function sidebarToggle() {
    var sidebar = $("#sidebar");
    var icon = $(".sidebar-icon");

    if (sidebar.width() > 0) {
        // Hide
        sidebar.animate({"width" : "0px"});
        icon.children('img').attr("src", "/assets/sidebar-icon.svg");
    } else {
        // Show
        sidebar.animate({"width" : "75px"});
        icon.children('img').attr("src", "/assets/full-screen-icon.svg");
    }
}

// Utility Toggle
$(document).on("click", ".profile-utilities", function(){

    // Measure all the ui stuff involved
    var $infoHeight = $("#infobar").height();
    var $consoleHeight = $("#console").height();
    var $beltHeight = $("#utility-belt").height();
    var $utilities = $(".utilities");
    var height = $consoleHeight - $infoHeight - $beltHeight;

    if ( $utilities.height() > 0 ) {
        // Hide
        $utilities.css({"height" : 0});
        $(".welcome-message").children("img").attr("src", "/assets/gear-icon.svg");
    } else {
        // Show
        $utilities.css({"height" : height});
        $(".welcome-message").children("img").attr("src", "/assets/collapse-icon.svg");
    }
});

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


// Set Z-index for overlapping windows
// Increments from 801 each time a window is clicked
// May be buggy and start overlapping things at 91 clicks because of next z-indexed item
var zIndexerer = 801;

$('.code-window-wrapper').mousedown(function(){
    $(this).css("z-index", zIndexerer++);
});

// 100% Full Console Code
$(".maximize").on("click", function(){

    // Get the console dimensions
    var consoleH = $("#console").height() - $("#utility-belt").height() - 30;

    // Expand the parent window
    $(this).parents(".code-window-wrapper").animate({
            "height" : consoleH,
            "width" : "100%",
            "top" : "0px",
            "left" : "0px"
    }).addClass("full-screen");

});

// Layout toggle
$(document).on("click", ".one-column", function(){
    $(".code-window-wrapper").css({"width":"100%"});
    $(".layout-options div").removeClass("active");
    $(this).addClass("active");
});

$(document).on("click", ".two-column", function(){
    $(".code-window-wrapper").css({"width":"50%"});
    $(".layout-options div").removeClass("active");
    $(this).addClass("active");
});

$(document).on("click", ".three-column", function(){
    $(".code-window-wrapper").css({"width":"33%"});
    $(".layout-options div").removeClass("active");
    $(this).addClass("active");
});
