var d = new Date();
var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();

i5.innerHTML = s;
i3.innerHTML = m;
i1.innerHTML = h;

var p=true;

setInterval(function(){
    if(p==true){
        i2.style.color="transparent";
        i4.style.color="transparent";
        p = false;
    }
        else{
        i2.style.color="lime";
        i4.style.color="lime";
        p = true;
    }
},1000);


setInterval(function(){
            s++;
            if(s<10){s="0"+s;}
            if(s=="60"){s="00"; m++;
                        if(m<10){m="0"+m;}
                   if(m=="60"){m="00"; h++;
                               if(h<10){h="0"+h;}
                         if(h=="24"){h="00";}
                               i1.innerHTML = h;}
                        i3.innerHTML = m;}
            i5.innerHTML = s;
      },1000);

    
        
