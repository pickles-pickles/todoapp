import React, { useState } from 'react';
import Form from './Form';
import ToDoList from './ToDoList';



const ToDoWrapper = () => {

    const [inputText, setInputText] = useState("");
    const [toDos, setToDos] = useState([]);
    return(
        <div>
<h1 className="mx-2"> To do list</h1>
<Form setInputText={setInputText} toDos={toDos} setToDos={setToDos} inputText={inputText} />
<ToDoList toDos={toDos} setToDos={setToDos}/>
        </div>
    )
}

export default ToDoWrapper;