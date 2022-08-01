import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer';


import './App.css';
import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import Rentals from './routes/rentals/Rentals';
import Management from './routes/management/Management';


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='rentals' element={<Rentals />} />
        <Route path='management' element={<Management />} />
      </Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
