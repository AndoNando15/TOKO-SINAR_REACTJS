import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Menu from '../Header/Menu';
import AboutUs from '../Header/AboutUs';
import Order from '../Header/Order';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Menu" Menu element={<Menu />} />
        <Route path="/AboutUs" AboutUs element={<AboutUs />} />
        <Route path="/Order" Order element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}
