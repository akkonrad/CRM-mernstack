
import './App.css';
import { Button } from 'react-bootstrap'
import LoginAuth from './Authcomponents/LoginAuth';
import Header from './DefaultLayout/Header';
import Footer from './DefaultLayout/Footer';
import Dashboard from './DefaultLayout/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contextwrapper from './context/ContextWrapper';
import Ticketland from './Ticket Landing page/TicketLand';


function App() {
  return (
    <Contextwrapper>
    <BrowserRouter>
      <div className="App">
          <Header />
        <Routes>
          <Route path='/' element={<LoginAuth/>}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/TicketLanding' element={<Ticketland/>} />
        </Routes>
          <Footer />
      </div>
      </BrowserRouter>
      </Contextwrapper>
  );
}

export default App;
