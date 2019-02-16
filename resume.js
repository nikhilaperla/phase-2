var query=window.location.search.substring(1).split("?");
var a;
query.map((data)=>{
var splitdata=data.split("=");
a=parseInt(splitdata[1]);
console.log(a);
});
  var indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;
  // ternary Operation
  indexedDB?console.log("Success"):console.log("browser Not Supported");


   var request=indexedDB.open("DBMS",1);
   var result;
   var store;
   console.log(request);

   //upgradeneeded
   request.onupgradeneeded=function(e) {
    result= e.target.result;
    store=result.createObjectStore("resume",{keyPath:'Id',autoIncrement:true});
   }

   //Success

  request.onsuccess=function(e) {
    console.log("reached Successfully");
      result= e.target.result;
      var tx=result.transaction("resume","readwrite");
      store=tx.objectStore("resume");
      var splitData=store.get(a);
      splitData.onsuccess=function(e) {
        console.log(e.target.result);
        pro(e.target.result);
        Edu(e.target.result.Education);
        skills(e.target.result);
      }
      var left=document.querySelector(".left");
      var right=document.querySelector(".right");

      function pro(profile) {
    var image=document.createElement("img");
    image.src="image.jpg";
    image.alt="profile";
    left.appendChild(image);
    var h1=document.createElement("h1");
    h1.textContent=profile.Name;
    left.appendChild(h1);
    var h2=document.createElement("h2");
    h2.textContent=profile.Role;
    left.appendChild(h2);
    var h3=document.createElement("h3");
    h3.textContent=profile.Num;
    left.appendChild(h3);
    var h5=document.createElement("h5");
    h5.textContent=profile.Mail;
    left.appendChild(h5);
    var career=document.createElement("h1");
    career.textContent="Career Object";
    right.appendChild(career);
    // var hr=document.createElement("hr");
    //     career.appendChild(hr);
    var p=document.createElement("p");
    p.textContent=profile.co;
    right.appendChild(p);
}
function Edu(edu) {
  var education=document.createElement("h1");
  education.textContent="Education Information";
  right.appendChild(education);
  // var hr=document.createElement("hr");
  //     education.appendChild(hr);
      for(i in edu) {

        var degree=document.createElement("h3");
        degree.textContent=edu[i].degree;
        right.appendChild(degree);
        var ul=document.createElement("ul");
        right.appendChild(ul);
        var li=document.createElement("li");
        li.textContent="College Name: "+edu[i].College;
        ul.appendChild(li);

        var li1=document.createElement("li");
        li1.textContent="Medium: "+edu[i].Branch;
        ul.appendChild(li1);

        var li2=document.createElement("li");
        li2.textContent="Marks: "+edu[i].Marks;
        ul.appendChild(li2);

      }

    }
    function skills(skill) {
      var heading=document.createElement("h1");
      heading.textContent="skills";
      right.appendChild(heading);
      var skills=document.createElement("p");
      skills.textContent=skill.skills;
      right.appendChild(skills);

}
}
