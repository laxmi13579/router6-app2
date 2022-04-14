import './App.css';
import { Routes, Route} from 'react-router-dom';
import Layout from './components/pages/Layout';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Product from './components/pages/Product';
import Home from './components/pages/Home';
import ProductLayout from './components/pages/ProductLayout';
import ProductDetail from './components/pages/ProductDetail';


function App() {
  
  return (
    <>
    <Routes>
       <Route path='/' element={<Layout/>}>
         <Route path='about' element={<About/>} />
         <Route path='contact' element={<Contact/>} />
         <Route path='product' element={<ProductLayout/>} >
           <Route index element={<Product/>} />
           <Route path=':category' element={<ProductDetail/>} />
         </Route>
         <Route index element={<Home/>} />
       </Route>
       <Route path='*' element={<h1>page not found</h1>}/>
    </Routes>
    </>
  );
}

export default App;
