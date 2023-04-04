document.getElementById("name").addEventListener("click", function(){
    document.getElementById("popUpLast").style.display="none";
    document.getElementById("popUpEmail").style.display="none";
    document.getElementById("popUpPhone").style.display="none";
    document.getElementById("popUpName").style.display="grid"
})
document.getElementById("name2").addEventListener("click", function(){
    document.getElementById("popUpName").style.display="none";
    document.getElementById("popUpPhone").style.display="none";
    document.getElementById("popUpEmail").style.display="none";
    document.getElementById("popUpLast").style.display="grid"
})
document.getElementById("email").addEventListener("click", function(){
    document.getElementById("popUpName").style.display="none";
    document.getElementById("popUpPhone").style.display="none";
    document.getElementById("popUpLast").style.display="none";
    document.getElementById("popUpEmail").style.display="grid"
})
document.getElementById("telephone").addEventListener("click", function(){
    document.getElementById("popUpName").style.display="none";
    document.getElementById("popUpLast").style.display="none";
    document.getElementById("popUpEmail").style.display="none";
    document.getElementById("popUpPhone").style.display="grid"
})
document.getElementById("message").addEventListener("click", function(){
    document.getElementById("popUpName").style.display="none";
    document.getElementById("popUpLast").style.display="none";
    document.getElementById("popUpEmail").style.display="none";
    document.getElementById("popUpPhone").style.display="none"
})
function fun1 (){
    let user = document.getElementById('name').value;
    let lastN = document.getElementById('name2').value;
    let mail = document.getElementById('email').value;
    let pho = document.getElementById('telephone').value;
    let msg = document.getElementById('message').value;
    let op=document.getElementById('subject').value;
    let output = document.getElementById('finalbtn').value;

document.getElementById("result").style.display="grid"
document.getElementById("popup").style.display="none"
document.getElementById("output1").innerHTML="<b> Name: </b>" + user + " <br> " + "<b>Surname: </b>" + lastN + "<br> " + "<b> My email is: </b>" + mail + " <br> " + "<b> My phone number is: </b> " + pho + "<br>  " + "<b>My message: </b>" + msg + "<br>"+ "<b>The subject is: </b>" + op ;
}

const replyBack = document.getElementById("finalbtn");

finalbtn.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("result").style.display="none";
    document.getElementById("popup").style.display="grid"
})


