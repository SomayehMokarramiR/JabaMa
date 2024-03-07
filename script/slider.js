
var pos=[0,0,0,0,0,0,,0,0,0,0,0,0,0,0,0];   

next.onclick = function(){ go_right(gal,200,33.33,pos,0)} 

 next1.onclick = function(){ go_right(gal1,600,25,pos,1)}

 next2.onclick = function(){ go_right(gal2,100,100,pos,2)}

 next3.onclick = function(){ go_right(gal3,100,100,pos,3)}

 next4.onclick = function(){ go_right(gal4,100,100,pos,4)}

 next5.onclick = function(){ go_right(gal5,100,100,pos,5)}

 next6.onclick = function(){ go_right(gal6,100,100,pos,6)}

 next7.onclick = function(){ go_right(gal7,100,100,pos,7)}

 next8.onclick = function(){ go_right(gal8,100,100,pos,8)}

 next9.onclick = function(){ go_right(gal9,100,100,pos,9)}

 next10.onclick = function(){ go_right(gal10,100,100,pos,10)}

 next11.onclick = function(){ go_right(gal11,100,100,pos,11)}

 next12.onclick = function(){ go_right(gal12,100,100,pos,12)}

 next13.onclick = function(){ go_right(gal13,100,100,pos,13)}

 next14.onclick = function(){ go_right(gal14,100,100,pos,14)}



prev.onclick = function(){ go_left(gal,200,16.66,pos,0)}

prev1.onclick = function(){ go_left(gal1,600,25,pos,1)}

prev2.onclick = function(){ go_left (gal2,100,100,pos,2)}

prev3.onclick = function(){ go_left (gal3,100,100,pos,3)}

prev4.onclick = function(){ go_left (gal4,100,100,pos,4)}

prev5.onclick = function(){ go_left (gal5,100,100,pos,5)}

prev6.onclick = function(){ go_left (gal6,100,100,pos,6)}

prev7.onclick = function(){ go_left (gal7,100,100,pos,7)}

prev8.onclick = function(){ go_left (gal8,100,100,pos,8)}

prev9.onclick = function(){ go_left (gal9,100,100,pos,9)}

prev10.onclick = function(){ go_left (gal10,100,100,pos,10)}

prev11.onclick = function(){ go_left (gal11,100,100,pos,11)}

prev12.onclick = function(){ go_left (gal12,100,100,pos,12)}

prev13.onclick = function(){ go_left (gal13,100,100,pos,13)}

prev14.onclick = function(){ go_left (gal14,100,100,pos,14)}

function go_right(galId,limit,step,galpos,i){
    if(galpos[i] > -limit){
        galpos[i] = galpos[i]- step;
        galId.style.left = galpos[i] +"%";
    }
    else if(galpos[i] == -limit){
        galpos[i] = 0;
        galId.style.left= galpos[i] +"%";
    }
}

function  go_left(galId,limit,step,galpos,i){
    if(galpos[i] < 0){
        galpos[i] = galpos[i] + step;
        galId.style.left = galpos[i]+"%";
    }
     else if(galpos[i] == 0){
         galpos[i] = -limit;
       galId.style.left = galpos[i]+ "%";	
    }
    
}