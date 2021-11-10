function setCookie()  
{  
    document.cookie=document.getElementById('user').value+","+document.getElementById('phno').value+ ","+ document.getElementById('address').value;  

}  
function getCookie()  
{  
    if(document.cookie.length!=0)  
    {  
        var array=document.cookie.split(",");  
        document.getElementById('user').value=array[0];
        document.getElementById('phno').value=array[1];
        document.getElementById('address').value=array[2];
    }  

}  