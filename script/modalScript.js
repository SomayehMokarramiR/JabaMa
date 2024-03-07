
function showModal(){
	modal.className="show";
}
function closeModal(){
	modal.className="hide";
}

function showModalItems(){
	modalItems.className="show";
	mainPageId.className="hide";
}
function closeModalItems(){
	modalItems.className="hide";
	 mainPageId.className="show";
}
function showModalDetail(){
	modalDetail.className="show";
}
function closeModalDetail(){
	modalDetail.className="hide";
}
function showModalRegister(){
	modalRegister.className="show";
}
function closModalRegister(){
	modalRegister.className="hide";
}
// function showModalNew(){
//  	modalNew.className="show";
// 	//  mainPageId.className="hide";
// }

// var mainPageId = document.getElementById("mainPageId")   
function closeModalNew(){
	modalNew.className="hide";
}


function showModalNew(pid){
	modalNew.className="show";

	curEl = db.find(el => {return el.id == pid});

	// alert(curEl.city)

	star.style.width =  curEl.star * 18 + "px";
	allStar.innerHTML = "(" + curEl.star + ")";
	stateCity.innerHTML = curEl.state +" , " + curEl.city ;	
	text1.innerHTML = curEl.type ;
	number.innerHTML ="  ظرفیت  "	 +curEl.number +" نفر " ;
	text2.innerHTML ="  به میزبانی  "	 +curEl.mizban;
	numRoom.innerHTML ="  متر زیربنا ۷۵ متر کل بنا  "  + curEl.numRoom;
		

 bigImg.src ="";
	
	bigImg.src = "img/image/all_images/"+ curEl.pic[0];


		
		galTop1.src = "img/image/all_images/" + curEl.pic[1];
		galTop1.className= "colNew1";


		galTop2.src = "img/image/all_images/" + curEl.pic[2];
		galTop2.className= "colNew1";


		galButtom1.src = "img/image/all_images/" +curEl.pic[3];
		galButtom1.className= "colNew2";

		galButtom2.src = "img/image/all_images/" +curEl.pic[4];
		galButtom2.className= "colNew2";
	
		galTop1.addEventListener("mouseover", function(){changePic(this.src)}); 
		galTop2.addEventListener("mouseover", function(){changePic(this.src)}); 
		galButtom1.addEventListener("mouseover", function(){changePic(this.src)}); 
		galButtom2.addEventListener("mouseover", function(){changePic(this.src)}); 		

}

var lis = document.querySelectorAll('.galPic');
function changePic(sr){
	// alert(sr)
	bigImg.src = sr;

//  for(j=0; j <= 4 ; j++){	
// 	 	lis[j].style.opacity = "0.5";
// 	 }

	/*let inxSl =sr.lastIndexOf("/");
	let im= sr.substring(inxSl+1,sr.length);
	//  alert(im)
	im.style.opacity = "1";
 	im.classList.add("zoom");	*/
		
}

function goToFirst(){
	bigImg.src =  "img/image/all_images/" +curEl.pic[0];
}
function small(){
	// for (im of lis){
	// 	im.classList.remove("zoom");	
	// } 

	// this.classList.remove("zoom");	
		
}
	



// /*  function change and Zoom by over Picture in  Modal New */ 



/*lis = document.querySelectorAll('.galPic');


function changePicCol(i){
	bigImg.src = "img/image/all_images/" + i + ".JPG" 

	for(j=0 ; j < 4 ; j++){	
		lis[j].style.opacity = "0.5";
	}

	lis[i-2].style.opacity = "1";
	lis[i-2].classList.add("zoom")			
}

function goToFirst(){
	bigImg.src = "img/image/slideModal/1.JPG" 			
}

function small(i){
	lis[i-2].classList.remove("zoom")			
}*/



// ============= Modals Filters================
function showModalType(){
	modalType.className="show";
}
function closeModalType(){
	modalType.className="hide";
}
function showModalPrice(){
	modalPrice.className="show";
}
function closeModalPrice(){
	modalPrice.className="hide";
}
function showModalNumber(){
	modalNumber.className="show";
}
function closeModalNumber(){
	modalNumber.className="hide";
}

//==========================================================================

