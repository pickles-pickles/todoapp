import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDos, setToDos }) => {
    return (
        <div>
            <ul className="d-flex flex-column">
                {toDos.map( (toDo) => (
                        <ToDo
                            toDo={toDo}
                            setToDos={setToDos}
                            toDos={toDos}
                            key={toDo.id}
                            text={toDo.text}   
                        />))}
            </ul>

        </div>
    )
}

export default ToDoList;