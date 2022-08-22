let head = document.querySelectorAll('.separet .head');
let body = document.querySelectorAll('.separet .body');


for(let i = 0; i < head.length || i < body.length; i++){
    head[i].addEventListener('click', function(){
       for(let j = 0; j < head.length; j++){
         if(i !== j){
            head[j].classList.remove('active')
            body[j].classList.remove('bactive')
            
         }else{
            head[i].classList.toggle('active')
            body[i].classList.toggle('bactive')
            
         }
       }
    })
}


