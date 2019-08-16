import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Chat from '@/components/Chat'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Chat} />
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

export default App
