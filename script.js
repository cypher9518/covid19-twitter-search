function fn1(){
    var str = document.getElementById("text1").value;
    var str2 = '+-"not+verified"+-"unverified"+-"needed"+-"required"&f=live'
    var str3 = '';
    

    var markedCheckbox = document.getElementsByName("check");  
    for (var checkbox of markedCheckbox) {  
    if (checkbox.checked) 
      str3 = str3.concat(checkbox.value+'+OR+');  
    }
    window.open("https://twitter.com/search?q=verified+"+str+"+"+str3+"plasma"+str2);
}
