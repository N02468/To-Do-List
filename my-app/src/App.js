import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to handle adding a task
  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask('');
  };

  // Function to toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: '10px', width: '200px' }}
        />
        <button onClick={addTask} style={{ padding: '10px 20px', marginLeft: '10px' }}>
          Add Task
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              textDecoration: t.completed ? 'line-through' : 'none',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span onClick={() => toggleTask(index)}>{t.text}</span>
            <button onClick={() => deleteTask(index)} style={{ padding: '5px 10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
