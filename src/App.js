
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Reviews from './components/Reviews/Reviews';
import Categories from './components/Categories/Categories';
import { useState } from 'react';
import Category from './components/Category/Category';


function App() {
  const [categories, setCategories] = useState([]);


  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route>
          <Route path='api/' element={<Home />} />
          <Route path='api/reviews' element={<Reviews />} />
          <Route
            path='api/categories'
            element={<Categories categories={categories} setCategories={setCategories} />}
          />
             <Route path='api/reviews:category_slug' element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;