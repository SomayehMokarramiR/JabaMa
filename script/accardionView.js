// var f = 0;

// function sevich(){
// 	if(f==0){
// 		desc.style.height = "150px";
// 		collapseDesc.innerHTML = " بستن";
// 		collapseDesc.className ="view"
// 		f=1;
// 	}
// 	else if(f==1){
// 		desc.style.height = "30px";
// 		collapseDesc.innerHTML = "مشاهده همه";
// 		collapseDesc.className ="viewClose"
// 		f=0;
// 	}	
	
// }
// var f = 0;

// function sevichModal(){
// 	if(f==0){
// 		desc.style.height = "140px";
// 		collapseDesc.innerHTML = " بستن";
// 		collapseDesc.className ="view"
// 		f=1;
// 	}
// 	else if(f==1){
// 		desc.style.height = "100px";
// 		collapseDesc.innerHTML = "مشاهده بیشتر";
// 		collapseDesc.className ="viewClose"
// 		f=0;
// 	}	
	
// }
//=====================================================================
var f = 0;
itr = document.querySelectorAll("#content>.container>.sec20>.desc>.itemsHide");
//console.log(itr.length);



function sevich(){
	if(f==0){
		desc1.style.height = "150px";
		collapseDesc.innerHTML = " بستن";
		for(i=0 ; i<itr.length ; i++){
			itr[i].style.visibility= "visible";	
			itr[i].style.opacity = '1';				
		}
		
		f=1;
	}
	else if(f==1){
		desc1.style.height = "80px";
		collapseDesc.innerHTML = "مشاهده همه";
		for(i=0 ; i<itr.length ; i++){
			itr[i].style.visibility= "hidden";	
			itr[i].style.opacity = '0';				
		}		
		f=0;
	}	
	
}
