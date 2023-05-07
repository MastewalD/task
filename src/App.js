import { BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom';
import Home from './component/signup_pages/Home';
import Register from './component/signup_pages/Register';
import Login from "./component/signup_pages/Login"
import Add_blog from './component/blog_pages/Add_blog';
import './App.css';
function App() {
  return (
    <div className="App">
    <Router>
      <Link to="/register">singup</Link>
      
      <Link to="/home">Home</Link>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add_blog' element={<Add_blog/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    
    </Router>
        
    </div>
  );
}

export default App;
