const list=document.querySelector('.todos');
const li=document.querySelector('li');

const form=document.querySelector('#frm');
const text=document.querySelector('.text');
const color=document.querySelector('#color');
const search=document.querySelector('.search input');
const ini=document.querySelector('#initial');

const addTodo = todo => {
    const html=`
    <li class="list-group-item text-center text-light mx-20  justify-content-between align-items-center position-sticky align-middle">
    <span>${todo}</span>
    <i class="fa fa-trash delete"></i>
    </li>
    `;
    list.innerHTML += html;
};

form.addEventListener('submit',e=>{
    e.preventDefault();
    todo=text.value;
    addTodo(todo);
    text.value=null;
   });

   list.addEventListener('click',e=>{
     if(e.target.classList.contains('delete')){
         e.target.parentElement.remove();
     };
});

const filterTodos = (term) => {
    Array.from(list.children)
        .filter( todo => !todo.textContent.includes(`${term}`))
        .forEach( todo => todo.classList.add('hidden'));

    Array.from(list.children)
        .filter( todo => todo.textContent.includes(`${term}`))
        .forEach( todo => todo.classList.remove('hidden'));
};

search.addEventListener('keyup', () =>{
    const term=search.value;
    filterTodos(term);
});
