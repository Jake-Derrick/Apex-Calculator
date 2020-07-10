$(document).ready(function(){
    $('input[type=radio]').click(function(){
    var _value = this.value
        //alert(_value);
        if(_value == "Easy")
        {
					document.getElementById("test").innerHTML = "Zero kills = 5 pushups, Squad placement 20 to 15 = 5 pushups, squad placement 14 to 10 = 2 pushups";  
        }
        else if(_value == "Medium")
        {
        	document.getElementById("test").innerHTML = "Zero kills = 7 pushups, Squad placement 20 to 15 = 7 pushups, squad placement 14 to 10 = 3 pushups.";  
        }
        else if(_value == "Hard")
        {
            document.getElementById("test").innerHTML = "Zero kills = 10 pushups, Squad placement 20 to 15 = 10 pushups, squad placement 14 to 10 = 5 pushups.";
        }
        else
        {
            document.getElementById("test").innerHTML = "An error with radio button values has occured"
        }
    });
});