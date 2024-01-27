import React, { useContext, useState } from "react";
import { TodoStore } from "../context/TodoContext";

const AddTodo = () => {
    const {todolist,handleAddTodo} = useContext(TodoStore)
    const [title,setTitile] = useState("");
    const [details,setDetails] = useState("");
    // console.log(todolist);

    const handleSubmit = e => {
        e.preventDefault()

      if(title.length != 0) {
        const n_characters = details.split("").length;
        const n_words = details.split(" ").length;
        const n_sentences = details.split(".").length - 1;
         handleAddTodo({title,details,n_characters,n_words,n_sentences})
      }
      else
      {
        alert("Fields are Empty!!!")
      }
      setTitile("");
      setDetails("");
    }

    return (
       <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[70%] lg:w-[50%]">
        <input 
        type="text" 
        placeholder="Title..🙄" 
        value={title}
        className="text-2xl py-1 px-3 outline-none
        border-b-4 focus:border-b-red-400"
        onChange={e => setTitile(e.target.value)}
        />
        <textarea 
        type="text" 
        placeholder="Details..😊"
        value={details}
        className="text-2xl py-1 px-3 outline-none
        border-b-4 focus:border-b-red-400 resize-none"
        onChange={e => setDetails(e.target.value)}
        />
        <button className="text-2xl py-1 px-3 outline-none border-4 bg-red-400 text-white hover:border-green-400 hover:bg-red-700">Create</button>
       </form>
    )
}

export default AddTodo;