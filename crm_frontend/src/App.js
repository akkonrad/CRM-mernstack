
import './App.css';
import {Button} from 'react-bootstrap'
import LoginAuth from './Authcomponents/LoginAuth';
import Header from './DefaultLayout/Header';
import Footer from './DefaultLayout/Footer';
import Dashboard from './DefaultLayout/Dashboard';


function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard/>
      {/* <LoginAuth /> */}
      <Footer/>
    </div>
  );
}

export default App;
