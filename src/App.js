import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CountnChoose from './CountnChoose';
import Name from './Name';
import Courses from './Courses';
import FlashCard from './FlashCard';
import NumberQuiz from './NumberQuiz';
import Main from './Main';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Name" element={<Name />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CountnChoose" element={<CountnChoose />} />  
          <Route path="/FlashCard" element={<FlashCard />} />   
          <Route path="/NumberQuiz" element={<NumberQuiz />} />   
          <Route path="/" element={<Main />} />                                                                                                                                                                
        </Routes>
      </Router>
    </div>
  );
}

export default App;
