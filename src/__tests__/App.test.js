import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { TaskProvider } from '../context/TaskContext';

const renderApp = () => {
  return render(
    <TaskProvider>
      <App />
    </TaskProvider>
  );
};

describe('App Integration Tests', () => {
  test('renders main components', () => {
    renderApp();
    
    expect(screen.getByRole('link', { name: /student task manager/i })).toBeInTheDocument();
    expect(screen.getByText(/add new task/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search tasks/i)).toBeInTheDocument();
  });

  test('shows empty state when no tasks exist', () => {
    renderApp();
    
    expect(screen.getByText(/no tasks found/i)).toBeInTheDocument();
    expect(screen.getByText(/add your first task to get started/i)).toBeInTheDocument();
  });

  test('can add and display a new task', async () => {
    const user = userEvent.setup();
    renderApp();
    
    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const submitButton = screen.getByRole('button', { name: /add task/i });
    
    await user.type(titleInput, 'Integration Test Task');
    await user.type(descriptionInput, 'This is a test task');
    await user.click(submitButton);
    
    expect(screen.getByText('Integration Test Task')).toBeInTheDocument();
    expect(screen.getByText('This is a test task')).toBeInTheDocument();
  });

  test('can filter tasks by search term', async () => {
    const user = userEvent.setup();
    renderApp();
    
    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const submitButton = screen.getByRole('button', { name: /add task/i });
    
    await user.type(titleInput, 'Searchable Task');
    await user.type(descriptionInput, 'This task can be searched');
    await user.click(submitButton);
    
    const searchInput = screen.getByPlaceholderText(/search tasks/i);
    await user.type(searchInput, 'Searchable');
    
    expect(screen.getByText('Searchable Task')).toBeInTheDocument();
    
    await user.clear(searchInput);
    await user.type(searchInput, 'NonExistent');
    
    expect(screen.queryByText('Searchable Task')).not.toBeInTheDocument();
  });

  test('can filter tasks by category', async () => {
    const user = userEvent.setup();
    renderApp();
    
    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const categorySelect = screen.getByLabelText(/category/i);
    const submitButton = screen.getByRole('button', { name: /add task/i });
    
    await user.type(titleInput, 'Work Task');
    await user.type(descriptionInput, 'This is a work task');
    await user.selectOptions(categorySelect, 'Work');
    await user.click(submitButton);
    
    const categoryFilter = screen.getByDisplayValue('All');
    await user.selectOptions(categoryFilter, 'Work');
    
    expect(screen.getByText('Work Task')).toBeInTheDocument();
    
    await user.selectOptions(categoryFilter, 'Personal');
    expect(screen.queryByText('Work Task')).not.toBeInTheDocument();
  });
});