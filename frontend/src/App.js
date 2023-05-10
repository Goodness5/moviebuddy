import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import PageLayout from "./components/pagelayout.jsx";
import Landingpage from './features/landingpage';

function App() {
  return (
    <Router>
      <PageLayout>
        <Route exact path="/" component={Landingpage} />
      </PageLayout>
    </Router>
  );
}

export default App;
