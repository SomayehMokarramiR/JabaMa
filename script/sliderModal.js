var pos = 0;
        
var buts = document.querySelectorAll("#but > li");

function change(num){

    // console.log("change "+num);

    /*  move slider  */
        
        move(num);
    
    /*  change tab  */
    
        changeTab(num)
}

function move(num){

    pos = -100*num;
    galSlide.style.right = pos + "%";	
}

function changeTab(num){
    
    for(i=0; i < buts.length;i++ ){

        buts[i].className = ""; 
    }

    buts[num].className="sel";
}


right.onclick = function(){

    if(pos > -700){
        pos = pos - 100;
        galSlide.style.right = pos + "%";
    }
    else if(pos == -700){
        pos = 0;
        galSlide.style.right= pos + "%";	
    }
            
    changeTab(pos/-100);
}

left.onclick = function(){

    if(pos < 0){
        pos = pos + 100;
        galSlide.style.right = pos + "%";
    }
    else if(pos == 0){
        pos = -700;
        galSlide.style.right = pos + "%";	
    }
    changeTab(pos/-100);
 }