import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChessGameComponent from './component/ChessGameComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<ChessGameComponent />);