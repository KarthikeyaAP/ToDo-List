const list=document.querySelector('ul');

list.addEventListener('click',e=>{
    if(e.target.tagName=='LI'){
        e.target.style.textDecoration=='line-through'?e.target.remove():e.target.style.textDecoration='line-through';
    }
})

const form=document.querySelector('#frm');
const text=document.querySelector('.text');
const color=document.querySelector('#color');

form.addEventListener('submit',e=>{
    e.preventDefault();
   const li=document.createElement('li');
   li.innerText=text.value;
   li.style.backgroundColor=color.value;
   console.log(li.classList)
   li.classList.add('badge-secondary')
   if(color.value=='black'){
       li.style.color='white';
   };
   list.append(li);
   text.value=null;
   color.value=null;
   console.log(color.value)
});
const lis=document.querySelectorAll('li');