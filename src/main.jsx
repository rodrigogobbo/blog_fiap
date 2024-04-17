import React from 'react'
import ReactDOM from 'react-dom/client'
import PageHome from './pages/PageHome';
import PagePost from './pages/PagePost';


import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PagePost />
  </React.StrictMode>,
)
