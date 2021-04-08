import React from 'react';

const ToDo = ({ text, id, toDo, toDos, setToDos }) => {

    let completedText ="Is Completed";

    const deleteHandler = () => {
        setToDos(toDos.filter((el) => el.id !== toDo.id));
    };
    const completeHandler = () => {
        setToDos(
            toDos.map((item) => {
                if (item.id === toDo.id) {
                    return {
                        ...item, completed: !item.completed,
                    };
                }
                return item;
            })
        );
    }

    return (
        <div>
            <li className={`${toDo.completed ? "completed" : ""}`}>
                <div className="row my-3">
                    <button className={` 
                     completed-btn to-do-btn ${toDo.completed ? "isCompleted" : ""}`} onClick={completeHandler}>
                        <i className="fas fa-check"></i>
                    </button>
                    <button className="delete-btn to-do-btn" onClick={deleteHandler}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <p className= "text">{text}</p>
                    <p id="completed-text" className="font-weight-bold ml-2">{toDo.completed?completedText:""}</p>
                </div>


            </li>

        </div>

    )
}

export default ToDo;