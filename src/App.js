import React from 'react';
import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import './style-sheets/TaskPanel.css';
import Task from './components/Task.js';

function App() {
  //const [input, setInput] = useState('Task..');
    return (
      <div className='App'>
        <div className='task-panel'>
          <h1>Todo list</h1>
          <div className='task-list'>
            <table>
              <tr><Task /></tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
export default App;
