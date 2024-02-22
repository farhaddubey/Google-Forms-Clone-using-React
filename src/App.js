import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import FormC from './components/FormC';
import QuestionForm from './components/QuestionForm';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='/qform/' element={<QuestionForm/>}/>
          <Route path='/form/:id' element={<FormC/>}/>
          {/* <Route path='/response' element={<Userform/>}/> */}
        </Routes>
      </Router>
      {/* <MuiTypography/>
      <MuiButton/>
      <MuiTextField/> */}
  
    </div>
  );
}

export default App;