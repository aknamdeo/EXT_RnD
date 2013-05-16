/**
 * @class FeedViewer.LoginDlg
 * @extends Ext.panel.Panel
 *
 *
 * @constructor
 * Create a new Feed Panel
 * @param {Object} config The config object
 */

Ext.define('FeedViewer.LoginDlg', {
    extend: 'Ext.Panel',
    alias: 'widget.loginDlg',

    title: 'IIT-VFS',
    width: 200,
    height: 100,
		floatable: false,
		region: 'center',
		layout: {
				align: 'center',
				pack: 'center',
				padding: 50,
				type: 'vbox'
		},
		
		
		initComponent: function(){
		var me = this;	
		
		Ext.apply(this, {
			requires: [
        'Ext.form.Panel',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text'
			],
			
			items: [
				{
					xtype: 'form',
					title: 'Login',
					frame:true,
					
					defaultType: 'textfield',
					defaults: { anchor: '100%' },
					
					items: [
						{ allowBlank:false, fieldLabel: 'User ID', name: 'user', emptyText: 'user id' },
						{ allowBlank:false, fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' },
						{ xtype:'checkbox', fieldLabel: 'Remember me', name: 'remember' }
					],
					
					buttons: [
						{
							text:'Register',
							id:'btnReg',
							handler: this.onRegClick
						},
						{
							text:'Login',
							id:'btnLogin',
							handler: function () {
                        me.fireEvent('loadmainpage'); // fire event from mainToolbar, not from button
                    }
						}
					]
				}
			]
		});
		me.addEvents(
		'loadmainpage'
		);
			
		this.callParent(arguments);
		},
		onLoginClick: function() {
			 console.log(this);
			 this.fireEvent('loadmainpage',this);
		}
		
});