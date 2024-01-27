import { createContext, useState } from "react";

export const TodoStore = createContext([]);

const TodoContext = ({children}) =>{

  // Basic requirements
  const [todolist,setTodolist] = useState([]);


  // Overlay States 
  // States to handle read overlay
  const [showreadoverlay, setShowreadOverlay] = useState(false);
  const [showTodoData, setShowTodoData] = useState({});


  // States to handle Delete overlay
  const [showdeleteoverlay, setShowdeleteOverlay] = useState(false);
  // we will use deletetodo state to store id of todo that we want to delete!
  const [deleteTodo, setDeleteTodo] = useState(false);

  // States to handle Update Overlay

  const [showupdateoverlay,setShowupdateOverlay] = useState(false);
  // we will use updatetodo state to store data of todo that we want to update!
  const [updateTodo,setUpdateTodo] = useState(false)

  // lets maintain state to store searched text
  const [search,setSearch] = useState([]);

  // lets maintain state to show and hide AddTodo Component
  const [showAddTodo,setShowaddtodo] = useState(true);

  //if we need changes , we will do while working projects
  const handleAddTodo = ({
    title,
    details,
    n_characters,
    n_words,
    n_sentences,
  }) => {
    console.log(title,details,n_characters,n_words,n_sentences);
    setTodolist([
      ...todolist,
      {
        id:`${new Date()}`,
        title,
        details,
        n_characters,
        n_words,
        n_sentences,
        createAt : `Date : ${new Date().toLocaleDateString()} | Time : ${new Date().toLocaleTimeString()}`
      }
    ])
  };
  const handleReadTodo = () => {};


  const handleDeleteTodo = id => {
   console.log("handleDeleteTodo id :", id);
   setTodolist(todolist.filter(value => value.id != id));
   setShowdeleteOverlay(false);
   setShowreadOverlay(false);
  };


  const handleUpdateTodo = ({id,title,details, createAt}) => {
    // console.log("updating...");
      //  console.log(title);
      //  console.log(details);
      console.log(todolist);
      const Words = details.split(" ").length;
      const Character = details.split("").length;
      const Sentences = details.split(".").length - 1;
      console.log(
        todolist.filter(value => {
          if(value.id == id) {
            value.title = title;
            value.details = details;
            value.updateAt = `Date : ${new Date().toLocaleDateString()} | Time : ${new Date().toLocaleTimeString()}`;
            value.n_characters = Character;
            value.n_words = Words;
            value.n_sentences = Sentences;
          }
        })
      ); 
      setTodolist(todolist);
      setShowupdateOverlay(false);
      console.log(todolist);
  };

  // Control extra Screen 

  const handleReadOverlay = id => {
    console.log(id);

    const data = todolist.filter(value => value.id === id)
    setShowTodoData({ ...data[0] } )
    setShowreadOverlay(true)
  }


  const handleSearch = searchdata => {
    // console.log(searchdata);
    setSearch(
      todolist.filter(value => {
        if (
        value.title.toLowerCase().includes(searchdata.toLowerCase()) || 
        value.details.toLowerCase().includes(searchdata.toLowerCase())
        )
        return true;
      })
    )
  }

  return (
    <TodoStore.Provider
     value={{
      todolist,
      handleAddTodo,
      handleReadTodo,
      handleDeleteTodo,
      handleUpdateTodo,
      handleReadOverlay,
      showTodoData,
      showreadoverlay,
      setShowreadOverlay,                                                                                               
      deleteTodo,
      showdeleteoverlay,
      setShowdeleteOverlay,
      setDeleteTodo,
      showdeleteoverlay, 
      setShowdeleteOverlay,
      updateTodo,
      setUpdateTodo,
      setShowupdateOverlay,
      showupdateoverlay,
      updateTodo,
      setUpdateTodo,
      showAddTodo,
      setShowaddtodo,
      search,
      setSearch,
      handleSearch,
      }}
      >
      {children}
    </TodoStore.Provider>
  )
}

export default TodoContext;