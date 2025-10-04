# Student Task Manager

A comprehensive web application built with React that helps students organize, manage, and track their tasks efficiently. This project demonstrates modern React development practices including hooks, context API, component composition, and testing.

## 🚀 Features

### Core Functionality
- ✅ **Task Management**: Create, edit, delete, and mark tasks as complete
- 🏷️ **Categorization**: Organize tasks by Work, Study, or Personal categories
- 🎯 **Priority Levels**: Set task priorities (High, Medium, Low)
- 📅 **Due Dates**: Set and track task deadlines with overdue warnings
- 🔍 **Search & Filter**: Find tasks by title/description and filter by category
- 💾 **Persistent Storage**: Tasks saved to localStorage for persistence

### User Experience
- 🌙 **Dark/Light Mode**: Toggle between themes for comfortable viewing
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 📊 **Progress Tracking**: Visual completion statistics and progress bars
- ⚡ **Real-time Updates**: Instant UI updates with smooth animations
- 🎨 **Modern UI**: Clean, intuitive interface built with Bootstrap 5

### Advanced Features
- 🔄 **State Management**: Context API for global state management
- 🪝 **Custom Hooks**: useLocalStorage hook for data persistence
- ✅ **Form Validation**: Client-side validation with error messages
- 🧪 **Comprehensive Testing**: Unit and integration tests with React Testing Library

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Bootstrap 5, CSS3, Font Awesome icons
- **State Management**: React Context API, useReducer
- **Storage**: localStorage with custom hooks
- **Testing**: React Testing Library, Jest
- **Build Tool**: Create React App

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git (for cloning the repository)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd student-task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header.js        # Navigation and search/filter controls
│   ├── TaskForm.js      # Form for adding new tasks
│   ├── TaskList.js      # Container for displaying tasks
│   ├── TaskItem.js      # Individual task card component
│   └── Footer.js        # Footer with statistics
├── context/             # React Context for state management
│   └── TaskContext.js   # Global task state and actions
├── hooks/               # Custom React hooks
│   └── useLocalStorage.js # Hook for localStorage persistence
├── styles/              # CSS stylesheets
│   └── App.css         # Global styles and theme definitions
├── __tests__/           # Test files
│   ├── App.test.js     # Integration tests
│   ├── TaskForm.test.js # TaskForm component tests
│   └── TaskItem.test.js # TaskItem component tests
├── App.js              # Main application component
├── index.js            # Application entry point
└── setupTests.js       # Test configuration
```

## 🧪 Testing

The project includes comprehensive tests covering:

### Test Coverage
- **Component Rendering**: Ensures all components render correctly
- **User Interactions**: Tests form submissions, button clicks, and input changes
- **Form Validation**: Validates required fields and date constraints
- **Task Operations**: Tests adding, editing, deleting, and completing tasks
- **Search & Filter**: Tests search functionality and category filtering
- **Integration**: End-to-end user workflows

### Running Tests

```bash
# Run all tests
npm test

# Run tests in coverage mode
npm test -- --coverage --watchAll=false

# Run specific test file
npm test TaskForm.test.js

# Run tests without watch mode
npm test -- --watchAll=false
```

## 💡 Usage Guide

### Adding a Task
1. Fill out the "Add New Task" form on the left side
2. Enter a title and description (required fields)
3. Select a category (Work, Study, Personal)
4. Set priority level (High, Medium, Low)
5. Optionally set a due date
6. Click "Add Task" to create the task

### Managing Tasks
- **Complete**: Click the green checkmark button to mark as complete
- **Edit**: Click the edit button to modify task details
- **Delete**: Click the delete button to remove the task
- **Undo**: Click undo on completed tasks to mark as pending

### Organizing Tasks
- **Search**: Use the search bar in the header to find specific tasks
- **Filter**: Use the category dropdown to filter by Work, Study, or Personal
- **Categories**: Tasks are automatically organized by completion status

### Customization
- **Dark Mode**: Toggle between light and dark themes using the moon/sun icon
- **Responsive**: The layout automatically adapts to your screen size

## 🎯 Learning Objectives Achieved

This project demonstrates proficiency in:

### React Fundamentals
- ✅ Component composition and reusability
- ✅ Props and state management
- ✅ Event handling and form management
- ✅ Conditional rendering

### Advanced React Concepts
- ✅ Context API for global state management
- ✅ Custom hooks for logic reuse
- ✅ useReducer for complex state logic
- ✅ Effect hooks for side effects

### Modern Development Practices
- ✅ Component-based architecture
- ✅ Separation of concerns
- ✅ Responsive design principles
- ✅ Accessibility considerations
- ✅ Testing best practices

### JavaScript & Web Technologies
- ✅ ES6+ features (destructuring, arrow functions, modules)
- ✅ localStorage API for data persistence
- ✅ Form validation and error handling
- ✅ CSS Grid and Flexbox layouts

## 🚀 Future Enhancements

Potential improvements and features to add:

- **Backend Integration**: Connect to a real API for data persistence
- **User Authentication**: Add user accounts and task sharing
- **Task Reminders**: Email or push notifications for due dates
- **Drag & Drop**: Reorder tasks with drag and drop functionality
- **Task Templates**: Create reusable task templates
- **Export/Import**: Export tasks to CSV or import from other apps
- **Collaboration**: Share tasks with team members
- **Advanced Filtering**: Filter by date ranges, priority, etc.

## 📝 License

This project is created for educational purposes. Feel free to use and modify as needed.

---

**Happy Task Managing! 📝✨**