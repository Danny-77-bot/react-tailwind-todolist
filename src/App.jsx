import React, { useState } from 'react';

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setToDoList([
        ...toDoList,
        { id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1, taskName: inputValue, complete: false }
      ]);
      setInputValue('');
    }
  };

  const handleDelete = (id) => {
    setToDoList(toDoList.filter(todo => todo.id !== id));
  };

  const handleComplete = (id) => {
    setToDoList(
      toDoList.map(task =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  return (
    <div className='flex flex-col bg-black text-white h-auto w-auto px-20 py-4 mx-20 my-20'>
        <div>
            <h1 className='text-center my-7'>This is simple todo list app</h1>
        </div>
      <div className='flex w-64 items-center justify-center mx-20'>
        <input
          onChange={handleInputChange}
          value={inputValue}
          className='bg-black text-white flex-1 rounded'
          type="text"
          placeholder='Add task'
        />
        <button
          className='bg-green-400 px-10 py-2 mt-2 rounded pointer'
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      {toDoList.map(task => (
        <div
          key={task.id}
          style={{ backgroundColor: task.complete ? 'gray' : 'black' }}
          className='flex gap-19 items-center p-3 my-3'
        >
          <h1 className='w-40'>{task.taskName}</h1>
          <div  onClick={() => handleDelete(task.id)} className='mx-20 p-3 cursor-pointer'><p>X</p></div>
          <div className='cursor-pointer' onClick={() => handleComplete(task.id)}>Complete</div>
        </div>
      ))}
    </div>
  );
}
