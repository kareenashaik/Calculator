var ans=0;
var k="";
document.getElementById("add").onclick=function(){
 var a=parseInt(document.getElementById("n1").value);
 ans=ans+a;
  if(k.length==0)
 k=k+a;
  else
  k=k+("+"+a);
 document.getElementById("result").textContent=(ans);
}

document.getElementById("sub").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
   ans=ans-a;
   if(k.length==0)
   ans=ans+k;
   else
   k=k+("-"+a);
    document.getElementById("result").textContent=(ans);
   }
 
   document.getElementById("mul").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
   ans=ans*a;
   if(k.length==0)
   ans=ans+k;
   else
   k=k+("*"+a);
    document.getElementById("result").textContent=(ans);
   }
   document.getElementById("div").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
   ans=ans/a;
   if(k.length==0)
   k=k+("/"+a);
    document.getElementById("result").textContent= Math.ceil((ans));
   }
   document.getElementById("i").onclick=function()
   {
   document.getElementById("wait").textContent=(k);
   }
