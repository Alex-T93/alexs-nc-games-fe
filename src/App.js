
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Reviews from './components/Reviews/Reviews';


function App() {


  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route>
          <Route path='api/' element={<Home />} />
          <Route path='api/reviews' element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;