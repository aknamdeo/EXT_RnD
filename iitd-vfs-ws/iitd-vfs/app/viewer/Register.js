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

Ext.define('FeedViewer.MyRegisterDlg', {
    extend: 'Ext.window.Window',
    
    alias: 'widget.registerDlg',

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
            unstyled: true,
            items: [
							{
								xtype: 'textfield',
								name: 'username',
								fieldLabel: 'User Name',
								allowBlank: false,
								minLength: 6
			        }, {
								xtype: 'textfield',
								name: 'email',
								fieldLabel: 'Email Address',
								vtype: 'email',
								allowBlank: false
			        }, {
								xtype: 'textfield',
								name: 'password1',
								fieldLabel: 'Password',
								inputType: 'password',
								style: 'margin-top:15px',
								allowBlank: false,
								minLength: 8
							}, {
								xtype: 'textfield',
								name: 'password2',
								fieldLabel: 'Repeat Password',
								inputType: 'password',
								allowBlank: false,
								/**
								 * Custom validator implementation - checks that the value matches what was entered into
								 * the password1 field.
								 */
								validator: function(value) {
										var password1 = this.previousSibling('[name=password1]');
										return (value === password1.getValue()) ? true : 'Passwords do not match.'
								}
							}]
        });
        Ext.apply(me, {
            width: 500,
            title: 'My Profile',
            iconCls: 'edit',
            layout: 'fit',
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
			console.log("Update Profile");
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