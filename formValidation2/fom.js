
 
 var count=0;


//  function clearError(){
//     error= document.getElementsByClassName('printValid');
//     for(let item of error){
//      item.innerHTML="";
//     }
//  }

 function setError(id,msg){
    ele= document.getElementById(id);
    ele.getElementsByClassName('printValid')[0].innerHTML=msg;

 }

 export function submitForm(event){
    var emptyArr=[];
     event.preventDefault();

     clearError();
     
     var v=document.forms['myform']['Fname'].value;
     var em=document.forms['myform']['Femail'].value;
     var ph=document.forms['myform']['Fnumber'].value;
     var pass=document.forms['myform']['Fpassword'].value;

     if(v.length<5){
         setError("name"," *length is too short")
     }
     // console.log(v);

     

     if(em.length<7){
         setError("email"," *email length is too short")
     }

     if(em.indexOf('@')<=0){
         setError("email"," *dont put @ in starting point")
     }

     if(em.search(/[@]/)==-1){
         setError("email", "*@ is missing here");
     }

     if((em.charAt(em.length-4)!='.' && em.charAt(em.length-4)!='.')){
         setError("email", ". is not at proper place");  //.com //.co
     }
     
     // console.log(em);

     
     if(ph.length<10){
         setError("number"," *number be 10 digit")
     }

     // console.log(ph);

     

     if(pass.length<5){
         setError("password"," *password is short");
     }

     if(pass.search(/[0-9]/)==-1){
         setError("password","*password must contain one numeric no.")
     }

     if(pass.search(/[A-Z]/)==-1){
         setError("password","*password contain atlease one upperCase")
     }

     if(pass.search((/[!\@\#\%\^\&\(\)]/))==-1){
         setError("password","*atlease one special character required");
     }
     // console.log(pass);


     var data=document.getElementsByName('g');
     for(var i=0;i<data.length;i++){
         if(data[i].checked){
         yourGender=data[i].value;
            
         }
     }
    
     // let selected= document.querySelector('input[type="radio"]:checked');
     // document.getElementById('target').innerHTML=selected.parentElement.textContent;
     // console.log(fun);

     // var add= "name :" + v +"," + "email :" +em +","+" phone number :" +ph +","+ "password :"+pass +","
     // +yourGender;
     // emptyArr.push(add);
     // for(var i=0;i<emptyArr.length;i++){
     //     document.getElementById('display').innerHTML=emptyArr[i];
     // }

    //  emptyArr.push([count,v,em,ph,pass,yourGender]);
    //  count++;
    //  let datadisplay=" ";
    //  let display=document.getElementById('display');
    //  for (let i=0;i<emptyArr.length;i++){
    //     // datadisplay += "<tr>  <td>USER" +(i+1) + "<br>";
    //      datadisplay +="<tr> <td>" +emptyArr[i][0] + "</td>";
    //          datadisplay += "<td>" +emptyArr[i][1] + "</td>";
    //              datadisplay += "<td>" +emptyArr[i][2] + "</td>";
    //                  datadisplay += "<td>" +emptyArr[i][3] + "</td>";
    //                      datadisplay += "<td>" +emptyArr[i][4] + " </td>";
    //                      datadisplay +="<td>" +emptyArr[i][5] +"<br> </td> </tr>"
    //  }
   
    //  document.getElementById('user').innerText=count;
    //  display.innerHTML=datadisplay;
    count++;
    var c=document.getElementById('user').innerText=count;
    let obj ={
        uniqueId:count,
        userrname:v,
        email:em,
        mobileNo:ph,
        password:pass,
        gender:yourGender       
    }

    emptyArr.push(obj);
    console.log(emptyArr);
    let datadisplay=" ";

    for (let i=0;i<emptyArr.length;i++){
            // datadisplay += "<tr>  <td>USER" +(i+1) + "<br>";

            let obj=emptyArr[i];
             datadisplay +="<tr> <td>" +obj.uniqueId + "</td>";
                 datadisplay += "<td>" +obj.userrname + "</td>";
                     datadisplay += "<td>" +obj.email+ "</td>";
                         datadisplay += "<td>" +obj.mobileNo + "</td>";
                             datadisplay += "<td>" +obj.password+ " </td>";
                             datadisplay +="<td>" +obj.gender+"<br> </td> </tr>"
         }
         
         display.innerHTML=datadisplay;
         
   
         
        //  document.forms['myform']['Fname'].value="";
        //  document.forms['myform']['Femail'].value="";
        //  document.forms['myform']['Fnumber'].value="";
        //  document.forms['myform']['Fpassword'].value="";

 }