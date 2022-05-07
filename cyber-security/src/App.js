import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Page404 from './Pages/404Page/Page404';
import About from './Pages/About/About';
import Services from './Pages/Home/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import ContactUs from './Pages/ContactUs/ContactUs';
import Checkout from './Pages/Checkout/Checkout';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/service/:serviceId' element={<Checkout/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='*' element={<Page404/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
