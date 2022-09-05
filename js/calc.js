let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggs = document.querySelector('.togg');
let body = document.body;
let user= document.querySelector("#user");

for(let i=0; i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        value.style.fontSize="30px";
        if (this.innerHTML=="=" && value.innerHTML==""){
            value.innerHTML="ابوس ايدك اكتب حاجه الاول😔";
            value.style.fontSize="23px";
        }
        else if (this.innerHTML=="=" && value.innerHTML=="ابوس ايدك اكتب حاجه الاول😔"){
            value.innerHTML="ابوس ايدك اكتب حاجه الاول😔";
            value.style.fontSize="23px";
        }
        else if (this.innerHTML=="="){
            value.innerHTML=eval(value.innerHTML)
            
        }
        
        else{
            if (this.innerHTML=="clear"){
                value.innerHTML="";
            }
            else if(this.innerHTML==`<i class="fa fa-reply" aria-hidden="true"></i>`){
              
                let lastnum =value.innerHTML.charAt(value.innerHTML.length -1);
                let gg = value.innerHTML.replace(lastnum , "");
                value.innerHTML = gg;
            }
            else{
                value.innerHTML+=this.innerHTML;
            }
        }
        
    })

}
toggs.onclick=function(){
    body.classList.toggle('dark');
}
// let pro=window.prompt("please enter your name");

let dd=window.setTimeout(function(){
    let pro=window.prompt("please enter your name");
    window.localStorage.setItem("username",pro);
    user.innerHTML="hello "+pro;
    if(pro==null){
        user.innerHTML="اهلا بالخول الي مكتبش اسمو";
    }
    else if(pro==""){
        user.innerHTML="اهلا بالخول الي مكتبش اسمو";
    }
   
},2000)

