# React + Vite Drag and Drop Task Manager

A modern task management application built with React and Vite that features drag-and-drop functionality for managing todo and completed tasks.

## Features

- **Task Management**
  - View and manage todo tasks
  - Mark tasks as completed via drag-and-drop or checkbox
  - Move completed tasks back to todo list
  - Responsive and modern UI design

- **Drag and Drop**
  - Intuitive drag-and-drop interface using React DnD
  - Visual feedback during drag operations
  - Smooth transitions between task states

- **Modern UI**
  - Clean and modern interface with Tailwind CSS
  - Responsive layout that works on all screen sizes
  - Beautiful backdrop blur effects and gradients
  - Interactive hover states and transitions

## Technologies Used

- **React 18.3.1**
  - Modern functional components
  - React Hooks for state management
  - Strict Mode enabled

- **React DnD 16.0.1**
  - HTML5 drag and drop backend
  - Custom drag and drop hooks
  - Interactive drag previews

- **Tailwind CSS 3.4.10**
  - Utility-first CSS framework
  - Custom theme extensions
  - Responsive design utilities

- **Vite 5.4.1**
  - Fast development server
  - Hot Module Replacement (HMR)
  - Optimized production builds

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
  ├── components/
  │   └── Task.jsx          # Individual task component
  ├── pages/
  │   └── RealDnd.jsx      # Main drag-and-drop interface
  ├── App.jsx              # Root component with DnD provider
  ├── main.jsx            # Application entry point
  └── index.css           # Global styles and Tailwind imports
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
