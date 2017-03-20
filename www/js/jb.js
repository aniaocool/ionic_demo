		document.addEventListener('backbutton',function(){
    		navigator.notification.confirm(
			    'Are you sure to E!X!I!T!',
			    function(index){
			    	if(index==1)
			    	{
			    		navigator.app.exitApp();
			    	}
			    },           
			    'Fuck You',         
			    ['Yes','No'] 
			);
    	});	
    	function showalert(){
			navigator.notification.alert('You are the J!B!',  // message
			    function(){
			    	//alert('alert');//callback
			    },'Game Over',     // title
			    'DoneJJ'           // buttonName
			);
		}
    	function showconfirm(){
    		navigator.notification.confirm(
			    'Are you want to E!X!I!T!', // message
			    function(index){
			    	if(index==1)
			    	{
			    		navigator.app.exitApp();
			    	}
			    },            // callback to invoke with index of button pressed
			    'Fuck You',           // title
			    ['Yes','No']     // buttonLabels
			);
    	}
    	function showp(){
    		navigator.notification.prompt(
			    'Please enter your name',  // message
			    function(results){
			    	alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
			    },                  // callback to invoke
			    'Registration',            // title
			    ['Ok','Exit'],             // buttonLabels
			    'Jane Doe'                 // defaultText
			);
    	}
    	function showbeep(){
	    	navigator.notification.beep(1);
    	}
    	
    	function showcamera(){
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
    	}
    	function showalbum(){
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
    	}