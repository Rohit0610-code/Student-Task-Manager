import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask, toggleComplete } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description,
    category: task.category,
    priority: task.priority,
    dueDate: task.dueDate || ''
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'info';
      default: return 'secondary';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Work': return 'fa-briefcase';
      case 'Study': return 'fa-graduation-cap';
      case 'Personal': return 'fa-user';
      default: return 'fa-tasks';
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask({ ...task, ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      title: task.title,
      description: task.description,
      category: task.category,
      priority: task.priority,
      dueDate: task.dueDate || ''
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString();
  };

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

  return (
    <div className={`card h-100 ${task.completed ? 'opacity-75' : ''} ${isOverdue ? 'border-danger' : ''}`}>
      <div className="card-body">
        {isEditing ? (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              name="title"
              value={editData.title}
              onChange={handleChange}
            />
            <textarea
              className="form-control mb-2"
              name="description"
              rows="2"
              value={editData.description}
              onChange={handleChange}
            ></textarea>
            <select
              className="form-select mb-2"
              name="category"
              value={editData.category}
              onChange={handleChange}
            >
              <option value="Work">Work</option>
              <option value="Study">Study</option>
              <option value="Personal">Personal</option>
            </select>
            <select
              className="form-select mb-2"
              name="priority"
              value={editData.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <input
              type="date"
              className="form-control mb-3"
              name="dueDate"
              value={editData.dueDate}
              onChange={handleChange}
            />
            <div className="d-flex gap-2">
              <button className="btn btn-success btn-sm" onClick={handleSave}>
                <i className="fas fa-save"></i> Save
              </button>
              <button className="btn btn-secondary btn-sm" onClick={handleCancel}>
                <i className="fas fa-times"></i> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h6 className={`card-title mb-0 ${task.completed ? 'text-decoration-line-through' : ''}`}>
                <i className={`fas ${getCategoryIcon(task.category)} me-2`}></i>
                {task.title}
              </h6>
              <span className={`badge bg-${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
            </div>
            
            <p className={`card-text ${task.completed ? 'text-decoration-line-through' : ''}`}>
              {task.description}
            </p>
            
            <div className="mb-3">
              <small className="text-muted">
                <i className="fas fa-tag me-1"></i>
                {task.category}
              </small>
              {task.dueDate && (
                <small className={`text-muted ms-3 ${isOverdue ? 'text-danger fw-bold' : ''}`}>
                  <i className="fas fa-calendar me-1"></i>
                  Due: {formatDate(task.dueDate)}
                  {isOverdue && <span className="ms-1">(Overdue!)</span>}
                </small>
              )}
            </div>
            
            <div className="d-flex gap-2">
              <button
                className={`btn btn-sm ${task.completed ? 'btn-warning' : 'btn-success'}`}
                onClick={() => toggleComplete(task.id)}
              >
                <i className={`fas ${task.completed ? 'fa-undo' : 'fa-check'}`}></i>
                {task.completed ? ' Undo' : ' Complete'}
              </button>
              
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={handleEdit}
              >
                <i className="fas fa-edit"></i> Edit
              </button>
              
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => deleteTask(task.id)}
              >
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;