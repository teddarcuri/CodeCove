App.CodeSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
		collections: { serialize: ‘ids’ },
		languages: { serialize: ‘ids’ }
	}
});