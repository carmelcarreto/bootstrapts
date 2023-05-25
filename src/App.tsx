import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';

export const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
       </Routes>
    </>
 );
};

