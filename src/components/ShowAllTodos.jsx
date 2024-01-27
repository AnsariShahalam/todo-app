import {useContext} from "react";
import { TodoStore } from "../context/TodoContext";
import {MdDeleteForever} from "react-icons/md"
import {BiSolidEdit} from "react-icons/bi"

const ShowAllTodos = () => {
    const {
        todolist,
        handleReadOverlay,
        setShowdeleteOverlay,
        setShowreadOverlay,
        setDeleteTodo,
        setUpdateTodo,
        showAddTodo,
        setShowupdateOverlay,
        search,
      } = useContext(TodoStore)
    // console.log("from show todos :", todolist);

    if(showAddTodo == true)
    return (
        <section className=" w-[100%] flex justify-center items-center p-8">
            <article className="flex flex-wrap gap-6 w-[100%] justify-center">
             { todolist.length == 0  ?  ( <h2 className="text-2xl text-slate-400 font-semibold">
                No Todo Available!!!
             </h2> 
             ) : ( todolist.map(value => {
                    // Destructuring from individaual Todo object
                    const {
                        id,
                        title,
                        details,
                        n_characters,
                        n_words,
                        n_sentences,
                        createAt,
                    } =value;
                    return (
                    <div className="flex flex-col w-[90%] lg:w-[25%] gap-6 p-4 rounded-md
                    border-slate-300 border-2 shadow-lg
                    hover:shadow-2xl group hover:border-red-600" 
                    onClick={()=>handleReadOverlay(id)}>
                        <h3 className="text-3xl bg-slate-200 rounded-md p-2 font-semibold text-center">{title}</h3>
                        <p className="text-base bg-slate-200 p-2 text-ellipsis whitespace-nowrap overflow-hidden">{details}</p>
                        <div className="group-hover:flex hidden flex-col gap-8 justify-center items-center">
                            <div className="text-sm flex gap-3">
                                <span className="text-center">Characters : {n_characters}</span>
                                <span className="text-center">Words : {n_words}</span>
                                <span className="text-center">Sentences: {n_sentences}</span>
                            </div>
                        <div className="flex justify-around w-[100%]">
                            <button className="bg-pink-500 p-2 rounded-lg hover:bg-pink-700" onClick={() => {
                             setShowdeleteOverlay(true);
                             setDeleteTodo(id);
                             } }>
                            <MdDeleteForever className="text-2xl text-white"/>
                            </button>
                            <button className="bg-green-500 p-2 rounded-lg hover:bg-green-700"
                            onClick={()=> {
                                setShowupdateOverlay(true);
                                setUpdateTodo({id,title,details,createAt});
                            }}>
                                <BiSolidEdit className="text-2xl text-white"/>
                            </button>
                        </div>
                        </div>
                    </div>
                    );
                })
                )} 
            </article>
        </section>
    );
    else {
        return (
            <section className=" w-[100%] flex justify-center items-center p-8">
                <article className="flex flex-wrap gap-6 w-[100%] justify-center">
                 { search.length == 0  ?  ( <h2 className="text-2xl text-slate-400 font-semibold">
                    No Search Todo Available!!!
                 </h2> 
                 ) : ( search.map(value => {
                        // Destructuring from individaual Todo object
                        const {
                            id,
                            title,
                            details,
                            n_characters,
                            n_words,
                            n_sentences,
                            createAt,
                        } =value;
                        return (
                        <div className="flex flex-col w-[90%] lg:w-[25%] gap-6 p-4 rounded-md
                        border-slate-300 border-2 shadow-lg
                        hover:shadow-2xl group hover:border-red-600" 
                        onClick={()=>handleReadOverlay(id)}>
                            <h3 className="text-3xl bg-slate-200 rounded-md p-2 font-semibold text-center">{title}</h3>
                            <p className="text-base bg-slate-200 p-2 text-ellipsis whitespace-nowrap overflow-hidden">{details}</p>
                            <div className="group-hover:flex hidden flex-col gap-8 justify-center items-center">
                                <div className="text-sm flex gap-3">
                                    <span className="text-center">Characters : {n_characters}</span>
                                    <span className="text-center">Words : {n_words}</span>
                                    <span className="text-center">Sentences: {n_sentences}</span>
                                </div>
                            <div className="flex justify-around w-[100%]">
                                <button className="bg-pink-500 p-2 rounded-lg hover:bg-pink-700" onClick={() => {
                                 setShowdeleteOverlay(true);
                                 setDeleteTodo(id);
                                 } }>
                                <MdDeleteForever className="text-2xl text-white"/>
                                </button>
                                <button className="bg-green-500 p-2 rounded-lg hover:bg-green-700"
                                onClick={()=> {
                                    setShowupdateOverlay(true);
                                    setUpdateTodo({id,title,details,createAt});
                                }}>
                                    <BiSolidEdit className="text-2xl text-white"/>
                                </button>
                            </div>
                            </div>
                        </div>
                        );
                    })
                    )} 
                </article>
            </section>
        );
    }
};

export default ShowAllTodos;
