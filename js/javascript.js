function navbar() {
	var x = document.getElementById("responsiveNav");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}

//forces the input to be numbers only
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)){
    	return false;
    } else {
        return true;
    }
}

function zipCodeInput() {
    var textValue = document.getElementById("textBox").value;
    var zipCode = parseInt(textValue);
    if(textValue.length == 5 && zipCode > 0 && zipCode < 100000){
    	localStorage.setItem("validZip", textValue); 
        location.href = "category.html";
    }
    else{
    	var invalidMessage = 'Your zip code is too short. Your input was: ' + textValue + '.';
        alert(invalidMessage);
    }   
}

function getZipCode() {
    return localStorage.getItem("validZip");  
}

function saveCategory1(i) {
    localStorage.setItem("selCategory1", i);  
}

function saveCategory2(i) {
    localStorage.setItem("selCategory2", i);  
}

function saveProduct(i) {
    localStorage.setItem("selProduct", i);  
}

function getCategory1() {
    return localStorage.getItem("selCategory1");  
}

function getCategory2() {
    return localStorage.getItem("selCategory2");  
}

function getProduct() {
    return localStorage.getItem("selProduct");  
}
