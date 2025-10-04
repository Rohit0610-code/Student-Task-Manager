import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  if (tasks.length === 0) {
    return (
      <div className="text-center py-5">
        <i className="fas fa-clipboard-list fa-3x text-muted mb-3"></i>
        <h4 className="text-muted">No tasks found</h4>
        <p className="text-muted">Add your first task to get started!</p>
      </div>
    );
  }

  return (
    <div>
      {pendingTasks.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-3">
            <i className="fas fa-clock text-warning me-2"></i>
            Pending Tasks ({pendingTasks.length})
          </h4>
          <div className="row">
            {pendingTasks.map(task => (
              <div key={task.id} className="col-md-6 mb-3">
                <TaskItem task={task} />
              </div>
            ))}
          </div>
        </div>
      )}

      {completedTasks.length > 0 && (
        <div>
          <h4 className="mb-3">
            <i className="fas fa-check-circle text-success me-2"></i>
            Completed Tasks ({completedTasks.length})
          </h4>
          <div className="row">
            {completedTasks.map(task => (
              <div key={task.id} className="col-md-6 mb-3">
                <TaskItem task={task} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;