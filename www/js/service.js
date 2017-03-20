var jj=9;
var jb=-1;
var a=-4;
var b=0;
angular.module('starter.services', ['ionic','ngResource'])
	.factory('f',['$resource','$rootScope',function($resource,$rootScope){
        return {
            getAll: function () {
            	var url='http://www.phonegap100.com/appapi.php?a=getPortalList'
                $resource(url,{
                	catid:'@catid'
                }).get({catid:jj},function (data) {
                	jj+=1;
                    $rootScope.$broadcast('allItem', data);
                })
            }
        }
	}])	
	.factory('f1', ['$rootScope','$resource', function ($rootScope, $resource){
        return {
            getOne: function (aid) {
                $resource('http://www.phonegap100.com/appapi.php', {
                    a: 'getPortalArticle',
                    aid:'@adidas'
                }).get({aid: aid }, function (data) {
                    console.log('content:', data);
                    $rootScope.$broadcast('content', data.result[0]);
                })
            }
        }
    }])