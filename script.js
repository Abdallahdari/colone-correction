// const menu=document.querySelector('.only-meue')
// const body=document.querySelector('body')
// menu.addEventListener('click',function(){
//     body.style.backgroundColor='red';
// })

// document.addEventListener('keydown', function(e){
//     if(e.key === 'Escape'){
    
// console.log(`escape `) ;
//     }
// });



// for the resposive part

const show=document.getElementById('show')
const sidebar=document.querySelector('.side-bar')
const hide=document.getElementById('hide')
show.addEventListener('click',function(e){
    e.preventDefault()
sidebar.classList.remove('hide')
})
