import {useContext,useState} from "react";
import { TodoStore } from "../context/TodoContext";

const SearchTodo = () => {
    const {search,setSearch,handleSearch}=useContext(TodoStore);
    const [input,setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
       <section>
        <article>
            <h1>Search Todos</h1>
            <form>
                <input 
                type="text"
                
                placeholder="Search Todo...."
                value={input}
                onChange={e => {
                    setInput(e.target.value);
                    handleSearch(e.target.value)
                }}
                />
            </form>
        </article>
       </section>
    )
}

export default SearchTodo;