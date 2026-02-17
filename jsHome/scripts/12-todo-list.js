const todoList = [{name:'make dinner',
          dueDate:'2003-06-30'
        },

        {name:'wash dishes',
        dueDate:'2003-07-31'}]
            
   renderTodoList();

     document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
      addTodo();
    })
       

  function  renderTodoList()
  {

let todoListHTML = '';

 todoList.forEach((todoObject,index)=>{
   const {name,dueDate} = todoObject;
  const html =`
  <div>  ${name} </div>
    <div> ${dueDate}</div>
  <button class ="delete-todo-button js-delete-todo-button">Delete</button>`;

  todoListHTML+=html;
    })

// console.log(todoListHTML);
document.querySelector('.js-todo-list').innerHTML = todoListHTML;
   

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton ,index) => {
      deleteButton.addEventListener('click', () => {
               todoList.splice(index, 1);
              renderTodoList();
      })
    });

    // closure  --------------   if  a  function has access to the value 
    // it will always have the accesssto that value 
    // value gets packaged together (enclosed with the function)
    
      /*  for(let i=0; i<todoList.length; i++)
{
   const todoObject = todoList[i];
  //  const name = todoObject.name;
   const {name,dueDate} = todoObject;
  //  called destructuring same work as above
  //  const dueDate = todoObject.dueDate;
  // do same as above both in a single line

  const html =`
  <div>  ${name} </div>
    <div> ${dueDate}</div>
  <button onclick="
      todoList.splice(${i},1);
      renderTodoList();
  " class ="delete-todo-button">Delete</button>
  `
  todoListHTML+=html;  

} */

    
  }

// empty array
function addTodo()
{
  const inputElement = document.querySelector('.js-name-input')
 const name =  inputElement.value
 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;
//  console.log(name)
   
    // todoList.push(name);
    todoList.push({
      // name:name,
      // dueDate:dueDate         this two are also having the shortcut so we can use them only once eg: shorthand property syntex

      name,
      dueDate
    });

  // we also use the target here so we can also have the key that the user press everytime and get reflected in our console
       // will push everything in the empty array
    console.log(todoList)
    inputElement.value='';

    renderTodoList();4

    
}