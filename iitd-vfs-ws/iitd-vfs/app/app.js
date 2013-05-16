/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

	function hasOption (name) {
			return window.location.search.indexOf(name) >= 0;
	}

	Ext.Loader.setConfig({enabled: true});
	Ext.Loader.setPath('Ext.ux', '../ux');

	Ext.require([
			'Ext.grid.*',
			'Ext.data.*',
			'Ext.util.*',
			'Ext.Action',
			'Ext.tab.*',
			'Ext.button.*',
			'Ext.form.*',
			'Ext.layout.container.Card',
			'Ext.layout.container.Border',
			'Ext.ux.ajax.SimManager',
			'Ext.ux.PreviewPlugin'
	]);		


Ext.application({
    name: 'iitd-vfs-ws',

    views: [
        'Main',
        'Viewport',
				'FeedViewer'
    ],
		

    controllers: [
        'Main'
    ],

    autoCreateViewport: true
});
