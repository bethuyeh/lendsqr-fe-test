import Login from './components/Login'
import './App.scss'
import  SearchBox  from './components/Searchbox'
import Navbar from './components/Navbar';
import Dashboard from './components/Dash';
import MainPage from './components/MainPage';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  

  return (
    <Router>
        <Routes>
        {/* <Route path="/" element={<Login  onLoginSuccess={() => {
          window.location.href = '/main';
        }}/>}/> */}
        <Route path="/" element={<MainPage/>}/>
        {/* <Route path="/dash" element={<Dashboard/>}/> */}
        </Routes>
    </Router>
  );
};

export default App;
