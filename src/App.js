import React, { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { useTaskContext } from './context/TaskContext';

function App() {
  const { tasks, darkMode } = useTaskContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || task.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      
      <main className="container my-4">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <TaskForm />
          </div>
          <div className="col-lg-8">
            <TaskList tasks={filteredTasks} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;