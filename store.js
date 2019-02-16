// console.log("hey macha");
function submit() {
  var career=document.getElementById('career').value;
  var name=document.getElementById('name').value;
  var role=document.getElementById('role').value;
  var phonenumber=document.getElementById('phonenumber').value;
  var mailid=document.getElementById('mailid').value;
  var degree=document.getElementById('degree').value;
  var dcollege=document.getElementById('dcollege').value;
  var dbranch=document.getElementById('dbranch').value;
  var dmarks=document.getElementById('dmarks').value;
  var idegree=document.getElementById('idegree').value;
  var icollege=document.getElementById('icollege').value;
  var ibranch=document.getElementById('ibranch').value;
  var imarks=document.getElementById('imarks').value;
  var board=document.getElementById('board').value;
  var school=document.getElementById('school').value;
  var medium=document.getElementById('medium').value;
  var smarks=document.getElementById('smarks').value;
  var skills=document.getElementById('skills').value;
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
    store.put({
        co:career,
        Name:name,
        Role:role,
        Num:phonenumber,
        Mail:mailid,
        Education:[
          {
            Degree:degree,
            College:dcollege,
            Branch:dbranch,
            Marks:dmarks
          },
          {
            Degree:idegree,
            College:icollege,
            Branch:ibranch,
            Marks:imarks
          },
          {
            Degree:board,
            College:school,
            Branch:medium,
            Marks:smarks
          }
        ],
        skills:skills
      });
    }
    //error
    request.onerror=function(e){
      console.log("error"+e);
}
window.open("index.html","_self");
}
