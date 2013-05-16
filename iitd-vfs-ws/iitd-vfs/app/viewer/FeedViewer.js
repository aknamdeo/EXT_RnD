/**
 * @class FeedViewer.FeedViewer
 * @extends Ext.container.Viewport
 *
 * The main FeedViewer application
 * 
 * @constructor
 * Create a new Feed Viewer app
 * @param {Object} config The config object
 */

Ext.define('FeedViewer.App', {
    extend: 'Ext.container.Viewport',
    
    initComponent: function(){
        
        Ext.define('Feed', {
            extend: 'Ext.data.Model',
            fields: ['title', 'url']
        });

        Ext.define('FeedItem', {
            extend: 'Ext.data.Model',
            fields: ['title', 'author', {
                name: 'pubDate',
                type: 'date'
            }, 'link', 'description', 'content']
        });
        
        Ext.apply(this, {
            layout: {
                type: 'border',
                padding: 5
            },
            items: [this.createLogin(), this.createFeedPanel(), this.createFeedInfo()]
        });
        this.callParent(arguments);
    },
		
		
		
		
		createLogin:function()
		{
			this.login = Ext.create('widget.loginDlg',{
					listeners: {
						scope: this,
						loadmainpage: this.onLoadMainPage
					}
			});
			return this.login;
		},


    
    /**
     * Create the list of fields to be shown on the left
     * @private
     * @return {FeedViewer.FeedPanel} feedPanel
     */
    createFeedPanel: function(){
        this.feedPanel = Ext.create('widget.feedpanel', {
            region: 'west',
            collapsible: true,
            width: 225,
            //floatable: false,
            split: true,
						hidden : true,
						id : 'feedPanel',
            minWidth: 175,
            feeds: [{
                title: 'Sencha Blog',
                url: 'http://feeds.feedburner.com/extblog'
            }, {
                title: 'Sencha Forums',
                url: 'http://sencha.com/forum/external.php?type=RSS2'
            }, {
                title: 'Ajaxian',
                url: 'http://feeds.feedburner.com/ajaxian'
            }],
            listeners: {
                scope: this,
                feedselect: this.onFeedSelect
            }
        });
        return this.feedPanel;
    },
		
		
		
    
    /**
     * Create the feed info container
     * @private
     * @return {FeedViewer.FeedInfo} feedInfo
     */
    createFeedInfo: function(){
        this.feedInfo = Ext.create('widget.feedinfo', {
            region: 'center',
            minWidth: 300,
						hidden : true,
						refID : 'feedInfo',
						listeners: {
                scope: this,
                logout: this.onLogout
            }
						
        });


        return this.feedInfo;
    },
    
		
		/**
		* Reacts to a feed being selected
		* @private
		*/
    onLoadMainPage: function(){
			console.log('Kab aayga mazza');
        this.feedInfo.show();
				this.feedPanel.show();
				this.login.hide();
    },
		
		/**
		* Reacts to a feed being selected
		* @private
		*/
    onLogout: function(){
			console.log('Kab aayga mazza');
        this.feedInfo.hide();
				this.feedPanel.hide();
				this.login.show();
    },		
		
		
    /**
     * Reacts to a feed being selected
     * @private
     */
    onFeedSelect: function(feed, title, url){
        this.feedInfo.addFeed(title, url);
    }
});
