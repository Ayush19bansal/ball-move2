let ball=document.getElementById("ball");
document.addEventListener('keypress',fun);
let topp=0;
let left=0;
function fun(e){
let Bheight=document.documentElement.clientHeight;
let Bwidth=document.documentElement.clientWidth;
// console.log(height,width);
let elementwidth=ball.offsetWidth;
let elementhight=ball.offsetHeight;

    // console.log(e);


    let key=e.keyCode;
    // console.log(key);
    //d
    if(key==68 || key==39){
     if(left+elementwidth+10<=Bwidth){
        ball.style.left=left+10+"px";
        left+=10;
     } 
    }

    //S DOWN

    if(key==83){
        if(topp+elementhight+10<=Bheight){
            ball.style.top=topp+10+"px";
            topp+=10;
         } 
    }

    //A LEFT

   if(key==65 || key==39){
        if(left-10>=0){
           ball.style.left=left-10+"px";
           left-=10;
        } 
       }

   //W TOP 
   
   if(key==87 || key==39){
    if(topp-10>=0){
       ball.style.top=topp-10+"px";
       topp-=10;
    } 
   }   
}

