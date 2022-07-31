import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer';


import './App.css';
import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
