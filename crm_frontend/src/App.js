
import './App.css';
import { Button } from 'react-bootstrap'
import LoginAuth from './Authcomponents/LoginAuth';
import Header from './DefaultLayout/Header';
import Footer from './DefaultLayout/Footer';
import Dashboard from './DefaultLayout/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
        <Routes>
          <Route path='/' element={<LoginAuth/>}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          {/* <LoginAuth /> */}
        </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
