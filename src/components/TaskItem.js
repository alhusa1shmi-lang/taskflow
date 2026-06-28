import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="task-checkbox"
      />
      <div className="task-content">
        <p className="task-text">{task.text}</p>
        <span className="task-date">{task.createdAt}</span>
      </div>
      <button
        className="task-delete"
        onClick={() => onDelete(task.id)}
        title="حذف المهمة"
      >
        ✕
      </button>
    </div>
  );
}

export default TaskItem;
