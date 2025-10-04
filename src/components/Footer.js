import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const Footer = () => {
  const { tasks } = useTaskContext();
  
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6>Student Task Manager</h6>
            <p className="mb-0">Stay organized and boost your productivity!</p>
          </div>
          <div className="col-md-6">
            <h6>Task Statistics</h6>
            <div className="row">
              <div className="col-4">
                <small className="text-muted">Total</small>
                <div className="fw-bold">{totalTasks}</div>
              </div>
              <div className="col-4">
                <small className="text-muted">Pending</small>
                <div className="fw-bold text-warning">{pendingTasks}</div>
              </div>
              <div className="col-4">
                <small className="text-muted">Completed</small>
                <div className="fw-bold text-success">{completedTasks}</div>
              </div>
            </div>
            {totalTasks > 0 && (
              <div className="mt-2">
                <small className="text-muted">Completion Rate: </small>
                <span className="fw-bold">{completionRate}%</span>
                <div className="progress mt-1" style={{ height: '4px' }}>
                  <div 
                    className="progress-bar bg-success" 
                    style={{ width: `${completionRate}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <small>&copy; 2025 Student Task Manager. Built with React & Bootstrap.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
