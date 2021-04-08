import React from 'react';

const Form = ({ setInputText, toDos, setToDos, inputText }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setToDos([
            ...toDos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    }

    return (
        <div>
            <form className="m-2 p-2">
                <div className="row">
                    <div className="col-sm-8 col-md-4 ">
                        <input className="form-control" type="text" value={inputText} onChange={inputTextHandler}></input>
                    </div>
                    <div className="col  mt-2 mt-md-0">
                        <button className="btn btn-primary mx-2" type="submit" onClick={submitToDoHandler}>Add task</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;