

const Form=({setInputText,name,setTodos,input,todos,filteredList,setFilteredList,filter,setFilter,filterOptions})=>
{   //filter options 
    
 
    //text Change handle function
    const handleChange=(e)=>{
            setInputText(e.target.value)
    };
 
 
    //form button effects
    const clickHandler=(e)=>{
        e.preventDefault();
        if (input)
        {
        setTodos([...todos,{text:input,completed:false,id:todos.length}]);
        setInputText("");}
    }

    const filterHandle=(e)=>{
        const status=e.target.value
        setFilter(status);
    }

    return(
    <form action="">
    <header id="todo-header">
        <h1 id="header" >{name}'s To-Do List </h1>
    </header>
    <section id="list">
        <input id="list-input" type="text" value={input} onChange={handleChange}/>
        <button onClick={clickHandler} id="add-btn" type="submit"><i className="fas fa-plus"></i></button>
        <select name="todos" id="filter-options" onChange={filterHandle} >
            {filterOptions.map((option,id)=><option key={id} value={option}>{option}</option>)}
        </select>
    </section>
    </form>)
}
export default Form;