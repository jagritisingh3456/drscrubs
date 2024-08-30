import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ForgotPassword from './components/ForgotPassword';
import Wishlist from './components/Wishlist';
import Compare from './components/Compare';
import SignOut from './components/SignOut';
import About from './components/About';
import ShopListview from './components/ShopListview';
import Error from './components/Error';
import ShopGridview from './components/ShopGridview';
import ShopLeftsidebar from './components/ShopLeftsidebar';
import ShopRightsidebar from './components/ShopRightsidebar';
import ShopTopfilter from './components/ShopTopfilter';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="productDetails" element={<ProductDetails/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={< Register/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="forgotPassword" element={<ForgotPassword/>}/>
      <Route path="Wishlist" element={<Wishlist/>}/>
      <Route path="compare" element={<Compare/>}/>
      <Route path="SignOut" element={<SignOut/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="ShopListview" element={<ShopListview/>}/>
      
      <Route path="shopLeftsidebar" element={<ShopLeftsidebar/>}/>
      <Route path="shopRightsidebar" element={<ShopRightsidebar/>}/>
      <Route path="shopTopfilter" element={<ShopTopfilter/>}/>
      <Route path="error" element={<Error/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
