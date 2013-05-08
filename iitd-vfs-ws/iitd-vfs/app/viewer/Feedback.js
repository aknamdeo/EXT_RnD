/**
 * @class FeedViewer.FeedWindow
 * @extends Ext.window.Window
 *
 * Shows a dialog for creating and validating a new feed.
 * 
 * @constructor
 * Create a new Feed Window
 * @param {Object} config The config object
 */
// The data store containing the list of states
var feed_type = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"PI", "name":"Procurement & installation of instrument/equipement"},
        {"abbr":"QA", "name":"Quality of Insturment/item"},
        {"abbr":"AS", "name":"After sales warranty/quality of service"},
				{"abbr":"OT", "name":"Other"}
        //...
    ]
});


var vendor_type = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"INS", "name":"Indian supplier"},
        {"abbr":"INF", "name":"Indian agent for foreign manufacturer"},
        {"abbr":"ITM", "name":"International manufacturer/Indian Company owned by International manufacturer"},
				{"abbr":"INM", "name":"Indian manufacturer/Service provider"}
        //...
    ]
});

Ext.define('FeedViewer.Feedback', {
    extend: 'Ext.window.Window',
    
    alias: 'widget.feedback',

    plain: true,
    resizable: false,
    modal: true,
    closeAction: 'hide',
    initComponent: function(){
        var me = this;
        me.addEvents(
            /**
             * @event feedvalid
             * @param {FeedViewer.FeedWindow} this
             * @param {String} title
             * @param {String} url
             * @param {String} description
             */
            'feedvalid'
        );
        
        me.form = Ext.create('widget.form', {
            bodyPadding: '12 10 10',
            border: false,
						items: [
							{
								xtype: 'combobox',
								name: 'feedback_type',
								fieldLabel: 'Feedback Type',
								allowBlank: false,
								store: feed_type,
								queryMode: 'local',
								displayField: 'name',
								valueField: 'abbr',
								width:400
							},
							{
								xtype: 'combobox',
								name: 'vendor_type',
								fieldLabel: 'Vendor Type',
								allowBlank: false,
								store: vendor_type,
								queryMode: 'local',
								displayField: 'name',
								valueField: 'abbr',
								width:400
							},
							{
								xtype: 'textfield',
								name: 'vendor_name',
								fieldLabel: 'Vendor Name',
								allowBlank: false,
								minLength: 6,
								width:400
			        }, {
								xtype: 'textarea',
								name: 'item',
								fieldLabel: 'Equipment/Service/Item',
								allowBlank: false,
								width:400
			        }, {
								xtype: 'textarea',
								name: 'positive_feedback',
								fieldLabel: '+Ve feedback',
								allowBlank: false,
								minLength: 8,
								width:400
							}, {
								xtype: 'textarea',
								name: 'negitive_feedback',
								fieldLabel: '-Ve feedback',
								allowBlank: false,
								width:400
							}, {
								xtype: 'textarea',
								name: 'action',
								fieldLabel: 'ActionTaken',
								allowBlank: false,
								width:400
							}]
        });
        Ext.apply(me, {
            width: 500,
            title: 'Vendor Feedback',
            iconCls: 'edit',
            items: me.form,
            buttons: [{
                xtype: 'button',
                text: 'Update',
                scope: me,
                handler: me.onUpdateClick
            }, {
                xtype: 'button',
                text: 'Cancel',
                scope: me,
                handler: me.hide
            }]
        });
        me.callParent(arguments);
    },
    
    /**
     * React to the add button being clicked.
     * @private
     */
    onUpdateClick: function(addBtn) {
			console.log("New Feedback");
			/*
        addBtn.disable();
        var url = this.form.getComponent('feed').getValue();
        this.form.setLoading({
            msg: 'Validating feed...'
        });
        Ext.Ajax.request({
            url: 'feed-proxy.php',
            params: {
                feed: url
            },
            success: this.validateFeed,
            failure: this.markInvalid,
            scope: this
        });
				*/
    }
});