const Item=({item,todos,setTodos,setInput})=>{

    let isComplete=item.completed;
    const toggleComplete=()=>
    // eslint-disable-next-line array-callback-return
    {   setTodos(todos.map(todo=>{
        if(todo.id===item.id){
            return{
            ...todo,completed:!todo.completed}
        }
        else{
            return todo;
        }
        }))
    }

    //Edit item gives the item back to input
    const editItem=(e)=>{
        setInput(item.text);
        setTodos(todos.filter(todoItem=>item.text!==todoItem.text));
    }
    // deleteItem removes the item completely
    const deleteItem=(e)=>{
        
        setTodos(todos.filter(todoItem=>item.text!==todoItem.text));
    }
    return(
    <li className={`item ${isComplete?"completed":""}`}>
        <div className="list-item-text"><p>{item.text}</p></div>
        <div className="buttons">
            <button className={`btn btn-complete ${isComplete?"completed":""}`} onClick={toggleComplete} ><i className="fas fa-check"></i></button>
            <button className="btn btn-edit" onClick={editItem}><i className="fas fa-edit"></i></button>
            <button className="btn btn-delete" onClick={deleteItem}><i className="fa fa-trash" ></i></button>
        </div>
    </li>)

}
export default Item;