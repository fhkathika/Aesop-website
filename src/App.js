import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Home/NavBar/NavBar';
import ToDo from './Components/Home/ToDo/ToDo';
import Footer from './Components/Home/Footer/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/'>
 <Home ></Home> 
        </Route>
        <Route path='/ourcustomers'>
    <ToDo ></ToDo>
        </Route>
 
      </Switch>
   <Footer></Footer>
   </BrowserRouter>
 
    </div>
  );
}

export default App;
