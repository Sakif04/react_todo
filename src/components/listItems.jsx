import Item from "./item";
const ListItems=({items,todos,setTodos,setInput})=>
{

return(
    <section id="list-items">
        <ul id="todo-list">
            {items.map((item)=>
            <Item item={item} key={item.id} todos={todos}  setTodos={setTodos} setInput={setInput}></Item>)}
        </ul>  
    </section>
)

}
export default ListItems;