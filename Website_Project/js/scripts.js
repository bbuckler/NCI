function validateForm() {
    var x = document.forms["contactUs"]["fname"].value;
    if (x == null || x == "") {
        alert("Please enter your First name:");
		return false;
    }
	var x = document.forms["contactUs"]["lname"].value;
    if (x == null || x == "") {
        alert("Please enter your Last name:");
		return false;
    }
	var x = document.forms["contactUs"]["address"].value;
    if (x == null || x == "") {
        alert("Please enter the first line of your address:");
        return false;
    }
	var x = document.forms["contactUs"]["town"].value;
    if (x == null || x == "") {
        alert("Please enter the Town you live in:");
        return false;
    }
    var mobile_format = /^\d{10}$/;
	if (!document.forms["contactUs"]["mobileno"].value.match(mobile_format)) {
		alert("Please enter your 10 didgit Mobile number, for example: 0868830642");
		return false;
	} 
	var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!document.forms["contactUs"]["email"].value.match(email_format)) {
		alert("Please enter your Email address for example: a1@droghedadrivinglessons.ie");
		return false;
	} 
	var x = document.forms["contactUs"]["category"].value;
    if (x == "-1") {
        alert("Please select Enquiry Category");
        return false;
	}
	var x = document.forms["contactUs"]["comment"].value;
    if (x == null || x == "") {
        alert("Please leave questions and comments");
        return false;
	}			
return false;   
}
