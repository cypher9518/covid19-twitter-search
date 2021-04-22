function fn1(){
    var str = document.getElementById("text1").value;
    var str2 = '+-"not+verified"+-"unverified"+-"needed"+-"required"&f=live'
    window.open("https://twitter.com/search?q=verified+"+str+str2)
}