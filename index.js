var indexedDB=window.indexedDB||window.mozIndexedDB||window.webKitIndexedDB||window.msIndexedDB;
//ternary operator
indexedDB?console.log("Success"):console.log("browser Not Supported");
//creating database
var request=indexedDB.open("DBMS",1);
var result;
var store;
console.log(request);
//upgradeneeded
request.onupgradeneeded=function(e) {
  result=e.target.result;
  store=result.createObjectStore("resume",{keyPath:'Id',autoIncrement:true});
}
//success
request.onsuccess=function(e){
  console.log("reached successfully");
  result=e.target.result;
  var tx=result.transaction("resume","readwrite");
  store=tx.objectStore("resume");

  var getData=store.getAll();
getData.onsuccess=function(get) {
console.log(get.target.result);
profile(get.target.result);

}
function profile(getprofile) {
  var cards=document.querySelector('.cards');

   for(i in getprofile) {
     let card=document.createElement("div");
     card.classList.add("card");
     cards.appendChild(card);

     let image=document.createElement("img");
     image.src="image.jpg";
     image.alt="profileImage";
     card.appendChild(image);

     let a=document.createElement("a");
     a.href="resume.html?Id="+getprofile[i].Id;
     card.appendChild(a);

     let name=document.createElement("h2");
     name.textContent=getprofile[i].Name;
     a.appendChild(name);

     let number=document.createElement("h3");
     number.textContent=getprofile[i].number;
     card.appendChild(number);

     let mailid=document.createElement("h3");
     mailid.textContent=getprofile[i].mailid;
     card.appendChild(mailid);
    }
 }
}
