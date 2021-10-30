
import { useEffect, useState } from 'react';
import Form from "./components/form";
import ListItems from './components/listItems';
import "./css/style.css";

/* eslint-disable react-hooks/exhaustive-deps */
function App({name}) {
const filterOptions=['All','Completed','Uncompleted'];
const [input,setInput]=useState("");
const [todos,setTodos]=useState([]);
const [filterdList,setFilteredList]=useState(todos);
const [filter,setFilter]=useState(filterOptions[0]);

function filterStatus(){
    switch(filter){
        case filterOptions[0]:
            setFilteredList(todos);
            return;
        case filterOptions[1]:
            setFilteredList(todos.filter(
                (todo)=>todo.completed===true));
            return;
        case filterOptions[2]:
            setFilteredList(todos.filter(
                (todo)=>todo.completed!==true));
            return;
        default:
            setFilteredList(todos)
            return;
    }
}

    useEffect(()=>{
    filterStatus();
//
},[filter,todos])
    return (
        <div id="tasklist">
            <Form name={name} setInputText={setInput} todos={todos}  filterOptions={filterOptions} filteredList={filterdList} setFilteredList={setFilteredList} filter={filter} 
            setFilter={setFilter} setTodos={setTodos} input={input} />
            <ListItems  items={filterdList} todos={todos} setTodos={setTodos} setInput={setInput}/>
        </div>
    );
}

export default App;
