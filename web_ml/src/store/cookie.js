  
     function getCookie(name) { //获取指定名称的cookie值
    // (^| )name=([^;]*)(;|$),match[0]为与整个正则表达式匹配的字符串，match[i]为正则表达式捕获数组相匹配的数组；
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) {
      return unescape(arr[2]);
    }
    return null;
    }
    export var value=getCookie("islogin")
    export var uname=getCookie("uname")
    export var path=getCookie("path")
    export var uid=getCookie("uid")
    export var order=getCookie("order")
    
    
    