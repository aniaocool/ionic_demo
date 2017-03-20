angular.module('starter.controllers', [])
	.controller('myc',['$scope',function($scope){
		$scope.items=[
			{name:'Amazing Girl',con:'amazing girl',src:'img/aa.jpg',id:1},
			{name:'Axe Girl',con:'This girl has A!X!E!',src:'img/oo.png',id:2},
			{name:'油库里',con:'神奇构体生物油库里',src:'img/op.png',id:3},
			{name:'AC Girl',con:'This girl looks bad ',src:'img/pp.png',id:4},
			{name:'Axe Girl2',con:'This girl has A!X!E! T!O!O!',src:'img/ppp.jpg',id:5},
			{name:'油库里标准版',con:'一个头部',src:'img/you.jpg',id:6}
		]
	}])
	.controller('da',['$scope','$ionicSlideBoxDelegate','$ionicScrollDelegate',function($scope,$ionicSlideBoxDelegate,$ionicScrollDelegate){
		$scope.fun=function(index){
			//console.log('cccccc',index);
			$ionicSlideBoxDelegate.$getByHandle('j1').slide(index,1000)
		}
	}])
	.controller('touxiang',['$scope',function($scope){
		
	}])
	.controller('news',['$scope','f',function($scope,f){
		$scope.items=[];
		$scope.jj = true;
		$scope.imageUrl = 'http://www.phonegap100.com/data/attachment/';
		
		$scope.$on('allItem', function (event, data) {
			if(data.result.length==0)
			{
				$scope.jj = false;
			}
			else
			{
	            $scope.items=$scope.items.concat(data.result);
	            $scope.$broadcast('scroll.infiniteScrollComplete');
			}
        });
		$scope.loadMoreData=function(){
			console.log('ssss');
//			setTimeout(function(){
				f.getAll();
//			},2000)
		}
		
	}])
	.controller('news-d',['$scope','$stateParams','f1',function($scope,$stateParams,f1){
		f1.getOne($stateParams.aid);
        $scope.$on('content', function (event, data) {
            $scope.one = data;
        });
      	$scope.imageUrl = 'http://www.phonegap100.com/data/attachment/';		
	}])
	.controller('datou',['$scope','$stateParams',function($scope,$stateParams){
		console.log($stateParams.chatId);
		for(var n in $scope.items)
		{
			if($stateParams.chatId==$scope.items[n].id)
			{
				$scope.name=$scope.items[n].name;
				$scope.src=$scope.items[n].src;
				$scope.con=$scope.items[n].con;
			}
		}
	}])
	.controller('man',['$scope','$ionicActionSheet',function($scope,$ionicActionSheet){
		$scope.show = function() {
		   	$ionicActionSheet.show({
		     	buttons: [
		       		{ text: '拍照' },
		       		{ text: '从相册中选择' },
		     	],
		     	titleText: 'choose your head',
		     	cancelText: 'Cancel',
		     	buttonClicked: function(index) {
		     		//console.log(index)
		       		//return true;
		       		if(index==0)
		       		{
		       			var options={
		    				quality:100,
			    		}
				    	navigator.camera.getPicture(function(imgUrl){
				    		//success
				    		alert(imgUrl);
				    		var image = document.getElementById('img');
			   				image.src = imgUrl;
				    	},function(err){
				    		//error
				    		alert(JSON.stringify(err));
				    	},options);
				    	return true;
		       		}
		       		if(index==1)
		       		{
		       			var options={
			   				sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
			    		}
				    	navigator.camera.getPicture(function(imgUrl){
				    		//success
				    		alert(imgUrl);
				    		var image = document.getElementById('img');
			   				image.src = imgUrl;
				    	},function(err){
				    		//error
				    		alert(JSON.stringify(err));
				    	},options);
				    	return true;
		       		}
		     	}
		   	});
		
		};
	}])

