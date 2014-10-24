// for more details see: http://emberjs.com/guides/views/

Codecove.CollectionView = Ember.View.extend({
  templateName: 'collection',
  willInsertElement : function(){
  	Ember.run.schedule('afterRender', this, function(){
    	// Loop over all textareas with '.codemirror-textarea' class and apply a special id that Codemirror can use
		$('.codemirror-textarea').each(function(index) {
		    $(this).attr('id', 'code-' + index);
		    CodeMirror.fromTextArea(document.getElementById('code-' + index), {
		            lineNumbers: true,
		            tabMode: "indent",
		            mode: "javascript",
		            theme: "neo"
		        }
		    );
		});
  	});
  }
  
});
