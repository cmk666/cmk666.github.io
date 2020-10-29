function getbrowser(){
var a={},u=navigator.userAgent.toLowerCase(),s;  
(s=u.match(/rv:([\d.]+)\) like gecko/))   ?a.ie=s[1]     :
(s=u.match(/msie ([\d\.]+)/))             ?a.ie=s[1]     :  
(s=u.match(/edge\/([\d\.]+)/))            ?a.edge=s[1]   :
(s=u.match(/firefox\/([\d\.]+)/))         ?a.firefox=s[1]:  
(s=u.match(/(?:opera|opr).([\d\.]+)/))    ?a.opera=s[1]  :  
(s=u.match(/chrome\/([\d\.]+)/))          ?a.chrome=s[1] :  
(s=u.match(/version\/([\d\.]+).*safari/)) ?a.safari=s[1] :
undefined;  
if(a.ie)     return 'IE: '     +a.ie     ;  
if(a.edge)   return 'Edge: '   +a.edge   ;
if(a.firefox)return 'Firefox: '+a.firefox;  
if(a.chrome) return 'Chrome: ' +a.chrome ;  
if(a.opera)  return 'Opera '   +a.opera  ;  
if(a.safari) return 'Safari '  +a.safari ;
return 'Unknown';}