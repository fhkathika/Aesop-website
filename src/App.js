import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Home/NavBar/NavBar';
import Banner from './Components/Home/Banner/Banner';
import ToDo from './Components/Home/ToDo/ToDo';
import Blog from './Components/Home/Blog/Blog';
import VideoBlog from './Components/Home/Blog/VideoBlog';
import StoreLocator from './Components/Home/StoreLocator/StoreLocator';
import QuoteBlog from './Components/Home/QuoteBlog/QuoteBlog';
import Footer from './Components/Home/Footer/Footer';
import Product from './Components/Home/Card/Product';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Banner></Banner>
    <Product></Product>
     <Blog></Blog>
     <VideoBlog></VideoBlog>
     <StoreLocator></StoreLocator>
     <QuoteBlog></QuoteBlog>
     <Footer></Footer>
     {/* <ToDo></ToDo> */}
    </div>
  );
}

export default App;
