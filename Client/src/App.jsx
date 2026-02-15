import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import CategoriesCard from './Components/Categoriescard';
import Trending from './Components/Trending';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/categoriesCard' element={<CategoriesCard />} />
      </Routes >
    </>
  )
}

export default App
