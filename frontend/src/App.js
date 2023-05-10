import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Landingpage from './features/landingpage';

function App() {
  return (
    <Router>
     
     <Route path="/" component={() => (
  <div>
    <Landingpage />
  </div>
)} />

      
    </Router>
  );
}

export default App;
