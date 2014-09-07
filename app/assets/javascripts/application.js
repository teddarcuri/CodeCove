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
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./codecove

// for more details see: http://emberjs.com/guides/application/
Codecove = Ember.Application.create();

// Tells Ember how to make requests to the server
Codecove.ApplicationAdapter = DS.RESTAdapter;

// Handlebar Helpers
Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});

//= require_tree .

(function($){

    // Sidebar Toggle
    $(".sidebar-icon").on("click", sidebarToggle);

    function sidebarToggle() {
        var sidebar = $("#sidebar");
        var icon = $(".sidebar-icon");

        if (sidebar.width() > 0) {
            // Hide
            sidebar.animate({"width" : "0px"});
            icon.children('img').attr("src", "images/sidebar-icon.svg");
        } else {
            // Show
            sidebar.animate({"width" : "75px"});
            icon.children('img').attr("src", "images/full-screen-icon.svg");
        }
    }

    // Utility Toggle
    $(".profile-utilities").on("click", function(){

        // Measure all the ui stuff involved
        var $infoHeight = $("#infobar").height();
        var $consoleHeight = $("#console").height();
        var $beltHeight = $("#utility-belt").height();
        var $utilities = $(".utilities");
        var height = $consoleHeight - $infoHeight - $beltHeight;

        if ( $utilities.height() > 0 ) {
            // Hide
            $utilities.css({"height" : 0});
            $(".welcome-message").children("img").attr("src", "/images/gear-icon.svg");
        } else {
            // Show
            $utilities.css({"height" : height});
            $(".welcome-message").children("img").attr("src", "/images/collapse-icon.svg");
        }
    });

    // Search Form

    // Focus
    $(".search").on("focus", function(){
        $(this).siblings(".react-circle").addClass("react");
        $(".utilities").css({"height" : 0});
        $(".search-overlay").show();

        $(this).on("keyup",function(e){
            var value = $(".search").val();
            $(".search-overlay").children("h1").text(value);

        });
    });

    $(".search").on("mouseover", function(){
        $(this).siblings(".react-circle").addClass("react");
    });

    $(".search").on("mouseout", function(){
        if ( $(".search-overlay").is(":visible") == false ) {
            $(this).siblings(".react-circle").removeClass("react");
        }
    });

    // Blur
    $(".search").on("blur", function(){
        $(this).siblings(".react-circle").removeClass("react");
        $(".search-overlay").hide();
    });


    ///////////////////////////////////////////////////
    //*** Come Back and Remove when migrating to back end platform
    ////////////////////////////////////////////////

    // // Code Mirror
    // // Loop over all textareas with '.codemirror-textarea' class and apply a special id that Codemirror can use
    // $('textarea.codemirror-textarea').each(function(index) {
    //     $(this).attr('id', 'code-' + index);
    //     CodeMirror.fromTextArea(document.getElementById('code-' + index), {
    //             lineNumbers: true,
    //             tabMode: "indent",
    //             mode: "ruby",
    //             theme: "neo",
    //             //keyMap: "vim"
    //         }
    //     );
    // });

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
    $(".one-column").click(function(){
        $(".code-window-wrapper").css({"width":"100%"});
        $(".layout-options div").removeClass("active");
        $(this).addClass("active");
    });

    $(".two-column").click(function(){
        $(".code-window-wrapper").css({"width":"50%"});
        $(".layout-options div").removeClass("active");
        $(this).addClass("active");
    });

    $(".three-column").click(function(){
        $(".code-window-wrapper").css({"width":"33%"});
        $(".layout-options div").removeClass("active");
        $(this).addClass("active");
    });


}(jQuery));
