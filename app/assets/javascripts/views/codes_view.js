// for more details see: http://emberjs.com/guides/views/

Codecove.CodesView = Ember.View.extend({
  templateName: 'codes',
  didInsertElement: function() {
  	// Loop over all textareas with '.codemirror-textarea' class and apply a special id that Codemirror can use
	$('.codemirror-textarea').each(function(index) {
	    $(this).attr('id', 'code-' + index);
	    CodeMirror.fromTextArea(document.getElementById('code-' + index), {
	            lineNumbers: true,
	            tabMode: "indent",
	            mode: "ruby",
	            theme: "neo",
	            //keyMap: "vim"
	        }
	    );
	});
  }
});
