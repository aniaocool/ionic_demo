angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngResource','ngSanitize'])
	
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	$ionicConfigProvider.platform.ios.tabs.style('standard');
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.position('standard');
	
	$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');
	
	$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
	$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
	
	$ionicConfigProvider.platform.ios.views.transition('ios');
	$ionicConfigProvider.platform.android.views.transition('android');

  
  	$stateProvider.state('tab', {
    	url: '/tab',
    	abstract: true,
    	templateUrl: 'tabs.html'
  	}).state('tab.dash', {
	    url: '/dash',
	    views: {
	      	'tab-dash': {
	        	templateUrl: 'tab-dash.html',
	        	controller:'da',
	      	}
	    }
	}).state('tab.news', {
	    url: '/news',
	    views: {
	      	'tab-news': {
	        	templateUrl: 'tab-news.html',
	        	controller:'news',
	      	}
	    }
	}).state('tab.news-detail', {
      	url: '/news/:aid',
      	views: {
        	'tab-news': {
          		templateUrl: 'news-detail.html',
          		controller:'news-d'
        	}
      	}
   	}).state('tab.chats', {
      	url: '/chats',
      	views: {
        	'tab-chats': {
          		templateUrl: 'tab-chats.html',
          		controller: 'touxiang',
        	}
      	}
   	}).state('tab.chat-detail', {
      	url: '/chats/:chatId',
      	views: {
        	'tab-chats': {
          		templateUrl: 'chat-detail.html',
          		controller:'datou'
        	}
      	}
   	}).state('tab.account', {
    	url: '/account',
    	views: {
      		'tab-account': {
        		templateUrl: 'tab-account.html',
        		
      		}
    	}
  	}).state('tab.man', {
      	url: '/man',
      	views: {
        	'tab-man': {
          		templateUrl: 'tab-man.html',
          		controller: 'man',
        	}
      	}
   	})

  	$urlRouterProvider.otherwise('/tab/dash');
});
