Codecove.CodeEditorComponent = Ember.Component.extend ({
	tagName: "textarea",

	_initializeEditor: function() {
      var self = this;

      var codemirror = CodeMirror.fromTextArea(self.$().get(0), {
        lineWrapping: true,
        lineNumbers: true,
        mode: 'javascript',
        theme: 'neo',
        viewportMargin: Infinity,
      });

      codemirror.on("change", function(instance){
        Ember.run(function(){
          self.set("value", instance.getValue());
        });
      });       
      
      this.set("editor", codemirror);

      codemirror.setValue(self.get("value"));

   }.on('didInsertElement'),
  
  updateValue: function(){
    if(this.get("editor").getValue() !== this.get("value")){
      this.get("editor").setValue(this.get("value"));
    } 

    // If user is not in editing mode, put them in it?
  }.observes("value"),

});