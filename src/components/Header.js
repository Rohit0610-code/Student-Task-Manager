import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const Header = ({ searchTerm, setSearchTerm, categoryFilter, setCategoryFilter }) => {
  const { darkMode, toggleDarkMode } = useTaskContext();

  const categories = ['All', 'Work', 'Study', 'Personal'];

  return (
    <header className="bg-primary text-white">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <i className="fas fa-tasks me-2"></i>
            Student Task Manager
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto d-flex align-items-center">
              <div className="nav-item me-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="nav-item me-3">
                <select
                  className="form-select"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                className="btn btn-outline-light"
                onClick={toggleDarkMode}
                title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              >
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;