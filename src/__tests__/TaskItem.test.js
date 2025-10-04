import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskItem from '../components/TaskItem';
import { TaskProvider } from '../context/TaskContext';

const mockTask = {
  id: '1',
  title: 'Test Task',
  description: 'Test Description',
  category: 'Study',
  priority: 'High',
  completed: false,
  dueDate: '2024-12-31',
  createdAt: '2024-01-01T00:00:00.000Z'
};

const renderWithProvider = (component) => {
  return render(
    <TaskProvider>
      {component}
    </TaskProvider>
  );
};

describe('TaskItem', () => {
  test('renders task information correctly', () => {
    renderWithProvider(<TaskItem task={mockTask} />);
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Study')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
  });

  test('shows complete button for pending tasks', () => {
    renderWithProvider(<TaskItem task={mockTask} />);
    
    expect(screen.getByRole('button', { name: /complete/i })).toBeInTheDocument();
  });

  test('shows undo button for completed tasks', () => {
    const completedTask = { ...mockTask, completed: true };
    renderWithProvider(<TaskItem task={completedTask} />);
    
    expect(screen.getByRole('button', { name: /undo/i })).toBeInTheDocument();
  });

  test('enters edit mode when edit button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<TaskItem task={mockTask} />);
    
    const editButton = screen.getByRole('button', { name: /edit/i });
    await user.click(editButton);
    
    expect(screen.getByDisplayValue('Test Task')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  test('shows delete button', () => {
    renderWithProvider(<TaskItem task={mockTask} />);
    
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  test('displays overdue warning for past due dates', () => {
    const overdueTask = {
      ...mockTask,
      dueDate: '2020-01-01'
    };
    
    renderWithProvider(<TaskItem task={overdueTask} />);
    
    expect(screen.getByText(/overdue/i)).toBeInTheDocument();
  });
});