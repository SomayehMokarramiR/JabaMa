

addFavBtn.addEventListener("click",function(){
	 let elId = curEl.id;
	 let elstate = curEl.state;
     let elcity = curEl.city;
     let eltype = curEl.type; 
	 let elprice = curEl.price;
    //  let elview = curEl.view;
    //  let elstar = curEl.star;
     let elnumber = curEl.number;
     let elnumRoom = curEl.numRoom; 
     let elpic = curEl.pic[0];


	 let favSelect = JSON.parse(localStorage.getItem("favSelect"));
	if(!favSelect){
        favSelect = [];
	 }
     //,elview,elstar
    favSelect.push({elId,elstate,elcity,elprice,eltype,elnumber,elnumRoom,elpic})
     alert("اقامتگاه با موفقیت به علاقه مندی ها اضافه شد .")
    localStorage.setItem("favSelect",JSON.stringify(favSelect));
});

function showfavorite(){
    modalFavorite.className = "show";
    mainPageId.className="hide";

    favsel = JSON.parse(localStorage.getItem("favSelect"));
	
   //modalFavorite.innerHTML = "";
        
    favsel.forEach(function(el){

        let con = document.createElement("div");
     			con.className = "content";
        
                 let rowit = document.createElement("div");
                 rowit.className = "rowItems";

                let it = document.createElement("div");
                    it.className = "items";
                    
                    let divRight = document.createElement("div");
                        divRight.className = "right";
                        let im = document.createElement("img");		
                            im.src = "img/image/all_images/" + el.elpic;

                    divRight.appendChild(im);

        let divLeft = document.createElement("div");
            divLeft.className = "left";

    		let decribe = document.createElement("div");
     			decribe.className = "describe";

                let desc = document.createElement("div");
                    desc.className = "desc";
                    desc.innerHTML = el.eltype ;
                
                // let st = document.createElement("span");		
                //     st.className = "star";
                //     st.style.width = 18*elstar + "px";	
                    
                // let vie = document.createElement("span");		
                //     vie.className = "view";	
                //     view.innerHTML = "(" +  el.elview + " دیدگاه " +")";

                let loc = document.createElement("span");		
                    loc.className = "location";
                    loc.innerHTML = el.elstate +"، "+ el.elcity +"، ";	
                    
                let room = document.createElement("span");		
                    room.className = "room";
                    room.innerHTML = el.elnumRoom + "  اتاق ";	

                    
                let num = document.createElement("span");		
                    num.className = "number";
                    num.innerHTML = el.elnumber + "نفر";	

                let pridiv = document.createElement("div");
                    pridiv.className = "priceOffer";
                        let pr2 = document.createElement("span");
                        pr2.innerHTML ="شروع قیمت از : " ;		
                        pr2.className = "Price2";
                    
                        let pr = document.createElement("span");		
                            pr.className = "price";
                            pr.innerHTML = el.elprice + "ریال";	

                                let sp = document.createElement("span");
                                sp.innerHTML ="/ هر شب ";			
                                sp.className = "spp";

                                pr.appendChild(sp);  

                            pridiv.appendChild(pr2);      
                            pridiv.appendChild(pr); 
                
                    decribe.appendChild(desc);      
                    // decribe.appendChild(st);          
                    // decribe.appendChild(vie);         
                    decribe.appendChild(loc);                 
                    decribe.appendChild(room);
                    decribe.appendChild(num);
                    decribe.appendChild(pridiv);
                          			
                    divLeft.appendChild(decribe);
            			
     		it.appendChild(divRight);
     		it.appendChild(divLeft);				
                
            rowit.appendChild(it);	
            con.appendChild(rowit);	
    modalFavorite.appendChild(con);

})

}

function closeFavorite(){
	modalFavorite.className ="hide";
    mainPageId.className="show";	
}

// function showfavorite(){
// 	modalFavorite.className = "show";
// }

