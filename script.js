const list=document.querySelector('.todos');
const li=document.querySelector('li');

const form=document.querySelector('#frm');
const text=document.querySelector('.text');
const color=document.querySelector('#color');
const search=document.querySelector('.search input');
const ini=document.querySelector('#initial');

let listItems=[];


const addTodo = (todo,id) => {
    const html=`
    <li data-id="${id}" class="list-group-item text-center text-light mx-20 px-30 justify-content-between align-items-center position-sticky align-middle">
    <span>${todo.title}</span>
    <i class="fa fa-trash delete"></i>
    </li>
    `;
    list.innerHTML += html;
};

const deleteTodo=(id) => {
    const todos=document.querySelectorAll('li');
    todos.forEach(todo => {
        if(todo.getAttribute('data-id') == id){
            todo.remove();
        }
    })
}
db.collection('todos').onSnapshot(snapshot =>{
    snapshot.docChanges().forEach(change =>{
        const doc=change.doc;
        if(change.type == 'added'){
            addTodo(doc.data(),doc.id);
        }
        else if(change.type=='removed'){
            deleteTodo(doc.id);
        }
    })
})

form.addEventListener('submit',e=>{
    e.preventDefault();
    todo=text.value;
    let obj={
        'title':todo
    }
    db.collection('todos').add(obj)
        form.reset();
   });

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.parentElement.getAttribute('data-id');
        db.collection('todos').doc(id).delete()
    }
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
console.log(Array.from(list.children))